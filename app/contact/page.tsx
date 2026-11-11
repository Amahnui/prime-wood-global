"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  EnvelopeSimple,
  WhatsappLogo,
  FacebookLogo,
  MapPin,
  Clock,
  CaretRight,
  CheckCircle,
} from "@phosphor-icons/react";
import { company, contact } from "@/lib/content";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "contact",
          data: formData,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message");
      }

      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        companyName: "",
        message: "",
      });
    } catch (err) {
      console.error("Error sending message:", err);
      setError(
        err instanceof Error ? err.message : "Failed to send message. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#faf7f2]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0a2818] via-[#031d0d] to-[#06180e] text-white pt-20 pb-16 sm:pt-24 sm:pb-20 border-b border-[#0f381c]">
        <div className="absolute inset-0">
          <Image
            src="/images/cameroon_timber_hero.jpg"
            alt="Contact Prime Wood Global"
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
            <span className="text-[#d5920c]">Contact</span>
          </div>

          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-5">
              Get in Touch with{" "}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#ffe082] via-[#f5b324] to-[#d5920c]">
                Our Export Team
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed mb-8">
              Have questions about species availability, volumes, pricing, or shipping schedules? Our commercial export desk is ready to assist you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
            {/* Left: Contact Cards */}
            <div className="lg:col-span-5 space-y-6">
              {/* WhatsApp */}
              <a
                href={company.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gradient-to-br from-[#fcfbf7] to-[#f4efe6] border border-[#25D366]/40 rounded-2xl p-6 hover:border-[#25D366] hover:shadow-lg transition-all group"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-[#25D366]/20 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] group-hover:scale-110 transition-transform">
                    <WhatsappLogo className="h-6 w-6" weight="fill" />
                  </div>
                  <div>
                    <div className="text-xs text-[#25D366] font-bold uppercase tracking-wider">
                      Instant Response
                    </div>
                    <div className="text-xl font-bold text-[#0d1a13]">Direct WhatsApp</div>
                  </div>
                </div>
                <p className="text-sm text-slate-700 mb-3">
                  Send your inquiry directly to our WhatsApp export desk for immediate feedback on availability and pricing.
                </p>
                <div className="text-base font-bold text-[#25D366]">
                  {company.whatsapp}
                </div>
              </a>

              {/* Email */}
              <a
                href={company.emailHref}
                className="block bg-gradient-to-br from-[#fcfbf7] to-[#f4efe6] border border-[#e4e2d8] rounded-2xl p-6 hover:border-[#d5920c] hover:shadow-lg transition-all group"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-[#d5920c]/15 border border-[#d5920c]/30 flex items-center justify-center text-[#d5920c] group-hover:scale-110 transition-transform">
                    <EnvelopeSimple className="h-6 w-6" weight="fill" />
                  </div>
                  <div>
                    <div className="text-xs text-[#d5920c] font-bold uppercase tracking-wider">
                      Official Email
                    </div>
                    <div className="text-xl font-bold text-[#0d1a13]">Commercial Desk</div>
                  </div>
                </div>
                <p className="text-sm text-slate-700 mb-3">
                  For formal tender submissions, proforma requests, and specification sheets.
                </p>
                <div className="text-base font-bold text-[#d5920c] break-all">
                  {company.email}
                </div>
              </a>

              {/* Facebook */}
              <a
                href={company.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gradient-to-br from-[#fcfbf7] to-[#f4efe6] border border-[#e4e2d8] rounded-2xl p-6 hover:border-blue-400 hover:shadow-lg transition-all group"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/15 border border-blue-400/30 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                    <FacebookLogo className="h-6 w-6" weight="fill" />
                  </div>
                  <div>
                    <div className="text-xs text-blue-400 font-bold uppercase tracking-wider">
                      Social Updates
                    </div>
                    <div className="text-xl font-bold text-[#0d1a13]">Facebook Page</div>
                  </div>
                </div>
                <p className="text-sm text-slate-700 mb-3">
                  Follow recent yard operations, stock arrivals, and port container updates.
                </p>
                <div className="text-base font-bold text-blue-400">
                  {company.facebookDisplay}
                </div>
              </a>

              {/* Operating Info */}
              <div className="bg-[#03200a] border border-[#144d28] rounded-2xl p-6 text-xs text-slate-300 space-y-3">
                <div className="flex items-start gap-2.5">
                  <MapPin className="h-4 w-4 text-[#d5920c] shrink-0 mt-0.5" weight="fill" />
                  <div>
                    <span className="font-bold text-white">Forestry Base:</span>{" "}
                    {company.locations.kribi.address}
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <MapPin className="h-4 w-4 text-[#d5920c] shrink-0 mt-0.5" weight="fill" />
                  <div>
                    <span className="font-bold text-white">Port Hub:</span>{" "}
                    {company.locations.douala.address}
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Clock className="h-4 w-4 text-[#d5920c] shrink-0 mt-0.5" weight="fill" />
                  <div>
                    <span className="font-bold text-white">Response Time:</span>{" "}
                    {company.workingHours}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-7 bg-gradient-to-br from-[#fcfbf7] to-[#f4efe6] rounded-2xl p-7 sm:p-10 border border-[#e4e2d8] shadow-xl">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-2">
                    <CheckCircle className="h-10 w-10" weight="fill" />
                  </div>
                  <h3 className="text-2xl font-black text-[#032f0e]">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you for contacting us. Our export team will respond within 24 hours.
                  </p>
                  <div className="pt-6">
                    <a
                      href={company.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#25D366] text-white font-bold text-sm shadow-md hover:bg-[#20ba59] transition-all"
                    >
                      <WhatsappLogo className="h-5 w-5" weight="fill" />
                      <span>Also Contact via WhatsApp</span>
                    </a>
                  </div>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="text-xs text-slate-500 hover:text-slate-800 underline"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="mb-4">
                    <h3 className="text-2xl font-black text-[#032f0e]">
                      Send Us a Message
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Fill in your details and we'll get back to you within 24 hours.
                    </p>
                  </div>

                  {error && (
                    <div className="p-3 rounded-lg bg-red-50 border border-red-200">
                      <p className="text-sm text-red-600">{error}</p>
                    </div>
                  )}

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
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#d5920c] focus:ring-1 focus:ring-[#d5920c] outline-none text-sm text-slate-900"
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
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#d5920c] focus:ring-1 focus:ring-[#d5920c] outline-none text-sm text-slate-900"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Phone Number (with country code) *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+33 6 12 34 56 78"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#d5920c] focus:ring-1 focus:ring-[#d5920c] outline-none text-sm text-slate-900"
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
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#d5920c] focus:ring-1 focus:ring-[#d5920c] outline-none text-sm text-slate-900"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your timber requirements, questions, or inquiries..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#d5920c] focus:ring-1 focus:ring-[#d5920c] outline-none text-sm text-slate-900"
                    ></textarea>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`flex-1 py-3 px-6 rounded-lg bg-[#d5920c] hover:bg-[#b87b08] text-white font-bold text-sm shadow-md transition-all text-center ${
                        isSubmitting ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
                      }`}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>

                    <a
                      href={company.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm shadow-sm transition-all"
                    >
                      <WhatsappLogo className="h-5 w-5" weight="fill" />
                      <span>WhatsApp Instead</span>
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
