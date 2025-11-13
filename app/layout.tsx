import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="pt-BR" className="overflow-x-hidden">
      <body className="overflow-x-hidden">{children}</body>
    </html>
  );
}
