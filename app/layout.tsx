import type { Metadata } from "next";
import {
  Barlow,
  Barlow_Semi_Condensed,
  DM_Sans,
  Geist,
  Geist_Mono,
  Ledger,
  Libre_Baskerville,
  Sofia_Sans,
  Sofia_Sans_Condensed,
  Syne,
  Figtree,
  Hanken_Grotesk,
} from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { cn } from "@/lib/utils";

// const fontHeading = localFont({
//   src: [
//     {
//       path: "../public/fonts/LTInstitute.otf",
//       weight: "500",
//     },
//   ],
//   variable: "--font-heading",
// });
const fontHeading = localFont({
  src: [
    // {
    //   path: "../public/fonts/Sentient_Complete/Fonts/WEB/fonts/Sentient-Light.woff2",
    //   weight: "300",
    // },
    {
      path: "../public/fonts/gascogne-serial-regular.ttf",
      weight: "400",
    },
    // {
    //   path: "../public/fonts/Sentient_Complete/Fonts/WEB/fonts/Sentient-Medium.woff2",
    //   weight: "500",
    // },
    // {
    //   path: "../public/fonts/Sentient_Complete/Fonts/WEB/fonts/Sentient-Bold.woff2",
    //   weight: "700",
    // },
  ],
  variable: "--font-heading",
});

const hankenGrotesk = Hanken_Grotesk({
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
    <html
      lang="en"
      className={cn(hankenGrotesk.variable, fontHeading.variable)}
    >
      <body
        className={`${fontHeading.variable} ${hankenGrotesk.className} bg-background text-foreground font-body antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
