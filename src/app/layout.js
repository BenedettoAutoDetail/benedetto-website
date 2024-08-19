import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/core/Navbar";
import Footer from "@/components/core/Footer";

import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Benedetto",
  description: "Best Car detailing Service in Town Town",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} h-screen  grid grid-rows-[auto_1fr_auto]`}
      >
        <Navbar />
        <Toaster position="top-center" reverseOrder={false} />
        <div className="w-full h-full">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
