import type { Metadata } from "next";
import { Montserrat, Montez } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Glow } from "@/components/glow";

const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ['400', '500', '700'],
  variable: '--font-montserrat',
});

const montez = Montez({ 
  subsets: ["latin"],
  weight: '400',
  variable: '--font-montez',
});

export const metadata: Metadata = {
  title: "ArchieHub",
  description: "Archie Habaradas Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${montez.variable} font-sans`}>
        <Glow />
        <div className="min-h-screen flex flex-col justify-between">
          <Navbar />
          <div className="max-w-[1440px] mx-auto md:px-10">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
