"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  WhatsappLogo,
  EnvelopeSimple,
  CaretRight,
  CheckCircle,
  ShieldCheck,
} from "@phosphor-icons/react";
import { company, contact } from "@/lib/content";

export default function RequestQuotePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    species: "Azobé",
    productType: "Sawn Timber",
    volume: "",
    destination: "",
    specifications: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const getWhatsAppPrefillUrl = () => {
    const text = `Hello Prime Wood Global, I would like to request an export quote:
- Name: ${formData.name || "N/A"}
- Company: ${formData.companyName || "N/A"}
- Species: ${formData.species}
- Product: ${formData.productType}
- Target Volume: ${formData.volume || "1 Container"}
- Destination Port: ${formData.destination || "N/A"}
- Specs / Moisture: ${formData.specifications || "Standard export"}`;
    return `https://wa.me/237674429893?text=${encodeURIComponent(text)}`;
  };

  return (
    <main className="min-h-screen bg-[#faf7f2]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0a2818] via-[#031d0d] to-[#06180e] text-white pt-20 pb-16 sm:pt-24 sm:pb-20 border-b border-[#0f381c]">
        <div className="absolute inset-0">
          <Image
            src="/images/1453b-1.jpg"
            alt="Request timber export quotation"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#021509]/95 via-[#021509]/85 to-[#021509]/70" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-300/80 mb-6">
            <Link href="/" className="hover:text-[#d5920c] transition-colors">
              Home
            </Link>
            <CaretRight className="h-3 w-3 text-slate-400" />
            <span className="text-[#d5920c]">Request Quote</span>
          </div>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d5920c]/30 bg-[#031f0e]/60 px-4 py-2 shadow-sm backdrop-blur-md mb-6">
              <ShieldCheck className="h-5 w-5 text-[#d5920c]" weight="fill" />
              <span className="text-sm font-bold tracking-wide text-slate-100">
                Export Proforma Quotation
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-5">
              Request an{" "}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#ffe082] via-[#f5b324] to-[#d5920c]">
                Export Quotation
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed mb-8">
              Fill in your project requirements and our export team will respond within 24 hours with availability, pricing, and shipping options.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#fcfbf7] to-[#f4efe6] rounded-2xl p-7 sm:p-10 border border-[#e4e2d8] shadow-xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-2">
                  <CheckCircle className="h-10 w-10" weight="fill" />
                </div>
                <h3 className="text-2xl font-black text-[#032f0e]">
                  Quote Request Submitted Successfully!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you for your inquiry. Our export team will review your requirements and respond with a formal proforma quotation within 24 hours.
                </p>
                <div className="pt-6">
                  <a
                    href={getWhatsAppPrefillUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#25D366] text-white font-bold text-sm shadow-md hover:bg-[#20ba59] transition-all"
                  >
                    <WhatsappLogo className="h-5 w-5" weight="fill" />
                    <span>Also Send to WhatsApp for Priority Processing</span>
                  </a>
                </div>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-slate-500 hover:text-slate-800 underline"
                  >
                    Submit another quote request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="mb-4">
                  <h3 className="text-2xl font-black text-[#032f0e]">
                    Export Quotation Request Form
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Provide your timber requirements below. Our team responds within 24 hours.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#d5920c] focus:ring-1 focus:ring-[#d5920c] outline-none text-sm text-slate-900 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#d5920c] focus:ring-1 focus:ring-[#d5920c] outline-none text-sm text-slate-900 bg-white"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Phone (with country code) *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+33 6 12 34 56 78"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#d5920c] focus:ring-1 focus:ring-[#d5920c] outline-none text-sm text-slate-900 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="Your Company Ltd"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#d5920c] focus:ring-1 focus:ring-[#d5920c] outline-none text-sm text-slate-900 bg-white"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Timber Species *
                    </label>
                    <select
                      name="species"
                      value={formData.species}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#d5920c] focus:ring-1 focus:ring-[#d5920c] outline-none text-sm text-slate-900 bg-white"
                    >
                      <option value="Azobé">Azobé (Lophira alata)</option>
                      <option value="Tali">Tali (Erythrophleum ivorense)</option>
                      <option value="Sapelli">Sapelli (Entandrophragma cylindricum)</option>
                      <option value="Padouk">Padouk (Pterocarpus soyauxii)</option>
                      <option value="Ebony">Ebony (Diospyros crassiflora)</option>
                      <option value="Ayous">Ayous (Triplochiton scleroxylon)</option>
                      <option value="Iroko">Iroko (Milicia excelsa)</option>
                      <option value="Bilinga">Bilinga (Nauclea diderrichii)</option>
                      <option value="Multiple">Multiple Species / Package Order</option>
                      <option value="Other">Other Cameroon Species</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Product Form *
                    </label>
                    <select
                      name="productType"
                      value={formData.productType}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#d5920c] focus:ring-1 focus:ring-[#d5920c] outline-none text-sm text-slate-900 bg-white"
                    >
                      <option value="Sawn Timber (Rough/Dimensioned)">Sawn Timber (Rough or Dimensioned)</option>
                      <option value="Hardwood Round Logs">Hardwood Round Logs</option>
                      <option value="Squared Logs / Beams">Squared Logs / Heavy Beams</option>
                      <option value="Kiln-Dried Sawn">Kiln-Dried (KD) Sawn Timber</option>
                    </select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Target Volume *
                    </label>
                    <input
                      type="text"
                      name="volume"
                      required
                      value={formData.volume}
                      onChange={handleChange}
                      placeholder="e.g., 1 x 40ft container (25m³)"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#d5920c] focus:ring-1 focus:ring-[#d5920c] outline-none text-sm text-slate-900 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Destination Port *
                    </label>
                    <input
                      type="text"
                      name="destination"
                      required
                      value={formData.destination}
                      onChange={handleChange}
                      placeholder="e.g., Rotterdam, Hamburg, Shanghai"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#d5920c] focus:ring-1 focus:ring-[#d5920c] outline-none text-sm text-slate-900 bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Dimensions & Specifications
                  </label>
                  <textarea
                    name="specifications"
                    rows={3}
                    value={formData.specifications}
                    onChange={handleChange}
                    placeholder="Example: 50mm x 150mm x 3000mm, KD 12-14%, Grade A/B mix, etc."
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#d5920c] focus:ring-1 focus:ring-[#d5920c] outline-none text-sm text-slate-900 bg-white"
                  ></textarea>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 py-3 px-6 rounded-lg bg-[#d5920c] hover:bg-[#b87b08] text-white font-bold text-sm shadow-md transition-all cursor-pointer text-center"
                  >
                    Submit Quote Request
                  </button>

                  <a
                    href={getWhatsAppPrefillUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm shadow-sm transition-all"
                  >
                    <WhatsappLogo className="h-5 w-5" weight="fill" />
                    <span>Send via WhatsApp</span>
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
