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
        id: 1,
        name: 'Geladeira',
        description: 'Brastemp Duplex 415L Inox',
        estimatedPrice: 'R$ 3.120,00',
        link: 'https://www.brastemp.com.br/geladeira-brastemp-duplex-415l-inox/p?idsku=326199071&gad_source=1&gad_campaignid=21164263367&gbraid=0AAAAADJ0Bqo0dRXqbT-VRG0j2Or5e-rxq&gclid=Cj0KCQjwp7jOBhDGARIsABe7C4ehKrW5-19YVk48dRZdFSLm60yvlEx5rsYJVr-pvnXZXHJX7hE0ivQaAghAEALw_wcB',
        image: '/lista-casa-nova/images/products/geladeira.jpg',
      },
      {
        id: 2,
        name: 'Máquina de lavar louça',
        description: 'Brastemp 10 serviços Inox, ciclo pesado',
        estimatedPrice: 'R$ 3.100,00',
        link: 'https://www.brastemp.com.br/lava-loucas-10-servicos-inox-ciclo-pesado-blf10br/p?idsku=326020167&gad_source=1&gad_campaignid=21164263367&gbraid=0AAAAADJ0Bqo0dRXqbT-VRG0j2Or5e-rxq&gclid=Cj0KCQjwp7jOBhDGARIsABe7C4fMZRaizkCe8PNJu77d6vVIi8bEP9oNdfmQWrEjEi5KAvgOQFjpZUoaAkkzEALw_wcB',
        image: '/lista-casa-nova/images/products/lava-loucas.jpg',
      },
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
      {
        id: 7,
        name: 'Mixer',
        description: 'Mixer portátil',
        estimatedPrice: 'R$ 267,00',
        link: 'https://www.amazon.com.br/gp/product/B0DRPPT5DK/ref=ox_sc_act_title_2?smid=A1ZZFT5FULY4LN&psc=1',
        image: '/lista-casa-nova/images/products/mixer.jpg',
      },
    ],
  },
  {
    id: 'cozinha',
    name: 'Cozinha',
    emoji: '🍳',
    items: [
      {
        id: 8,
        name: 'Faqueiro',
        description: 'Tramontina Pacific, 36 peças, aço inox',
        estimatedPrice: 'R$ 355,00',
        link: 'https://www.mercadolivre.com.br/faqueiro-com-36-pecas-em-aco-inox-e-alto-brilho-pacific-tramontina/p/MLB32551244',
        image: '/lista-casa-nova/images/products/faqueiro.jpg',
      },
      {
        id: 9,
        name: 'Jogo de pratos',
        description: 'Aparelho de jantar completo',
        estimatedPrice: 'R$ 434,00',
        link: 'https://www.amazon.com.br/dp/B0CFFQBY89',
        image: '/lista-casa-nova/images/products/jogo-pratos.jpg',
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
      {
        id: 14,
        name: 'Jogo de toalhas',
        description: 'Buddemeyer 4 peças, algodão egípcio, banho e rosto',
        estimatedPrice: 'R$ 363,00',
        link: 'https://shopee.com.br/Kit-Jogo-De-Toalhas-Buddemeyer-4-Pe%C3%A7as-Algod%C3%A3o-Egipcio-Banho-e-Rosto-Fio-Penteado-i.709666406.23591531580',
        image: '/lista-casa-nova/images/products/toalhas.jpg',
      }
    ],
  },
];
