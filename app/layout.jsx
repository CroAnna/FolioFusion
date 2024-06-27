import { Gabarito } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/_components/Navbar";
import Footer from "@/app/_components/Footer";
import Providers from "./providers";

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
        <Providers>
          <div className="flex-1">{children}</div>
        </Providers>
        <Footer />
      </body>
    </html>
  );
}
