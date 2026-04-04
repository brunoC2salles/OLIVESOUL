export interface Property {
  slug: string
  name: string
  construtora: string
  status: string
  entrega: string
  torres?: number
  andares?: number
  unidades?: number
  tipologias: string
  lazer: string
  endereço: string
  distancia_praia: string
  diferencial: string
  investimento_min: string
  partnerName: string
  partnerUrl: string
  image: string
}

export const properties: Property[] = [
  {
    slug: 'dubai-mall',
    name: 'Dubai Mall',
    construtora: 'PH Empreendimentos',
    status: 'Em andamento',
    entrega: 'Dez/2027',
    torres: 6,
    andares: 31,
    unidades: 384,
    tipologias: 'Apartamentos 3 suítes (70m² a 130m²) | Flats (36m² a 40m²)',
    lazer: '+7.600m² (2 áreas separadas)',
    endereço: 'Av. Governador Celso Ramos esq. Rua Izidoro Bernardino Batista',
    distancia_praia: '900m da praia',
    diferencial: 'Inspirado na arquitetura de Dubai. Shopping exclusivo integrado. 6 torres no mesmo empreendimento.',
    investimento_min: 'A partir de R$300k',
    partnerName: 'PH Empreendimentos',
    partnerUrl: 'https://ph-empreendimentos.com.br',
    image: '/images/dubai-mall/geral/hero.jpg'
  },
  {
    slug: 'electra-towers',
    name: 'Electra Towers',
    construtora: 'Thozen',
    status: 'Em andamento',
    entrega: '2031',
    torres: 2,
    andares: 20,
    unidades: 80,
    tipologias: '3 suítes (115m² a 122m²) com 2 vagas garagem e sacada churrasqueira',
    lazer: '1.652m² em 39 ambientes únicos',
    endereço: 'Rua Rubens Alves, Porto Belo/SC',
    distancia_praia: '560m de Balneário Perequê',
    diferencial: '1º empreendimento do Brasil com IA integrada a todo ecossistema. Robo delivery. Cafeteria padrão internacional. Mercado 24h.',
    investimento_min: 'Sob consulta',
    partnerName: 'Thozen',
    partnerUrl: 'https://thozen.com.br',
    image: '/images/electra-towers/geral/hero.jpg'
  },
  {
    slug: 'viva-park',
    name: 'Viva Park',
    construtora: 'Vokkan',
    status: 'Múltiplos lançamentos ativos',
    entrega: 'Variável por produto',
    torres: 0,
    andares: 0,
    unidades: 0,
    tipologias: 'Studios, lofts, 1-4 suítes | Casas 250-650m² | Lotes 360-716m²',
    lazer: '2 mi m² em desenvolvimento',
    endereço: 'Porto Belo/SC',
    distancia_praia: 'Acesso a praias e piscinas',
    diferencial: '1º bairro parque do Brasil. 1,4 mi m². Jaime Lerner. LEED Platinum. Colégio Bom Jesus. 130k acessos/mês.',
    investimento_min: 'A partir de R$600k',
    partnerName: 'Vokkan',
    partnerUrl: 'https://vokkan.com.br',
    image: '/images/viva-park/geral/hero.jpg'
  },
  {
    slug: 'lagom-pereque',
    name: 'Lagom Perequê',
    construtora: 'GT Home & ABC',
    status: 'Em comercialização',
    entrega: 'A definir',
    torres: 0,
    andares: 0,
    unidades: 0,
    tipologias: 'Massala: 170-199m² (3-4 suítes) | Mirra: 40-145m² (1-3 suítes)',
    lazer: '3/4 do empreendimento é área de lazer',
    endereço: 'Parque Natural Municipal da Lagoa do Perequê, Porto Belo/SC',
    distancia_praia: 'Integrado à Lagoa do Perequê',
    diferencial: 'Dentro do Parque Natural Municipal da Lagoa do Perequê. Beach point exclusivo. Filosofia lagom (equilíbrio).',
    investimento_min: 'Sob consulta',
    partnerName: 'GT Home & ABC',
    partnerUrl: 'https://gthome.com.br',
    image: '/images/lagom-pereque/geral/hero.jpg'
  }
]
