import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://barbearialucksstyle.com"),
  title: "Luck's Style · Barbearia",
  description:
    "Desde 2017 em Vila Talarico. Barbearia old school com grooming contemporâneo. Agende corte, barba e clube de assinatura.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${outfit.variable} ${playfair.variable} h-full antialiased`}>
      <body className="min-h-full bg-paper font-sans text-ink">{children}</body>
    </html>
  );
}
