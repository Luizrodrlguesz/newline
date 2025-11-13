# New Line - Landing Page

Landing page moderna e responsiva para a New Line Persianas e Cortinas, desenvolvida com Next.js, TypeScript e as melhores práticas de desenvolvimento web.

## 🚀 Tecnologias Utilizadas

- **Next.js 14** - Framework React para produção
- **TypeScript** - Tipagem estática para JavaScript
- **Tailwind CSS** - Framework CSS utilitário
- **shadcn/ui** - Componentes UI reutilizáveis
- **Framer Motion** - Biblioteca de animações
- **Lucide React** - Ícones modernos (Google Icons style)

## 🎨 Paleta de Cores

O projeto utiliza um sistema de variáveis CSS customizadas com as seguintes cores principais:

- **Branco** (#FFFFFF) - Base e tema claro
- **Marrom** (#6B4423) - Cor primária
- **Caramelo** (#C17A4F) - Cor secundária/accent

As cores estão definidas no arquivo `app/globals.css` usando variáveis CSS (`:root`).

## 📦 Instalação

```bash
# Instalar dependências
npm install

# ou
yarn install

# ou
pnpm install
```

## 🛠️ Desenvolvimento

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## 🏗️ Build para Produção

```bash
# Criar build de produção
npm run build

# Iniciar servidor de produção
npm start
```

## 📁 Estrutura do Projeto

```
newline/
├── app/                    # App Router do Next.js
│   ├── globals.css        # Estilos globais e variáveis CSS
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página inicial
├── components/            # Componentes React
│   ├── ui/               # Componentes UI (shadcn/ui)
│   ├── sections/         # Seções da landing page
│   ├── Header.tsx        # Navegação principal
│   └── Footer.tsx        # Rodapé
├── lib/                  # Utilitários
│   └── utils.ts         # Funções auxiliares
├── public/              # Arquivos estáticos
└── tailwind.config.ts   # Configuração do Tailwind
```

## 📱 Seções da Landing Page

1. **Hero Section** - Seção inicial com call-to-action
2. **Produtos** - Galeria de produtos (persianas e cortinas)
3. **Aplicações** - Diversos ambientes de aplicação
4. **Serviços/Diferenciais** - Destaque dos diferenciais da empresa
5. **Sobre** - Informações sobre a empresa
6. **Contato** - Formulário de orçamento e informações de contato

## 🎯 Funcionalidades

- ✅ Design responsivo e mobile-first
- ✅ Animações suaves com Framer Motion
- ✅ Navegação por âncoras (scroll suave)
- ✅ Menu mobile com animação
- ✅ Formulário de contato
- ✅ Sistema de cores customizável
- ✅ Performance otimizada
- ✅ SEO friendly

## 🔧 Personalização

### Cores

As cores podem ser alteradas no arquivo `app/globals.css`:

```css
:root {
  --brown: #6B4423;
  --caramel: #C17A4F;
  /* ... outras variáveis */
}
```

### Conteúdo

Para alterar o conteúdo, edite os componentes em `components/sections/`.

## 📞 Contato

- **Telefone**: (41) 3621-7074
- **WhatsApp**: (41) 98498-2581
- **Email**: contato@newlinepersianas.com.br
- **Endereço**: R. Estrada da Ribeira, 2612, Maracanã, Colombo-PR

## 📄 Licença

Todos os direitos reservados © 2025 New Line Persianas e Cortinas

# newline
