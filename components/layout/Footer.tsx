"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  EnvelopeSimple,
  WhatsappLogo,
  FacebookLogo,
} from "@phosphor-icons/react";
import { company, footer, speciesList, productsList } from "@/lib/content";

const linkClass =
  "text-base text-white/70 transition-colors hover:text-white";
const headingClass = "mb-4 text-base font-semibold text-white";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#032f0e] text-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          {/* Brand + contact */}
          <div>
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/primewoodlogo.png"
                alt={company.name}
                width={48}
                height={48}
                className="h-12 w-auto"
              />
              <div className="leading-tight">
                <div className="text-xl font-bold">{company.name}</div>
                <div className="text-sm text-white/60">
                  Cameroon Timber Exporter
                </div>
              </div>
            </Link>

            <p className="mt-5 max-w-sm text-base leading-relaxed text-white/70">
              {footer.aboutPWG}
            </p>

            <ul className="mt-6 space-y-3 text-base text-white/80">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-white/60" />
                <div>
                  <div>{company.locations.kribi.address}</div>
                  <div className="text-white/60">
                    {company.locations.douala.address}
                  </div>
                </div>
              </li>
              <li>
                <a
                  href={company.emailHref}
                  className="flex items-center gap-3 break-all transition-colors hover:text-white"
                >
                  <EnvelopeSimple className="h-5 w-5 shrink-0 text-white/60" />
                  {company.email}
                </a>
              </li>
              <li>
                <a
                  href={company.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 transition-colors hover:text-white"
                >
                  <FacebookLogo
                    className="h-5 w-5 shrink-0 text-white/60"
                    weight="fill"
                  />
                  {company.facebookDisplay}
                </a>
              </li>
            </ul>

            <a
              href={company.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-5 py-3 text-base font-semibold text-white transition-colors hover:bg-[#20ba59]"
            >
              <WhatsappLogo className="h-5 w-5" weight="fill" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Species */}
          <div>
            <h4 className={headingClass}>{footer.speciesTitle}</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/timber-species#azobe" className={linkClass}>
                  Azobé
                </Link>
              </li>
              <li>
                <Link href="/timber-species#tali" className={linkClass}>
                  Tali
                </Link>
              </li>
              <li>
                <Link href="/timber-species#sapelli" className={linkClass}>
                  Sapelli
                </Link>
              </li>
              <li>
                <Link href="/timber-species#padouk" className={linkClass}>
                  Padouk
                </Link>
              </li>
              <li>
                <Link href="/timber-species#ebony" className={linkClass}>
                  Ebony
                </Link>
              </li>
              <li>
                <Link href="/timber-species#ayous" className={linkClass}>
                  Ayous
                </Link>
              </li>
              <li>
                <Link href="/timber-species#iroko" className={linkClass}>
                  Iroko
                </Link>
              </li>
            </ul>
          </div>

          {/* Products + export */}
          <div>
            <h4 className={headingClass}>{footer.productsTitle}</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/sawn-timber" className={linkClass}>
                  Sawn Timber
                </Link>
              </li>
              <li>
                <Link href="/timber-logs" className={linkClass}>
                  Timber Logs
                </Link>
              </li>
              <li>
                <Link href="/export-logistics" className={linkClass}>
                  Export & Logistics
                </Link>
              </li>
              <li>
                <Link href="/export-logistics" className={linkClass}>
                  Port of Douala
                </Link>
              </li>
              <li>
                <Link href="/export-logistics" className={linkClass}>
                  Kribi Deep Sea Port
                </Link>
              </li>
              <li>
                <Link href="/export-logistics" className={linkClass}>
                  Export Documentation
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className={headingClass}>Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about-us" className={linkClass}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/responsible-sourcing" className={linkClass}>
                  Responsible Sourcing
                </Link>
              </li>
              <li>
                <Link href="/faq" className={linkClass}>
                  Buyer FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className={linkClass}>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/request-quote" className={linkClass}>
                  Request a Quote
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-sm text-white/60 md:flex-row">
          <p>
            © {currentYear} {company.legalName}. {footer.copyright}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <Link href="/responsible-sourcing" className="transition-colors hover:text-white">
              {footer.compliance}
            </Link>
            <Link href="/privacy-policy" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms-of-use" className="transition-colors hover:text-white">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;