import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";
import SmoothScroll from "@/Components/SmoothScroll";
import "../globals.css";
import ScrollToTop from "@/Components/ScrollToTop/ScrollToTop";
import WhatsApp from "@/Components/WhatsApp/WhatsApp";




// Meta data (Home page default)
export const metadata = {
  title: "Creative Branding Agency | Brand Design & Packaging Company",
  description: "Trusted branding & design agency in Noida & Delhi NCR, India with years of success in creative brand design, packaging & marketing for global brands.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  authors: [
    { name: "DN Designs Team", url: "https://dn-designs-next.vercel.app" },
  ],
  alternates: { canonical: "https://dndesigns.co.in/" },
  robots: { index: true, follow: true, nocache: true },
  openGraph: {
    title: "Creative Branding Agency | Brand Design & Packaging Company",
    description:
      "Trusted branding & design agency in Noida & Delhi NCR, India with years of success in creative brand design, packaging & marketing for global brands.",
    url: "https://dn-designs-next.vercel.app/",
    siteName: "DN Designs",
    images: [
      {
        url: "https://dndesigns.co.in/wp-content/uploads/2025/05/uttftf.jpg",
        width: 1200,
        height: 630,
        alt: "DN Designs SEO OG Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Creative Branding Agency | Brand Design & Packaging Company",
    description: "Trusted branding & design agency in Noida & Delhi NCR, India with years of success in creative brand design, packaging & marketing for global brands.",
    images: ["https://dndesigns.co.in/wp-content/uploads/2025/05/uttftf.jpg"],
  },
};
// ends here

export default function MainLayout({ children }) {
  return (
    <SmoothScroll>
      <Header />
      <main>{children}</main>
      <ScrollToTop />
      <Footer />
      <WhatsApp />
    </SmoothScroll>  
  );
}
