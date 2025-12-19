import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";
import SmoothScroll from "@/Components/SmoothScroll";
import "../globals.css";
import ScrollToTop from "@/Components/ScrollToTop/ScrollToTop";
import WhatsApp from "@/Components/WhatsApp/WhatsApp";

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
