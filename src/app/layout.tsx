

import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import Menu from "./components/Menu";
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
    <html lang="pt-BR">
      <body className={`${manrope.className} ${inter.className}`}  suppressHydrationWarning>
        <Menu />
        {children}
      </body>
    </html>
  );
}
