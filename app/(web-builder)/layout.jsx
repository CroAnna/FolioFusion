import Footer from "../_components/Footer";
import Navbar from "../_components/Navbar";
import ScrollToTop from "../_components/ScrollToTop";
import CookieConsent from "../_components/CookieConsent";

export default function WebBuilderLayout({ children }) {
  return (
    <>
      <CookieConsent />
      <ScrollToTop />
      <div className={`flex flex-col min-h-screen`}>
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </div>
    </>
  );
}
