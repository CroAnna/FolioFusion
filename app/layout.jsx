import { Gabarito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const font = Gabarito({ subsets: ["latin"] });

export const metadata = {
  title: "Build your portfolio",
  description:
    "Generate your portfolio page in minutes to easily get more job opportunities.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`flex flex-col min-h-screen ${font.className}`}>
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
