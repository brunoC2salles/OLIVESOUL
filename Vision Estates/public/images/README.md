# Imagens do Projeto Vision Estates

## Estrutura de Pastas

```
/public/images/
├── porto-belo/
│   ├── hero.jpg          → Imagem de fundo do Hero (1920x1080, otimizada)
│   └── hero.svg          → Placeholder SVG
├── dubai-mall/
│   ├── geral/            → Imagens gerais do empreendimento
│   └── privativa/        → Imagens dos interiores
├── electra-towers/
│   ├── geral/
│   └── privativa/
├── viva-park/
│   ├── geral/
│   └── privativa/
├── lagom-pereque/
│   ├── geral/
│   └── privativa/
└── brand/                → Logo e assets da marca
```

## Implementação

- Use `next/image` com `fill` e `objectFit="cover"` para imagens de fundo
- Formatos: JPG para fotos (otimizado), PNG para logos, SVG para ícones
- Otimize imagens em ferramentas como TinyPNG ou ImageOptim antes de adicionar
- Tamanho recomendado para hero: 1920x1080px máximo

## TODO

- [ ] Substituir `hero.svg` pelo `hero.jpg` real
- [ ] Adicionar imagens gerais dos 4 produtos
- [ ] Adicionar imagens privativas (interiores)
- [ ] Adicionar assets de marca (logo, ícones)
