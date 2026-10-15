# Leo Motos — Aluguel de motos em Tefé, AM

Página única para a **Leo Motos**, locadora de motos em Tefé (AM). Leva o cliente direto ao WhatsApp (com mensagem pronta por modelo) e à localização no Google Maps.

**Produção:** https://leo-motos-linktree.vercel.app

## O que tem

- Modelos disponíveis (Honda BIZ, BROS e TITAN) com botão de reserva por WhatsApp
- Dois canais de WhatsApp, endereço e link para o Maps
- SEO local: metadados, schema.org `LocalBusiness` (JSON-LD) e imagem de pré-visualização (`app/opengraph-image.tsx`) para links compartilhados
- Imagens otimizadas com `next/image` (AVIF/WebP)

## Stack

Next.js 15 (App Router, página estática) · React 19 · TypeScript · Tailwind CSS 3 · lucide-react

## Estrutura

```text
app/
├── layout.tsx            # Metadados, JSON-LD e fontes
├── page.tsx              # Página (modelos, contatos, localização)
├── opengraph-image.tsx   # Imagem de pré-visualização gerada no build
└── globals.css
public/                   # Logo e fotos das motos
```

Para alterar telefones, endereço ou modelos: `app/page.tsx` (conteúdo da página) e `app/layout.tsx` (JSON-LD e metadados) — mantenha os dois iguais.

## Rodando localmente

Requer Node.js 20+ e pnpm.

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm typecheck
pnpm build
```

## Deploy

Deploy automático na Vercel a cada push na branch `main`; pull requests geram preview.

## Dados e direitos

- Telefones e endereço são públicos por decisão do cliente.
- Marca, logotipo, mascote e fotos pertencem à **Leo Motos** — todos os direitos reservados; não reutilize sem autorização.
