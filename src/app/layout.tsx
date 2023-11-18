import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dine Ease",
  description: "Restaurant reservation system",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`overflow-x-hidden ${inter.className}`}>
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
