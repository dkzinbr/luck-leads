# Luck's Style

Site da barbearia Luck's Style, em Vila Talarico (São Paulo), feito para um cliente real.

**Site:** [barbearia-lucks-style.vercel.app](https://barbearia-lucks-style.vercel.app)

## O que tem no site

- Apresentação da marca, da equipe e dos cortes, com galerias de imagens otimizadas
- Planos (clube de assinatura) e catálogo de produtos
- Agendamento pelo sistema externo da barbearia, botão de WhatsApp com mensagem pronta e mapa do Google Maps
- Imagem de compartilhamento (Open Graph) e ícones gerados pelo Next.js

## Stack

Next.js 16 (App Router), React 19, TypeScript e Tailwind CSS 4, publicado na Vercel.

## Estrutura do repositório

```
web/                      Site em produção (Next.js)
  src/app/                Layout, página e imagens de compartilhamento
  src/components/         Seções: Hero, Equipe, Cortes, Planos, Produtos, Visita...
  src/lib/site.ts         Dados da barbearia (contatos, links, planos, textos)
index.html, css/, assets/ Primeira versão do site, em HTML e CSS puro
proposta*.html            Propostas comerciais apresentadas ao cliente
gerar-pdf*.mjs            Geram os PDFs das propostas com Puppeteer
```

## Rodando o site

```bash
cd web
npm install
npm run dev     # http://localhost:3000
npm run build   # build de produção
npm run lint
```

Na Vercel, o projeto usa `web` como Root Directory.
