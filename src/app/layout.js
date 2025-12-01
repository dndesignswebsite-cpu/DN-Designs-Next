import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import localFont from 'next/font/local';
import Footer from '@/Components/Footer/Footer';
import Header from '@/Components/Header/Header';
import BootstrapClient from '@/Components/BootstrapClient/BootstrapClient';



// fonts
const corbert = localFont({
  src: "../../public/fonts/Corbert-Medium.woff2",
  variable: "--font-corbert", 
});

const roboto = localFont({
  src: "../../public/fonts/Roboto-Regular.woff2",
  variable: "--font-roboto", 
});






// meta data
export const metadata = {
  title: "DN Designs",
  description: "Best Digital Marketing Agency",

  // ⭐ Open Graph (WhatsApp, Insta, FB, LinkedIn)
  openGraph: {
    title: "DN Designs – Best Digital Marketing Agency",
    description: "We provide top-quality digital marketing solutions for brands.",
    url: "https://dn-designs-next.vercel.app/",
    siteName: "DN Designs",
    images: [
      {
        url: "https://dndesigns.co.in/wp-content/uploads/2025/08/enlite-2.jpg", // hosted OG image
        width: 1200,
        height: 630,
        alt: "DN Designs SEO OG Image"
      }
    ],
    type: "website",
  },

  // ⭐ Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "DN Designs – Best Digital Marketing Agency",
    description: "Grow your business with our digital marketing services.",
    images: ["https://dndesigns.co.in/wp-content/uploads/2025/08/enlite-2.jpg"], // same OG image here
  },
};






export default function RootLayout({ children }) {
  return (
      <html lang="en" className={`${corbert.variable} ${roboto.variable}`}>
      <body>
      <BootstrapClient/>
      <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
