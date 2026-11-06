import Link from 'next/link';

export default function TermsOfUsePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-forest-50 via-white to-forest-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-forest-900 to-forest-700 text-white py-20">
        <div className="absolute inset-0 bg-[url('/images/wood-texture.jpg')] opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Use</h1>
            <p className="text-xl text-forest-100">
              Terms and conditions governing the use of Prime Wood Global services and website
            </p>
            <p className="text-sm text-forest-200 mt-4">
              Last Updated: January 2025
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12">
            
            {/* 1. Acceptance of Terms */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-forest-900 mb-4">1. Acceptance of Terms</h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  By accessing and using the Prime Wood Global website and services, you accept and agree to be bound by these Terms of Use and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                </p>
                <p>
                  These terms apply to all visitors, users, and others who access or use our services, including but not limited to timber buyers, exporters, importers, and business partners.
                </p>
              </div>
            </div>

            {/* 2. Business Services */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-forest-900 mb-4">2. Business Services</h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  Prime Wood Global provides timber export services, including but not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Supply of sawn timber and timber logs</li>
                  <li>Export logistics and documentation</li>
                  <li>Quality assurance and grading services</li>
                  <li>Custom cutting and processing</li>
                  <li>Shipping and transportation coordination</li>
                </ul>
                <p>
                  All services are subject to availability, pricing confirmation, and contractual agreements between parties.
                </p>
              </div>
            </div>

            {/* 3. Quotations and Pricing */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-forest-900 mb-4">3. Quotations and Pricing</h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  All quotations provided through our website or communication channels are:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Valid for 30 days unless otherwise specified</li>
                  <li>Subject to timber availability and market conditions</li>
                  <li>Exclusive of taxes, duties, and shipping costs unless stated</li>
                  <li>Non-binding until confirmed in writing by Prime Wood Global</li>
                </ul>
                <p>
                  Final prices may vary based on specifications, volume, delivery location, and current market rates. We reserve the right to adjust pricing due to currency fluctuations, transportation costs, or regulatory changes.
                </p>
              </div>
            </div>

            {/* 4. Orders and Contracts */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-forest-900 mb-4">4. Orders and Contracts</h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  Purchase orders and contracts are subject to the following conditions:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>All orders must be confirmed in writing via email or formal contract</li>
                  <li>A deposit may be required before production or processing begins</li>
                  <li>Lead times are estimates and may vary based on production schedules</li>
                  <li>Minimum order quantities may apply for certain timber species or cuts</li>
                  <li>Custom specifications must be agreed upon before order confirmation</li>
                </ul>
                <p>
                  We reserve the right to refuse or cancel orders at our discretion, particularly in cases of unavailability, pricing errors, or fraudulent activity.
                </p>
              </div>
            </div>

            {/* 5. Payment Terms */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-forest-900 mb-4">5. Payment Terms</h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  Unless otherwise agreed in writing:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Payment terms are typically 30% deposit, 70% before shipment</li>
                  <li>Accepted payment methods include bank transfer, Letter of Credit (L/C), and other agreed methods</li>
                  <li>Late payments may incur interest charges or delay shipment</li>
                  <li>All bank charges and fees are the responsibility of the buyer</li>
                  <li>Payment currency is typically USD or EUR unless otherwise agreed</li>
                </ul>
                <p>
                  Failure to make timely payments may result in order cancellation, withholding of goods, or legal action to recover amounts owed.
                </p>
              </div>
            </div>

            {/* 6. Shipping and Delivery */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-forest-900 mb-4">6. Shipping and Delivery</h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  Shipping and delivery terms are governed by Incoterms 2020 or as specified in the contract:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Common terms include FOB (Free on Board), CIF (Cost, Insurance, and Freight), and CFR (Cost and Freight)</li>
                  <li>Delivery timelines are estimates and subject to factors beyond our control</li>
                  <li>Risk transfers to the buyer according to agreed Incoterms</li>
                  <li>Delays due to weather, port congestion, or customs are not our responsibility</li>
                  <li>The buyer is responsible for customs clearance and import duties at destination</li>
                </ul>
                <p>
                  We will make reasonable efforts to meet delivery schedules but cannot guarantee specific arrival dates.
                </p>
              </div>
            </div>

            {/* 7. Quality and Inspection */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-forest-900 mb-4">7. Quality and Inspection</h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  All timber products are subject to quality control:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Products are graded according to industry standards or agreed specifications</li>
                  <li>Pre-shipment inspection is available upon request (additional costs may apply)</li>
                  <li>Natural variations in wood grain, color, and characteristics are inherent and not defects</li>
                  <li>Claims for quality issues must be reported within 7 days of delivery</li>
                  <li>Photographic evidence and documentation are required for claims</li>
                </ul>
                <p>
                  Once goods leave our facility or port of loading, quality inspection must be conducted promptly. Claims made after extended periods may not be accepted.
                </p>
              </div>
            </div>

            {/* 8. Returns and Refunds */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-forest-900 mb-4">8. Returns and Refunds</h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  Due to the nature of timber products and international shipping:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Returns are generally not accepted once production has begun</li>
                  <li>Custom-cut or specially processed timber is non-returnable</li>
                  <li>Refunds may be issued in cases of confirmed quality defects or non-delivery</li>
                  <li>Partial refunds or replacements may be offered at our discretion</li>
                  <li>Return shipping costs, if applicable, are the buyer's responsibility</li>
                </ul>
                <p>
                  All return and refund requests must be submitted in writing with supporting documentation and are subject to review and approval.
                </p>
              </div>
            </div>

            {/* 9. Intellectual Property */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-forest-900 mb-4">9. Intellectual Property</h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  All content on the Prime Wood Global website, including text, graphics, logos, images, and software, is the property of Prime Wood Global or its content suppliers and is protected by international copyright laws.
                </p>
                <p>
                  You may not:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Reproduce, duplicate, or copy material from our website for commercial purposes</li>
                  <li>Redistribute content without written permission</li>
                  <li>Use our trademarks, logos, or branding without authorization</li>
                </ul>
              </div>
            </div>

            {/* 10. Limitation of Liability */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-forest-900 mb-4">10. Limitation of Liability</h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  To the maximum extent permitted by law:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Prime Wood Global shall not be liable for indirect, incidental, or consequential damages</li>
                  <li>Our liability is limited to the value of the specific transaction in question</li>
                  <li>We are not responsible for delays or failures due to force majeure events</li>
                  <li>Website information is provided "as is" without warranties of any kind</li>
                  <li>We do not guarantee uninterrupted or error-free website operation</li>
                </ul>
                <p>
                  Force majeure events include but are not limited to: natural disasters, war, terrorism, labor disputes, government actions, transportation delays, and pandemics.
                </p>
              </div>
            </div>

            {/* 11. Compliance and Certifications */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-forest-900 mb-4">11. Compliance and Certifications</h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  Prime Wood Global is committed to legal and sustainable forestry practices:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>All timber is sourced from legal and certified suppliers</li>
                  <li>We comply with FLEGT licensing and EUTR regulations</li>
                  <li>Chain of Custody documentation is provided upon request</li>
                  <li>Buyers are responsible for compliance with their local import regulations</li>
                  <li>Misrepresentation of documentation or illegal activities will result in contract termination</li>
                </ul>
                <p>
                  Learn more about our commitment on our <Link href="/responsible-sourcing" className="text-forest-600 hover:text-forest-700 underline">Responsible Sourcing</Link> page.
                </p>
              </div>
            </div>

            {/* 12. Dispute Resolution */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-forest-900 mb-4">12. Dispute Resolution</h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  In the event of disputes:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Parties agree to first attempt resolution through good-faith negotiation</li>
                  <li>Mediation or arbitration may be pursued before litigation</li>
                  <li>Disputes shall be governed by the laws of Cameroon</li>
                  <li>Legal jurisdiction shall be the courts of Douala, Cameroon, unless otherwise agreed</li>
                </ul>
                <p>
                  International contracts may specify alternative arbitration venues such as ICC (International Chamber of Commerce) or other recognized arbitration bodies.
                </p>
              </div>
            </div>

            {/* 13. Website Use and Conduct */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-forest-900 mb-4">13. Website Use and Conduct</h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  When using our website, you agree not to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use the site for any unlawful purpose or in violation of these terms</li>
                  <li>Attempt to gain unauthorized access to systems or data</li>
                  <li>Transmit viruses, malware, or harmful code</li>
                  <li>Scrape, crawl, or harvest data without permission</li>
                  <li>Impersonate another person or entity</li>
                  <li>Interfere with the proper functioning of the website</li>
                </ul>
                <p>
                  Violations may result in termination of access and legal action.
                </p>
              </div>
            </div>

            {/* 14. Amendments */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-forest-900 mb-4">14. Amendments</h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  Prime Wood Global reserves the right to modify these Terms of Use at any time. Changes will be effective immediately upon posting to this page. Your continued use of the website after changes constitutes acceptance of the revised terms.
                </p>
                <p>
                  We recommend reviewing this page periodically for updates. The "Last Updated" date at the top indicates when the most recent changes were made.
                </p>
              </div>
            </div>

            {/* 15. Contact Information */}
            <div className="mb-0">
              <h2 className="text-2xl font-bold text-forest-900 mb-4">15. Contact Information</h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  For questions, clarifications, or concerns regarding these Terms of Use, please contact us:
                </p>
                <div className="bg-forest-50 p-6 rounded-lg mt-4">
                  <h3 className="font-semibold text-forest-900 mb-3">Prime Wood Global</h3>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium">Address:</span> BP 5574 Douala, Cameroon</p>
                    <p><span className="font-medium">Phone:</span> +237 677 123 456</p>
                    <p><span className="font-medium">WhatsApp:</span> +237 677 123 456</p>
                    <p><span className="font-medium">Email:</span> Support@primewoodglobal.com</p>
                    <p><span className="font-medium">Website:</span> www.primewoodglobal.com</p>
                  </div>
                </div>
                <p className="mt-6">
                  For legal matters, please direct correspondence to our legal department at Support@primewoodglobal.com.
                </p>
              </div>
            </div>

          </div>

          {/* Quick Links */}
          <div className="max-w-4xl mx-auto mt-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-forest-900 mb-4">Related Pages</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <Link 
                  href="/privacy-policy"
                  className="flex items-center gap-3 p-4 bg-forest-50 rounded-lg hover:bg-forest-100 transition-colors"
                >
                  <svg className="w-6 h-6 text-forest-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span className="font-medium text-forest-900">Privacy Policy</span>
                </Link>

                <Link 
                  href="/responsible-sourcing"
                  className="flex items-center gap-3 p-4 bg-forest-50 rounded-lg hover:bg-forest-100 transition-colors"
                >
                  <svg className="w-6 h-6 text-forest-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="font-medium text-forest-900">Responsible Sourcing</span>
                </Link>

                <Link 
                  href="/contact"
                  className="flex items-center gap-3 p-4 bg-forest-50 rounded-lg hover:bg-forest-100 transition-colors"
                >
                  <svg className="w-6 h-6 text-forest-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="font-medium text-forest-900">Contact Us</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
