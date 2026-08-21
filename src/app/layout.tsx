import type { Metadata } from "next";
import { Montserrat, Viaoda_Libre } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header/Header";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "cyrillic"],
});

const viaodaLibre = Viaoda_Libre({
  variable: "--font-viaoda-libre",
  subsets: ["latin", "cyrillic"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Свято-Покровська парафія",
  description: "Українська Православна Церква в Інгольштадті",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body className={`${montserrat.variable} ${viaodaLibre.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
