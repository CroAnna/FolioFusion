import { Gabarito } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const font = Gabarito({ subsets: ["latin"] });

export const metadata = {
  title: "Create Your Developer Portfolio Fast",
  description:
    "Generate your portfolio page in minutes to easily get more job opportunities. Endless customization. Link your projects, social medias, experience, activities and other info.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`flex flex-col min-h-screen ${font.className}`}>
        <Providers>
          <div className="flex-1">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
