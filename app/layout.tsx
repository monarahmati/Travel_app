import type { Metadata } from "next";

//import styles
import "./globals.css";

//import components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Traving app",
  description: "Traving next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="overflow-hidden relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
