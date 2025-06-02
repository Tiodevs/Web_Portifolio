

import type { Metadata } from "next";
import { Inter, Manrope, Sora } from "next/font/google";
import "./globals.css";
import Menu from "./components/Menu"
import { Contato } from "./components/Contato";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Portifolio 2025",
  description: "O meu portifolio 2025",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${manrope.className} ${inter.className} ${sora.className}`}>
        <Menu />
        {children}
      </body>
    </html>
  );
}
