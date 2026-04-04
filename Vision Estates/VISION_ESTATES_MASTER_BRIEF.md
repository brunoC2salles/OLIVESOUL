# VISION ESTATES — MASTER BRIEF
> Documento de referência para desenvolvimento no Claude Code.
> Leia este arquivo antes de qualquer tarefa. Não peça confirmações desnecessárias.

---

## 1. IDENTIDADE DO PROJETO

**Cliente:** Vision Estates — Imobiliária premium em Porto Belo/SC  
**Público:** Investidores BR/US/ES + pessoas buscando imóvel de férias de alto padrão  
**Proposta única:** Curadoria dos melhores ativos de Porto Belo — a cidade litorânea que mais cresce no Brasil  
**WhatsApp CTA:** `+55 47 9 XXXX-XXXX` ← substituir pelo número real  
**Deploy:** Vercel  
**Domínio:** a definir

---

## 2. STACK TÉCNICA

```
Next.js 14 (App Router)
TypeScript
Tailwind CSS
Framer Motion (animações)
next-intl (i18n: pt / en / es)
next/image (otimização automática)
Resend ou Nodemailer (formulário de contato)
Vercel Analytics (gratuito)
```

**Estrutura de pastas:**
```
/app
  /[locale]             ← pt | en | es
    /page.tsx           ← Home
    /porto-belo/page.tsx
    /imoveis/[slug]/page.tsx
/components
  /ui                   ← Button, Badge, Icon
  /sections             ← Hero, Products, Region, Hospitality, Contact
  /layout               ← Navbar, Footer
  /property             ← ProductCard, ImageCarousel, SpecTable
/lib
  /i18n.ts
  /properties.ts        ← dados dos 4 produtos
/messages
  /pt.json
  /en.json
  /es.json
/public
  /images
    /dubai-mall/        ← geral/ + privativa/
    /electra-towers/    ← geral/ + privativa/
    /viva-park/         ← geral/ + privativa/
    /lagom/             ← geral/ + privativa/
    /porto-belo/
    /brand/
```

---

## 3. DESIGN SYSTEM

### Paleta de Cores
```css
:root {
  /* Base */
  --white:       #FFFFFF;
  --off-white:   #F8F6F1;   /* fundo levemente quente */
  --black:       #0A0A0A;

  /* Navy Blue — principal */
  --navy-900:    #0A1628;
  --navy-800:    #0D1F3C;
  --navy-700:    #152B52;
  --navy-500:    #1E3A6E;
  --navy-300:    #4A6FA5;
  --navy-100:    #C5D3E8;

  /* Gold — acento */
  --gold-600:    #B8922A;
  --gold-500:    #C9A84C;
  --gold-400:    #D4AF37;   /* dourado principal */
  --gold-300:    #E8CC7A;
  --gold-100:    #F5EDD0;

  /* Neutros */
  --stone-200:   #E8E4DC;
  --stone-400:   #9B9589;
  --stone-600:   #5C5750;
}
```

### Tipografia
```css
/* Display — editorial luxury */
--font-display: 'Cormorant Garamond', serif;   /* títulos H1/H2 */

/* Body — limpeza legível */
--font-body:    'Jost', sans-serif;            /* parágrafos, labels */

/* Accent — dados, números */
--font-mono:    'DM Mono', monospace;          /* métricas, preços */
```
Importar via Google Fonts ou `next/font`.

### Espaçamento (tokens Tailwind custom)
Adicionar em `tailwind.config.ts`:
```js
spacing: {
  '18': '4.5rem',
  '22': '5.5rem',
  '30': '7.5rem',
  '38': '9.5rem',
  '100': '25rem',
  '120': '30rem',
}
```

### Breakpoints
Mobile-first. Breakpoints padrão Tailwind (`sm` / `md` / `lg` / `xl` / `2xl`).

---

## 4. COMPONENTES REUTILIZÁVEIS — PADRÕES FIXOS

### GoldDivider
```jsx
<div className="h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent w-full my-8" />
```

### SectionLabel
```jsx
<span className="font-mono text-xs uppercase tracking-[0.2em] text-gold-500">
  {label}
</span>
```

### NavBar
- Fundo: branco com borda bottom `1px solid var(--stone-200)` ao rolar
- Logo: "VISION ESTATES" em Cormorant Garamond, peso 300, tracking amplo
- Links: Jost 400, 13px, navy-800, hover underline dourado
- Seletor de idioma: PT | EN | ES com chevron
- CTA: botão outline navy com hover fill

### Footer
- Fundo navy-900
- Logo branco
- Links em ouro
- WhatsApp CTA flutuante (fixed bottom-right, ícone + "Fale Conosco")

---

## 5. ANIMAÇÕES — PADRÕES GLOBAIS

**Regra:** Usar Framer Motion `motion` com `viewport={{ once: true }}`.

```tsx
// Entrada padrão de seção
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
}

// Stagger de cards
const stagger = {
  visible: { transition: { staggerChildren: 0.12 } }
}

// Reveal de linha de texto (editorial)
const lineReveal = {
  hidden: { clipPath: 'inset(0 100% 0 0)' },
  visible: { clipPath: 'inset(0 0% 0 0)', transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } }
}
```

**Transições de página:**
```tsx
// Em layout.tsx do [locale]
<AnimatePresence mode="wait">
  <motion.div
    key={pathname}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
</AnimatePresence>
```

---

## 6. ESTRUTURA DA HOME — STORYBOARD

A home conta uma história em 8 atos. Cada ato tem transição de cor/fundo marcante.

```
ACT 1 — HERO
  Fundo: navy-900 com overlay de vídeo/imagem de Porto Belo noturno
  Headline: "Porto Belo. Onde o Atlântico encontra o futuro."
  Sub: tagline em 3 idiomas com fade rotativo
  CTAs: "Explorar Imóveis" + "Conhecer a Região"
  Efeito: parallax no scroll, texto em Cormorant 7rem+

ACT 2 — NÚMEROS QUE CONVENCEM (fundo off-white)
  Contador animado: R$3,8bi VGV | +250% valorização | 10 praias | #1 cidade litorânea
  Layout: 4 métricas grandes em grid horizontal
  Separador dourado entre cada número

ACT 3 — OS 4 PRODUTOS (fundo white)
  Headline: "Ativos Selecionados"
  4 cards horizontais com hover 3D (perspective transform)
  Cada card: imagem, nome do empreendimento, construtora, status, CTA
  Click → página individual do produto

ACT 4 — PORTO BELO (fundo navy-800, texto claro)
  Imagem aérea full-width com texto sobreposto
  Bullets: Hard Rock Café sobre o pier | Alargamento da praia | Marina | Hospital (Thozen)
  CTA → /porto-belo

ACT 5 — A REGIÃO EM MOVIMENTO (fundo off-white)
  Ícones + distâncias: Aeroporto FLN 60km | Campo Golf 8km | BC 15km | etc.
  Marquee horizontal animado com nome das praias
  Mapa interativo simples (mapbox ou estático com pontos)

ACT 6 — TESE DE INVESTIMENTO (fundo navy-900)
  Gráfico de valorização: Salou → Marbella → Macau → Atlantis
  "Histórico comprovado: de R$323k a R$950k" (PH) / "ROI 202% em 4 anos" (Thozen)
  Call-to-action para agendar sessão estratégica

ACT 7 — HOSPITALIDADE (fundo gold-100, sutil)
  Seção menor: "Investimento em Hospitalidade"
  Descrição: gestão de ativo com fins turísticos
  CTA: "Saiba mais" → formulário de interesse

ACT 8 — CONTATO (fundo white)
  Formulário: Nome | Email | WhatsApp | Produto de interesse | Mensagem
  Ou CTA duplo: WhatsApp direto + formulário
  Footer completo
```

---

## 7. PÁGINAS DE PRODUTO — TEMPLATE PADRÃO

Cada `/imoveis/[slug]` usa o mesmo template:

```
SEÇÃO 1 — HERO DO PRODUTO
  Imagem full-screen com overlay navy
  Nome + construtora + status (em andamento / planta)
  Badges: tipologia | metragem | entrega | andares

SEÇÃO 2 — GALERIA GERAL (carrossel 1)
  Fotos do empreendimento: fachada, área de lazer, piscina, áreas comuns
  Controles: setas laterais + dots
  Lightbox ao clicar

SEÇÃO 3 — ESPECIFICAÇÕES TÉCNICAS
  Grid de 2 colunas: texto + tabela de dados
  Torres | Unidades | Área | Andares | Vagas | Entrega | Endereço

SEÇÃO 4 — GALERIA PRIVATIVA (carrossel 2)
  Fotos dos interiores: sala, suítes, cozinha, varanda
  Mesmo padrão do carrossel 1

SEÇÃO 5 — DIFERENCIAIS (ícones criativos)
  3-6 cards com ícone SVG custom + título + descrição

SEÇÃO 6 — LOCALIZAÇÃO
  Distâncias em ícones (praia, aeroporto, golf, BC, etc.)
  Endereço completo + link Google Maps

SEÇÃO 7 — CTA FINAL
  "Tenho interesse neste imóvel"
  WhatsApp direto (pré-preenchido com nome do produto) + formulário inline

SEÇÃO 8 — OUTROS PRODUTOS
  "Você também pode gostar" → 3 cards dos outros produtos
```

---

## 8. OS 4 PRODUTOS — DADOS

### Dubai Mall (PH Empreendimentos)
```
slug: dubai-mall
construtora: PH Empreendimentos
status: Em andamento
entrega: Dez/2027 (prevista)
torres: 6 (A, B, C, D, E, F)
andares: 31
unidades: 384 residenciais + flats
tipologias:
  - Torres A/B/C: apartamentos 3 suítes (70m² a 130m²)
  - Torres D/E/F: flats (36m² a 40m²)
lazer: +7.600m² (2 áreas separadas: aptos e flats)
shopping: Dubai Mall integrado, 2 andares, boulevard
endereço: Av. Governador Celso Ramos esq. Rua Izidoro Bernardino Batista
distancia_praia: 900m da praia
diferencial: Inspirado na arquitetura de Dubai. Shopping exclusivo integrado. 6 torres no mesmo empreendimento.
investimento_min: A partir de R$300k (flats)
```

### Electra Towers (Thozen)
```
slug: electra-towers
construtora: Thozen
status: Em andamento
entrega: 2031
torres: 2 (A e B)
andares: múltiplos
unidades: 4 aptos por andar
tipologias: 3 suítes (115m² a 122m²), 2 vagas garagem, sacada churrasqueira
lazer: 1.652m² em 39 ambientes únicos
endereço: Rua Rubens Alves, Porto Belo/SC
distancia_praia: 560m de Balneário Perequê
diferencial: 1º empreendimento do Brasil com IA integrada a todo ecossistema. Robo delivery. Cafeteria padrão internacional. Mercado 24h.
investimento_min: Sob consulta
```

### Viva Park (Vokkan / YVY)
```
slug: viva-park
construtora: Vokkan
status: Múltiplos lançamentos ativos
entrega: variável por produto
tipologias: Studios, lofts, 1-4 suítes; casas 250-650m²; lotes 360-716m²
diferencial: 1º bairro parque do Brasil. 1,4 mi m². Jaime Lerner. LEED Platinum. 2 mi m² projetados. Colégio Bom Jesus. 130k acessos/mês.
investimento_min: A partir de R$600k
valorização: +250% terrenos desde lançamento
```

### Lagom Perequê (GT Home & ABC)
```
slug: lagom-pereque
construtora: GT Home & ABC
status: Em comercialização
tipologias:
  - Massala: 170-199m² (3-4 suítes), coberturas 285-296m² (vista mar e lagoa)
  - Mirra: 40-145m² (1-3 suítes), duplexes (vista mar e parque)
diferencial: Dentro do Parque Natural Municipal da Lagoa do Perequê. Beach point exclusivo. 3/4 do empreendimento é área de lazer. Filosofia lagom (equilíbrio).
investimento_min: Sob consulta
```

---

## 9. ÍCONES DE LOCALIZAÇÃO — SISTEMA

Criar SVG custom para cada ícone. Paleta: navy fill, gold accent.

```
✈  Aeroporto FLN    → 60km / ~45min
🏖  Praia Perequê   → 5min a pé
🏌  Campo de Golf   → 8km
🚢  Terminal Cruzeiros → integrado à cidade
🏙  Balneário Camboriú → 15km
🌆  Florianópolis    → 70km
🚗  BR-101           → 5min
🏥  Hospital (Thozen) → em construção em PB
🛍  Hard Rock Café   → sobre o pier (em construção)
🌊  10 praias        → 15km de costa
```

---

## 10. I18N — ESTRUTURA

`/messages/pt.json`, `/messages/en.json`, `/messages/es.json`

Chaves principais:
```json
{
  "nav": { "properties": "", "region": "", "invest": "", "contact": "" },
  "hero": { "headline": "", "subheadline": "", "cta_primary": "", "cta_secondary": "" },
  "metrics": { "vgv": "", "appreciation": "", "beaches": "", "rank": "" },
  "products": { "title": "", "subtitle": "", "cta": "" },
  "region": { "title": "", "description": "" },
  "hospitality": { "title": "", "description": "", "cta": "" },
  "contact": { "title": "", "name": "", "email": "", "whatsapp": "", "product": "", "message": "", "send": "" },
  "footer": { "tagline": "" }
}
```

---

## 11. SEO

```tsx
// app/[locale]/layout.tsx
export const metadata = {
  title: 'Vision Estates | Imóveis de Luxo em Porto Belo, SC',
  description: 'Curadoria exclusiva dos melhores imóveis de alto padrão em Porto Belo — a cidade litorânea que mais cresce no Brasil.',
  openGraph: { ... },
  alternates: { languages: { 'pt': '/pt', 'en': '/en', 'es': '/es' } }
}
```

---

## 12. ECONOMIA DE TOKENS NO CLAUDE CODE

### .gitignore
```
node_modules/
.next/
.env.local
.env*.local
out/
dist/
.DS_Store
*.log
.vercel/
```

### .claudeignore
```
node_modules/
.next/
public/images/
*.jpg
*.jpeg
*.png
*.webp
*.svg
out/
dist/
package-lock.json
yarn.lock
*.log
.git/
```

### Regras para sessões no Claude Code

1. **Sempre comece referenciando este arquivo:** "Leia VISION_ESTATES_MASTER_BRIEF.md"
2. **Não peça confirmação** antes de implementar — execute diretamente seguindo o brief
3. **Um componente por vez** — nunca peça múltiplos arquivos numa só mensagem
4. **Reutilize componentes existentes** — nunca recrie o que já existe
5. **Use os design tokens definidos** — jamais hardcode cores ou fontes
6. **Imagens:** use `placeholder.svg` em desenvolvimento; substituir por `next/image` com paths reais
7. **Não inclua comentários extensos** no código — apenas os essenciais
8. **Ordem de desenvolvimento recomendada:**
   ```
   1. Setup (next, tailwind, fonts, i18n, design tokens)
   2. Layout (Navbar + Footer)
   3. Home — seção por seção (Hero → Métricas → Produtos → Porto Belo → Ícones → Investimento → Hospitalidade → Contato)
   4. Componentes compartilhados (Carrossel, Formulário, Ícones)
   5. Páginas de produto (template → Dubai Mall → replicar para os outros 3)
   6. Página Porto Belo
   7. i18n (traduzir após estrutura pronta)
   8. Animações Framer Motion (adicionar por último)
   9. SEO e meta tags
   10. Testes e ajustes responsivos
   ```

---

## 13. PROMPT DE ABERTURA PARA CADA SESSÃO NO CLAUDE CODE

Cole isso no início de cada sessão:

```
Projeto: Vision Estates — landing page imobiliária de luxo.
Leia VISION_ESTATES_MASTER_BRIEF.md para contexto completo.
Stack: Next.js 14, TypeScript, Tailwind, Framer Motion, next-intl.
Paleta: branco + navy blue + dourado. Fontes: Cormorant Garamond + Jost.
Hoje vou trabalhar em: [DESCREVA A TAREFA ESPECÍFICA].
Não peça confirmações — execute diretamente seguindo o brief.
```

---

## 14. WIREFRAME VISUAL — HOME SCROLL

```
┌─────────────────────────────────────┐
│  NAVBAR (logo + nav + lang + CTA)   │  sticky, altura 72px
├─────────────────────────────────────┤
│                                     │
│   HERO — navy bg, vídeo/parallax    │  100vh
│   "Porto Belo. Onde o Atlântico     │
│    encontra o futuro."              │
│   [Explorar] [Região]               │
│                                     │
├─────────────────────────────────────┤  ← transição fade + cor
│  MÉTRICAS — off-white bg            │  40vh
│  R$3,8bi | +250% | 10 praias | #1  │
├─────────────────────────────────────┤  ← GoldDivider
│                                     │
│  PRODUTOS — white bg                │  auto
│  "Ativos Selecionados"              │
│  [Card] [Card] [Card] [Card]        │
│                                     │
├─────────────────────────────────────┤  ← transição slide + cor
│  PORTO BELO — navy-800 bg           │  80vh
│  imagem aérea + texto overlay       │
│  bullets de desenvolvimento         │
├─────────────────────────────────────┤
│                                     │
│  REGIÃO — off-white bg              │  auto
│  ícones distâncias + marquee praias │
│                                     │
├─────────────────────────────────────┤  ← transição dramática
│  TESE INVEST. — navy-900 bg         │  80vh
│  gráficos valorização               │
│  ROI histórico                      │
├─────────────────────────────────────┤
│  HOSPITALIDADE — gold-100 bg        │  50vh (sutil, menor)
├─────────────────────────────────────┤
│  CONTATO — white bg                 │  auto
├─────────────────────────────────────┤
│  FOOTER — navy-900 bg               │
└─────────────────────────────────────┘
```

---

*Versão 1.0 — Vision Estates Master Brief*
*Atualizar este arquivo sempre que houver mudanças de escopo.*
