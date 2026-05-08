"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function TawkToChat() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname?.startsWith("/admin")) return;

    if (window.Tawk_API) return;

    const loadTawk = () => {
      if (document.getElementById("tawk-script")) return;

      window.Tawk_API = window.Tawk_API || {};
      window.Tawk_LoadStart = new Date();

      const script = document.createElement("script");

      script.id = "tawk-script";
      script.async = true;
      script.src =
        "https://embed.tawk.to/655dbd6b91e5c13bb5b29610/1hfr2nrlg";

      document.body.appendChild(script);

      window.removeEventListener("scroll", loadTawk);
      window.removeEventListener("mousemove", loadTawk);
      window.removeEventListener("touchstart", loadTawk);
    };

    window.addEventListener("scroll", loadTawk, { once: true });
    window.addEventListener("mousemove", loadTawk, { once: true });
    window.addEventListener("touchstart", loadTawk, { once: true });

    return () => {
      window.removeEventListener("scroll", loadTawk);
      window.removeEventListener("mousemove", loadTawk);
      window.removeEventListener("touchstart", loadTawk);
    };
  }, [pathname]);

  return null;
}








// "use client";

// import Script from "next/script";
// import { usePathname } from "next/navigation";

// export default function TawkToChat() {
//   const pathname = usePathname();

//   // Don't show chat widget on admin pages
//   if (pathname?.includes("/admin")) {
//     return null;
//   }

//   return (
//     <Script
//       id="tawk-to"
//       strategy="afterInteractive"
//       dangerouslySetInnerHTML={{
//         __html: `
//           var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
//           (function(){
//             var s1=document.createElement("script"),
//             s0=document.getElementsByTagName("script")[0];
//             s1.async=true;
//             s1.src='https://embed.tawk.to/655dbd6b91e5c13bb5b29610/1hfr2nrlg';
//             s1.charset='UTF-8';
//             s1.setAttribute('crossorigin','*');
//             s0.parentNode.insertBefore(s1,s0);
//           })();
//         `,
//       }}
//     />
//   );
// }
