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

const SITE_TITLE = "New Line - Persianas e Cortinas em Curitiba";
const SITE_DESCRIPTION =
  "25 anos de experiência em persianas e cortinas. Qualidade, garantia e os melhores preços de Curitiba e região.";

export const metadata: Metadata = {
  // Base para as URLs absolutas que o og:image exige.
  metadataBase: new URL("https://newlinepersianas.com.br"),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: "persianas, cortinas, Curitiba, New Line",
  authors: [{ name: "New Line Persianas" }],
  robots: "index,follow,all",
  // Imagem da prévia ao compartilhar o link (WhatsApp, redes sociais). Sem
  // ela, o WhatsApp usa o ícone. O logo fica dentro do quadrado central para
  // aparecer inteiro também na prévia pequena, que corta a imagem no centro.
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "New Line Persianas e Cortinas",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NEW LINE Persianas e Cortinas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/og-image.jpg"],
  },
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
