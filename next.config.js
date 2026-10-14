/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // O site fica na hospedagem compartilhada da Hostinger (LiteSpeed, sem
  // Node): `npm run build` gera o site estático em `out/`, que é o conteúdo
  // enviado para a public_html. Sem servidor, o otimizador de imagens do Next
  // não existe; as imagens em public/ já devem ir otimizadas.
  output: "export",
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
