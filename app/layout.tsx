import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

// Sans geométrica próxima da tipografia do logo (NEW LINE / PERSIANAS E CORTINAS)
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "New Line - Persianas e Cortinas em Curitiba",
  description:
    "25 anos de experiência em persianas, cortinas e toldos. Qualidade, garantia e os melhores preços de Curitiba e região.",
  keywords: "persianas, cortinas, toldos, Curitiba, New Line",
  authors: [{ name: "New Line Persianas" }],
  robots: "index,follow,all",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${montserrat.variable} overflow-x-clip`}>
      <body className="overflow-x-clip">{children}</body>
    </html>
  );
}
