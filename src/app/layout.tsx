import type { Metadata } from "next";
import type { Viewport } from 'next';
import { Hind_Siliguri, Noto_Sans_Bengali, Noto_Color_Emoji, } from "next/font/google";
import "./globals.css";
import Header from "@/Components/all-time-using/Nabar/Header";
import Footer from "@/Components/all-time-using/Footer/Footer";

const HindSiliguri = Hind_Siliguri({
  weight: ['300', '400', '500', '600', '700'],
  variable: "--font-hind-siliguri",
  subsets: ["latin", "bengali"],
});

const NotoSansBengali = Noto_Sans_Bengali({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  variable: "--font-noto-sans-bengali",
  subsets: ["latin", "bengali"],
});

const NotoColorEmoji = Noto_Color_Emoji({
  weight: "400",
  subsets: ["emoji"],
  variable: "--font-noto-color-emoji",
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};


export const metadata: Metadata = {
  title: "Bazar Dor",
  description: "Your one-stop shop for all your needs",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${HindSiliguri.variable} ${NotoSansBengali.variable} ${NotoColorEmoji.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col w-full max-w-full overflow-x-hidden">

        <Header />
      <main className="flex-1 w-full max-w-full overflow-x-hidden">
        {children}
      </main>
        
      <Footer />
      </body>
    </html>
  );
}
