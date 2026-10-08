import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "FitLife | Sog‘liq va Sport",
  description: "Sport va sog‘lom hayot uchun zamonaviy platforma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}