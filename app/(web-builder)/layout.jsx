import Footer from "../_components/Footer";
import Navbar from "../_components/Navbar";

export default function WebBuilderLayout({ children }) {
  return (
    <div className={`flex flex-col min-h-screen`}>
      <Navbar />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
}
