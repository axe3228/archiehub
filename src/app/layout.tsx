import type { Metadata } from "next";
import { Montserrat, Montez } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

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
        <div className="max-w-[1440px] min-h-screen mx-auto md:px-10
        flex flex-col justify-between">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
