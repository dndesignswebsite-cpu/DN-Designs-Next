import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import localFont from "next/font/local";
import BootstrapClient from "@/Components/BootstrapClient/BootstrapClient";
import { Toaster } from "react-hot-toast";
import Script from "next/script";
import TawkToChat from "@/Components/TawkToChat/TawkToChat";
import MicrosoftClarity from "@/Components/MicrosoftClarity/MicrosoftClarity";

/* =========================
   LOCAL FONTS
========================= */
// const corbert = localFont({
//   src: "../../public/fonts/Corbert-Medium.woff2",
//   variable: "--font-corbert",
// });
// const corbertBold = localFont({
//   src: "../../public/fonts/Corbert-Bold.woff2",
//   variable: "--font-corbert-bold",
// });
// const roboto = localFont({
//   src: "../../public/fonts/Roboto-Regular.woff2",
//   variable: "--font-roboto",
// });


const corbert = localFont({
  src: "../../public/fonts/Corbert-Medium.woff2",
  variable: "--font-corbert",
  display: "swap",
  preload: true,
});

const corbertBold = localFont({
  src: "../../public/fonts/Corbert-Bold.woff2",
  variable: "--font-corbert-bold",
  display: "swap",
  preload: true,
});

const roboto = localFont({
  src: "../../public/fonts/Roboto-Regular.woff2",
  variable: "--font-roboto",
  display: "swap",
  preload: true,
});


/* =========================
   VIEWPORT
========================= */
export const viewport = {
  width: "device-width",
  initialScale: 1,
};

/* =========================
   METADATA (GSC VERIFIED)
========================= */
export const metadata = {
  verification: {
    google: "NawdyTQVpBV3gOAngfWPzw5h57s40AR6lcNvVmLjk7Y",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${corbert.variable} ${corbertBold.variable} ${roboto.variable}`}
    >
      <body suppressHydrationWarning>
        {/* =========================
           GTM - NOSCRIPT (BODY START)
        ========================= */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WQ839LB8"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* =========================
           GTM - MAIN SCRIPT (HEAD)
           BEST PRACTICE: beforeInteractive
        ========================= */}
        <Script id="gtm-head" strategy="beforeInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];
            w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WQ839LB8');
          `}
        </Script>

        {/* =========================
           BOOTSTRAP JS CLIENT
        ========================= */}
        <BootstrapClient />

        {/* =========================
           TOAST NOTIFICATIONS
        ========================= */}
        <Toaster position="top-right" />

        {/* =========================
           PAGE CONTENT
        ========================= */}
        {children}

        {/* =========================
            MICROSOFT CLARITY
         ========================= */}
        {/* <MicrosoftClarity /> */}
        <MicrosoftClarity/>

        <TawkToChat />
      </body>
    </html>
  );
}
