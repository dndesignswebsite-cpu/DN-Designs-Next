import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import localFont from "next/font/local";
import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";
import BootstrapClient from "@/Components/BootstrapClient/BootstrapClient";
import Script from "next/script";

// Fonts
const corbert = localFont({
  src: "../../public/fonts/Corbert-Medium.woff2",
  variable: "--font-corbert",
});

const corbertBold = localFont({
  src: "../../public/fonts/Corbert-Bold.woff2",
  variable: "--font-corbert-bold",
});

const roboto = localFont({
  src: "../../public/fonts/Roboto-Regular.woff2",
  variable: "--font-roboto",
});

// Viewport configuration (separate export in Next.js 14+)
export const viewport = {
  width: "device-width",
  initialScale: 1,
};

// Meta data (Home page default)
export const metadata = {
  title: "DN Designs – Best Digital Marketing Agency",
  description: "We provide top-quality digital marketing solutions.",
  icons: { icon: "/window.svg" },
  authors: [
    { name: "DN Designs Team", url: "https://dn-designs-next.vercel.app" },
  ],
  alternates: { canonical: "https://dn-designs-next.vercel.app/" },
  robots: { index: true, follow: true, nocache: true },
  openGraph: {
    title: "DN Designs – Best Digital Marketing Agency",
    description:
      "We provide top-quality digital marketing solutions for brands.",
    url: "https://dn-designs-next.vercel.app/",
    siteName: "DN Designs",
    images: [
      {
        url: "https://dndesigns.co.in/wp-content/uploads/2025/08/enlite-2.jpg",
        width: 1200,
        height: 630,
        alt: "DN Designs SEO OG Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DN Designs – Best Digital Marketing Agency",
    description: "Grow your business with our digital marketing services.",
    images: ["https://dndesigns.co.in/wp-content/uploads/2025/08/enlite-2.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${corbert.variable} ${corbertBold.variable} ${roboto.variable}`}>
      <body>
        {/* JSON-LD Organization Schema*/}
        <Script
          type="application/ld+json"
          id="organization-schema"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "DN Designs",
              url: "https://dn-designs-next.vercel.app/",
              logo: "https://dndesigns.co.in/wp-content/uploads/2025/08/enlite-2.jpg",
              sameAs: [
                "https://www.facebook.com/dndesigns",
                "https://www.linkedin.com/company/dndesigns",
                "https://twitter.com/dndesigns",
              ],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+91-1234567890",
                  contactType: "Customer Service",
                  areaServed: "IN",
                  availableLanguage: "en",
                },
              ],
            }),
          }}
        />

        <BootstrapClient />
        {/* <Header />  */}
        {children}
        {/* <Footer /> */}
        
      </body>
    </html>
  );
}
