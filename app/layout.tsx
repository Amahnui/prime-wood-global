import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteContent } from "@/lib/content";

export const metadata: Metadata = {
  metadataBase: new URL("https://primewoodglobal.com"),
  title: siteContent.Metadata.title,
  description: siteContent.Metadata.description,
  keywords: siteContent.Metadata.keywords,
  icons: {
    icon: "/images/primewoodlogo.png",
  },
  openGraph: {
    title: siteContent.Metadata.title,
    description: siteContent.Metadata.description,
    url: "https://primewoodglobal.com",
    siteName: siteContent.company.name,
    images: [
      {
        url: "/images/cameroon_timber_hero.jpg",
        width: 1200,
        height: 630,
        alt: "Prime Wood Global - Cameroon Hardwood Exporter",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-white text-[#0d1a13]"
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
