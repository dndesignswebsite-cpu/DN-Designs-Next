import Footer from '@/Components/Footer/Footer';
import Header from '@/Components/Header/Header';
import "../globals.css";

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

