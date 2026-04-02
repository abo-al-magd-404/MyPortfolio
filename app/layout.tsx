import type { Metadata } from "next";
import { Tomorrow } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const tomorrow = Tomorrow({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "700", "800", "900"],
  variable: "--font-tomorrow",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abo Al Magd | Full-Stack Developer",
  description:
    "Full-Stack Developer focused on building scalable, high-performance web applications with clean architecture, maintainable code, and modern user experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${tomorrow.className} flex flex-col min-h-screen bg-slate-950 text-gray-100`}
      >
        <div className="min-h-screen flex flex-col relative overflow-hidden bg-slate-950 text-gray-100">
          {/* Animated Glow Circles */}
          <div className="absolute w-125 h-125 bg-sky-500/10 blur-3xl rounded-full -top-25 -right-25 animated-circle-1" />
          <div className="absolute w-100 h-100 bg-cyan-400/10 blur-3xl rounded-full -bottom-25 -left-25 animated-circle-2" />

          {/* Content */}
          <div className="relative z-10 flex flex-col flex-1">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
