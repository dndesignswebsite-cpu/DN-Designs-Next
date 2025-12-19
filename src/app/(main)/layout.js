import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";
import SmoothScroll from "@/Components/SmoothScroll";
import "../globals.css";
import ScrollToTop from "@/Components/ScrollToTop/ScrollToTop";

export default function MainLayout({ children }) {
  return (
    <SmoothScroll>
      <Header />
      <main>{children}</main>
      <Footer />
      <ScrollToTop />
    </SmoothScroll>
    
  );
}
