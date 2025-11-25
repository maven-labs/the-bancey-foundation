import type { Metadata } from "next";
import {
  Barlow,
  Barlow_Semi_Condensed,
  Geist,
  Geist_Mono,
  Sofia_Sans,
  Sofia_Sans_Condensed,
  Syne,
} from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

// const fontHeading = localFont({
//   src: [
//     {
//       path: "../public/fonts/LTInstitute.otf",
//       weight: "500",
//     },
//   ],
//   variable: "--font-heading",
// });
const fontHeading = Barlow_Semi_Condensed({
  variable: "--font-heading",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const fontBody = Barlow({
  variable: "--font-body",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Bancey Foundation",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontHeading.variable} ${fontBody.className} bg-background text-foreground font-body antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
