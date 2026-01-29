import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import localFont from "next/font/local";
import BootstrapClient from "@/Components/BootstrapClient/BootstrapClient";
import { Toaster } from "react-hot-toast";
import Script from "next/script";

/* =========================
   LOCAL FONTS
========================= */
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
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "jjlvg2o4nh");
  `}
        </Script>

        {/* =========================
           TAWK.TO LIVE CHAT
        ========================= */}
        <Script
          id="tawk-to"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
                var s1=document.createElement("script"),
                s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/655dbd6b91e5c13bb5b29610/1hfr2nrlg';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
