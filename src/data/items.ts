export interface Item {
  id: number;
  name: string;
  description?: string;
  estimatedPrice?: string;
  link?: string;
  // Caminho local: '/lista-casa-nova/images/products/nome.jpg'
  // ou URL externa: 'https://...'
  image?: string;
}

export interface Category {
  id: string;
  name: string;
  emoji: string;
  items: Item[];
}

export const categories: Category[] = [
  {
    id: 'eletrodomesticos',
    name: 'Eletrodomésticos',
    emoji: '🔌',
    items: [
      {
        id: 3,
        name: 'Ar condicionado',
        description: 'Daikin EcoSwing Smart Gold R-32, 12.000 BTU, Quente/Frio 220V',
        estimatedPrice: 'R$ 3.800,00',
        link: 'https://www.poloar.com.br/ar-condicionado-split-hi-wall-inverter-daikin-ecoswing-smart-gold-r-32-12000-btu-h-quente-frio-220v-1270/p',
        image: '/lista-casa-nova/images/products/ar-condicionado.jpg',
      },
      {
        id: 4,
        name: 'Depurador',
        description: 'Depurador de ar para cozinha',
        estimatedPrice: 'R$ 319,00',
        link: 'https://www.amazon.com.br/gp/product/B088MFGTYP/ref=ox_sc_saved_title_4?smid=AVRTQ9CK3FDWE&psc=1',
        image: '/lista-casa-nova/images/products/depurador.jpg',
      },
      {
        id: 5,
        name: 'Aspirador',
        description: 'Kit Makita DCL180Z com bateria e carregador',
        estimatedPrice: 'R$ 766,00',
        link: 'https://www.mercadolivre.com.br/kit-makita-dcl180z-aspirador-bateria-e-carregador-dc18wc-cor-azul-turquesa/p/MLB44768795',
        image: '/lista-casa-nova/images/products/aspirador.jpg',
      },
      {
        id: 6,
        name: 'Ferro vaporizador',
        description: 'Black+Decker BDV3000, portátil e dobrável 3 em 1',
        estimatedPrice: 'R$ 300,00',
        link: 'https://www.mercadolivre.com.br/ferro-vaporizador-portatil-e-dobravel-3-em-1-black-decker-bdv3000/p/MLB20621100',
        image: '/lista-casa-nova/images/products/ferro-vaporizador.jpg',
      },
    ],
  },
  {
    id: 'cozinha',
    name: 'Cozinha',
    emoji: '🍳',
    items: [
      {
        id: 20,
        name: 'Frigideira Antiaderente',
        description: 'Electrolux Inox 24cm, preta',
        estimatedPrice: 'R$ 156,70',
        link: 'https://m.magazineluiza.com.br/frigideira-antiaderente-electrolux-inox-41044561-preta-24cm/p/240963000/ud/udfg/',
        image: '/lista-casa-nova/images/products/frigideira.jpg',
      },
      {
        id: 18,
        name: 'Kit moedores de temperos',
        description: 'Kit 2 moedores de madeira ajustáveis, sal grosso e pimenta (Marrom)',
        estimatedPrice: 'R$ 52,99',
        link: 'https://shopee.com.br/product/1496472939/22494291260',
        image: '/lista-casa-nova/images/products/moedores.jpg',
      },
      {
        id: 17,
        name: 'Kit para Vinho',
        description: 'Oster Inspire, inox — abridor elétrico, aerador, corta-lacre e mais',
        estimatedPrice: 'R$ 195,40',
        link: 'https://www.amazon.com.br/para-Vinho-Inspire-Oster-FPSTBW8055-011/dp/B01N9QDKS2',
        image: '/lista-casa-nova/images/products/kit-vinho.jpg',
      },
    ],
  },
  {
    id: 'quarto',
    name: 'Quarto',
    emoji: '🛏️',
    items: [
      {
        id: 16,
        name: 'Colchão casal',
        description: 'Colchão casal — disponível presencialmente na loja Fabrispuma',
        estimatedPrice: 'R$ 4.100,00',
        image: '/lista-casa-nova/images/products/colchao.svg',
      },
      {
        id: 15,
        name: 'Cama box casal com baú',
        description: 'Cama box casal com baú — disponível presencialmente na loja Fabrispuma',
        estimatedPrice: 'R$ 1.400,00',
        image: '/lista-casa-nova/images/products/cama-box.svg',
      },
      {
        id: 10,
        name: 'Jogo de lençol — Opção A',
        description: 'Kit cama casal',
        estimatedPrice: 'R$ 323,00',
        link: 'https://shopee.com.br/product/604852218/23993909391',
        image: '/lista-casa-nova/images/products/lencol-a.jpg',
      },
      {
        id: 11,
        name: 'Jogo de lençol — Opção B',
        description: 'Kit Hoomy, lençol e fronha',
        estimatedPrice: 'R$ 914,00',
        link: 'https://hoomy.com.br/products/pv-kit-hoomy-lencol-e-fronha?variant=45537173176555',
        image: '/lista-casa-nova/images/products/lencol-b.jpg',
      },
      {
        id: 12,
        name: 'Travesseiros',
        description: 'Buddemeyer Toque, 50x70cm — par',
        estimatedPrice: 'R$ 247,00',
        link: 'https://amazon.com.br/Travesseiros-Buddemeyer-Toque-50x70cm-Branco/dp/B08FKXFYYM',
        image: '/lista-casa-nova/images/products/travesseiros.jpg',
      },
      {
        id: 13,
        name: 'Edredom',
        description: 'Buddemeyer Edredom p/capa Duvet Casal Vision Fill 100% Algodão Branco',
        estimatedPrice: 'R$ 765,96',
        link: 'https://www.amazon.com.br/dp/B0D9KQMXSJ?ref=cm_sw_r_cso_wa_apin_dp_5Q0MM8TCT3KKWTFX0ES3&ref_=cm_sw_r_cso_wa_apin_dp_5Q0MM8TCT3KKWTFX0ES3&social_share=cm_sw_r_cso_wa_apin_dp_5Q0MM8TCT3KKWTFX0ES3&th=1',
        image: '/lista-casa-nova/images/products/edredom.jpg',
      },
    ],
  },
  {
    id: 'banheiro',
    name: 'Banheiro',
    emoji: '🚿',
    items: [
    ],
  },
];
