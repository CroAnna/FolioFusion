import { Gabarito } from "next/font/google";
import "./globals.css";

const font = Gabarito({ subsets: ["latin"] });

export const metadata = {
  title: "Build your portfolio",
  description:
    "Generate your portfolio page in minutes to easily get more job opportunities.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
