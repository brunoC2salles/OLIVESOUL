# Vision Estates — Instruções para Claude Code

## ⚡ Começar Qualquer Tarefa

1. **Leia sempre este arquivo:** `VISION_ESTATES_MASTER_BRIEF.md` na raiz
2. **Não peça confirmações** — execute diretamente seguindo o brief
3. **Um componente por vez** — nunca peça múltiplos arquivos numa mensão

## 📋 Stack

- Next.js 14 (App Router) + TypeScript strict
- Tailwind CSS com design tokens customizados
- Framer Motion para animações
- next-intl para i18n (pt/en/es)
- next/image para otimização
- Vercel para deploy

## 🎨 Design System

**Cores (via tokens Tailwind):**
- Base: white, off-white, black
- Navy: 900 → 100
- Gold: 600 → 100
- Stone: 200, 400, 600

**Fontes:**
- Display: Cormorant Garamond (300, 400, 600)
- Body: Jost (300, 400, 500)
- Mono: DM Mono (400)

## 📁 Estrutura de Pastas

```
/app/[locale]/        — páginas com locale
/components
  /ui/                — Button, Badge, Icon
  /sections/          — Hero, Products, Region, Hospitality, Contact
  /layout/            — Navbar, Footer
  /property/          — ProductCard, ImageCarousel, SpecTable
/lib
  /properties.ts      — dados dos 4 produtos
  /i18n.ts            — setup next-intl
/messages
  /pt.json            — strings português
  /en.json            — strings inglês
  /es.json            — strings espanhol
/public/images/       — imagens por produto
```

## 🚀 Ordem de Desenvolvimento Recomendada

1. ✅ Setup (este scaffold)
2. Layout (Navbar + Footer)
3. Home — seção por seção
4. Componentes compartilhados
5. Páginas de produto
6. Página Porto Belo
7. i18n tradução
8. Animações Framer Motion
9. SEO e meta tags
10. Testes responsivos

## 💡 Padrões Reutilizáveis

**GoldDivider:**
```jsx
<div className="h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent w-full my-8" />
```

**SectionLabel:**
```jsx
<span className="font-mono text-xs uppercase tracking-[0.2em] text-gold-500">{label}</span>
```

## 📦 Os 4 Produtos

1. **Dubai Mall** — PH Empreendimentos (6 torres, R$300k+)
2. **Electra Towers** — Thozen (2 torres, IA integrada)
3. **Viva Park** — Vokkan (1º bairro parque LEED)
4. **Lagom Perequê** — GT Home & ABC (Parque Natural)

## 🌐 i18n

Chaves em `/messages/[locale].json`:
- `nav`, `hero`, `metrics`, `products`, `region`, `investment`, `hospitality`, `contact`, `footer`

## ⚙️ Configurações Críticas

- **Tailwind:** colors, fontFamily, spacing customizados
- **next.config.ts:** next-intl plugin + image domains
- **middleware.ts:** roteamento pt/en/es
- **globals.css:** CSS variables + reset base

## 🚫 .gitignore & .claudeignore

Ambos configurados para ignorar node_modules, .next, imagens, logs.

---

**Versão:** 1.0  
**Atualizar este arquivo sempre que houver mudanças de escopo.**
