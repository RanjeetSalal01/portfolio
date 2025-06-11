import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "@/components/shared/navbar/navbar";
import Footer from "@/components/shared/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ranjeet Singh Salal | Developer",
  description: "Full Stack Developer | Angular Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{ background: "#0a192f", height: "100vh" }}
        className={inter.className}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
