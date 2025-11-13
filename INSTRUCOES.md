# 📋 Instruções de Instalação e Uso

## Passo a Passo para Iniciar o Projeto

### 1. Instalar Dependências

Abra o terminal na pasta do projeto e execute:

```bash
npm install
```

Isso instalará todas as dependências necessárias:
- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui components
- Framer Motion
- Lucide React (ícones)

### 2. Iniciar o Servidor de Desenvolvimento

```bash
npm run dev
```

O projeto estará disponível em: http://localhost:3000

### 3. Adicionar Imagens dos Produtos

As imagens dos produtos devem ser adicionadas na pasta `public/images/`:

```
public/
  └── images/
      ├── persiana-horizontal-madeira.jpg
      ├── persiana-vertical-supreme.jpg
      ├── persiana-vertical-classica.jpg
      ├── persiana-horizontal-50mm.jpg
      ├── persiana-horizontal-aluminio.jpg
      ├── cortina-rolo-blackout.jpg
      ├── cortina-miragem.jpg
      ├── cortina-rolo-duo.jpg
      ├── cortina-painel.jpg
      ├── cortinas-cobertura-vidro.jpg
      ├── cortina-romanshine.jpg
      └── cortina-romana.jpg
```

**Importante**: As imagens devem ter proporção 4:3 (ex: 800x600px) para melhor visualização.

### 4. Personalizar Cores (Opcional)

Edite o arquivo `app/globals.css` para ajustar as cores:

```css
:root {
  --brown: #6B4423;        /* Cor marrom principal */
  --brown-light: #8B5A3C;  /* Marrom claro */
  --caramel: #C17A4F;      /* Cor caramelo */
  --caramel-light: #D4936F; /* Caramelo claro */
}
```

### 5. Configurar Envio de E-mails (Próximos Passos)

Para o formulário de contato funcionar completamente, você precisará:

1. Escolher um serviço de envio de e-mails (SendGrid, Mailgun, etc.)
2. Criar uma API route no Next.js (`app/api/contact/route.ts`)
3. Configurar as variáveis de ambiente

Exemplo básico de API route:

```typescript
// app/api/contact/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();
  
  // Aqui você implementa o envio do e-mail
  // usando o serviço escolhido
  
  return NextResponse.json({ success: true });
}
```

### 6. Build para Produção

Quando estiver pronto para publicar:

```bash
npm run build
npm start
```

## 🎨 Estrutura de Componentes

### Header (Navegação)
- Logo da empresa
- Menu desktop
- Menu mobile responsivo
- Botão de telefone

### Seções da Landing Page

1. **HeroSection** (`components/sections/HeroSection.tsx`)
   - Banner principal
   - Título e subtítulo
   - Botões de call-to-action
   - Indicador de scroll

2. **ProductsSection** (`components/sections/ProductsSection.tsx`)
   - Grid de produtos
   - Cards com imagens
   - Botões de orçamento

3. **ApplicationsSection** (`components/sections/ApplicationsSection.tsx`)
   - Grid de aplicações
   - Ícones com labels
   - Hover effects

4. **ServicesSection** (`components/sections/ServicesSection.tsx`)
   - Diferenciais da empresa
   - 4 pilares principais
   - Background gradient

5. **AboutSection** (`components/sections/AboutSection.tsx`)
   - Informações da empresa
   - Estatísticas
   - História

6. **ContactSection** (`components/sections/ContactSection.tsx`)
   - Formulário de contato
   - Informações de contato
   - Cards informativos

### Footer
- Informações de contato
- Links para redes sociais
- Copyright

## 🔧 Customizações Comuns

### Alterar Telefones

Busque por estes números no código e substitua:
- `4136217074`
- `41984982581`

### Alterar E-mail

Busque por:
- `contato@newlinepersianas.com.br`

### Alterar Endereço

Busque por:
- `R. Estrada da Ribeira, 2612`
- `Maracanã, Colombo-PR`

### Adicionar/Remover Produtos

Edite o array `products` em `components/sections/ProductsSection.tsx`

### Adicionar/Remover Aplicações

Edite o array `applications` em `components/sections/ApplicationsSection.tsx`

## 📱 Responsividade

O site é totalmente responsivo e foi desenvolvido com a abordagem mobile-first:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🚀 Deploy

### Vercel (Recomendado)

1. Crie uma conta em https://vercel.com
2. Conecte seu repositório GitHub
3. Deploy automático!

### Outras Plataformas

O projeto também pode ser hospedado em:
- Netlify
- AWS
- DigitalOcean
- Qualquer servidor com Node.js

## 🆘 Suporte

Se tiver dúvidas ou problemas:

1. Verifique se todas as dependências foram instaladas
2. Certifique-se de estar usando Node.js 18 ou superior
3. Limpe o cache: `rm -rf .next && npm run dev`

## 📝 Próximas Melhorias Sugeridas

- [ ] Integração com WhatsApp API
- [ ] Sistema de backend para formulário
- [ ] Galeria de projetos realizados
- [ ] Blog/Notícias
- [ ] Sistema de agendamento online
- [ ] Chat ao vivo
- [ ] Integração com Google Maps
- [ ] Sistema de avaliações
- [ ] Portal do cliente
- [ ] Catálogo interativo de produtos

