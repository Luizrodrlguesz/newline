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
  // Favicon que acompanha o tema do navegador: o SVG troca sozinho entre o NL
  // marrom (tema claro) e o branco (tema escuro) via prefers-color-scheme. Os
  // PNGs com `media` são a reserva para navegadores sem favicon SVG.
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      {
        url: "/favicon-light-theme.png",
        type: "image/png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/favicon-dark-theme.png",
        type: "image/png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: "/apple-touch-icon.png",
  },
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
