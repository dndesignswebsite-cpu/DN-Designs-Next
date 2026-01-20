import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";
import SmoothScroll from "@/Components/SmoothScroll";
import "../globals.css";
import ScrollToTop from "@/Components/ScrollToTop/ScrollToTop";
import WhatsApp from "@/Components/WhatsApp/WhatsApp";
import Script from "next/script";

/* =========================
   METADATA (HOME PAGE)
========================= */
export const metadata = {
  title: "Creative Branding Agency | Brand Design & Packaging Company",
  description:
    "Trusted branding & design agency in Noida & Delhi NCR, India with years of success in creative brand design, packaging & marketing for global brands.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  authors: [
    { name: "DN Designs Team", url: "https://dndesigns.co.in/" },
  ],
  alternates: { canonical: "https://dndesigns.co.in/" },
  robots: { index: true, follow: true, nocache: true },
  openGraph: {
    title: "Creative Branding Agency | Brand Design & Packaging Company",
    description:
      "Trusted branding & design agency in Noida & Delhi NCR, India with years of success in creative brand design, packaging & marketing for global brands.",
    url: "https://dndesigns.co.in/",
    siteName: "DN Designs",
    images: [
      {
        url: "https://dndesigns.co.in/uploads/pages/dn-logo.png",
        width: 1200,
        height: 1200,
        alt: "DN Designs SEO OG Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Creative Branding Agency | Brand Design & Packaging Company",
    description:
      "Trusted branding & design agency in Noida & Delhi NCR, India with years of success in creative brand design, packaging & marketing for global brands.",
    images: ["https://dndesigns.co.in/uploads/pages/dn-logo.png"],
  },
};

/* =========================
   JSON-LD SCHEMA
========================= */
const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://dndesigns.co.in/#organization",
      "name": "DN Designs",
      "url": "https://dndesigns.co.in/",
      "logo": {
        "@type": "ImageObject",
        "@id": "https://dndesigns.co.in/#logo",
        "url": "https://dndesigns.co.in/uploads/pages/dn-logo.png",
        "contentUrl": "https://dndesigns.co.in/uploads/pages/dn-logo.png",
        "width": 512,
        "height": 512
      },
      "sameAs": [
        "https://www.facebook.com/digitizersnation",
        "https://twitter.com/digitizersn",
        "https://www.instagram.com/dn_designs_india/",
        "https://www.linkedin.com/company/dn-designs-india/",
        "https://www.youtube.com/@dn-designss",
        "https://in.pinterest.com/dndesigns1100/"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://dndesigns.co.in/#website",
      "url": "https://dndesigns.co.in/",
      "name": "DN Designs",
      "publisher": {
        "@id": "https://dndesigns.co.in/#organization"
      },
      "mainEntity": {
        "@id": "https://dndesigns.co.in/#organization"
      },
      "inLanguage": "en-IN",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://dndesigns.co.in/?s={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    }
  ]
};

export default function MainLayout({ children }) {
  return (
    <>
      {/* =========================
         STRUCTURED DATA (SEO)
      ========================= */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />

      <SmoothScroll>
        <Header />
        <main>{children}</main>
        <ScrollToTop />
        <Footer />
        <WhatsApp />
      </SmoothScroll>
    </>
  );
}
