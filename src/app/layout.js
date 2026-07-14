import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import localFont from "next/font/local";
import BootstrapClient from "@/Components/BootstrapClient/BootstrapClient";
import { Toaster } from "react-hot-toast";
import Script from "next/script";
// import TawkToChat from "@/Components/TawkToChat/TawkToChat";
// import MicrosoftClarity from "@/Components/MicrosoftClarity/MicrosoftClarity";

/* =========================
   LOCAL FONTS
========================= */



const corbert = localFont({
  src: "../../public/fonts/Corbert-Medium.woff2",
  variable: "--font-corbert",
  display: "swap",
  preload: true,
  adjustFontFallback: false,
});

const corbertBold = localFont({
  src: "../../public/fonts/Corbert-Bold.woff2",
  variable: "--font-corbert-bold",
  display: "swap",
  preload: true,
  adjustFontFallback: false,
});

const roboto = localFont({
  src: "../../public/fonts/Roboto-Regular.woff2",
  variable: "--font-roboto",
 display: "swap",
  preload: true,
  adjustFontFallback: false,
});

const letsupfont = localFont({
  src: "../../public/fonts/CormorantGaramond-MediumItalic.woff2",
  variable: "--font-letsup",
  display: "swap",
  preload: true,
  adjustFontFallback: false,
});


const OutfitRegular = localFont({
  src: "../../public/fonts/Outfit-Regular.woff2",
  variable: "--font-outfit-regular",
  display: "swap",
  preload: true,
  adjustFontFallback: false,
});


const OutfitLight = localFont({
  src: "../../public/fonts/Outfit-Light.woff2",
  variable: "--font-outfit-light",
  display: "swap",
  preload: true,
  adjustFontFallback: false,
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
      className={`${corbert.variable} ${corbertBold.variable} ${roboto.variable}  ${letsupfont.variable}  ${OutfitRegular.variable} ${OutfitLight.variable}`}
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
        <Script id="gtm-head-1" strategy="afterInteractive">
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



        {/* gtm 2 */}

        <Script id="gtm-head-2" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];
          w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
          var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
          j.async=true;
          j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
          f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-T47W6PBT');
        `}
      </Script>

      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-T47W6PBT"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>



{/* Meta Pixel Noscript */}
  <noscript>
    <img
      height="1"
      width="1"
      style={{ display: "none" }}
      src="https://www.facebook.com/tr?id=1057350923299063&ev=PageView&noscript=1"
      alt=""
    />
  </noscript>

       {/* Meta Pixel */}
  <Script
    id="meta-pixel"
    strategy="afterInteractive"
  >
    {`
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;
      n.push=n;
      n.loaded=!0;
      n.version='2.0';
      n.queue=[];
      t=b.createElement(e);
      t.async=!0;
      t.src=v;
      s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s);
      }(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');

      fbq('init', '1057350923299063');
      fbq('track', 'PageView');
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
        {/* <MicrosoftClarity/>

        <TawkToChat /> */}
      </body>
    </html>
  );
}
