export interface Photo {
  src: string;
  caption?: string;
}

// Adicione suas fotos aqui!
// Coloque os arquivos em: public/photos/
// Exemplo: public/photos/sala.jpg → src: '/lista-casa-nova/photos/sala.jpg'
export const photos: Photo[] = [
  { src: '/lista-casa-nova/photos/entrega-chaves.jpg', caption: 'Entrega das chaves' },
  { src: '/lista-casa-nova/photos/entrega-chaves2.jpg', caption: 'Entrega das chaves' },
  { src: '/lista-casa-nova/photos/por-do-sol.jpg', caption: 'Nossa vista' },
  { src: '/lista-casa-nova/photos/cozinha.jpeg', caption: 'Cozinha' },
  { src: '/lista-casa-nova/photos/cozinha2.jpeg', caption: 'Cozinha' },
  { src: '/lista-casa-nova/photos/piso-banheiros.jpeg', caption: 'Piso banheiros' },
  { src: '/lista-casa-nova/photos/banheiro.jpeg', caption: 'Banheiro' },
  { src: '/lista-casa-nova/photos/banheiro2.jpeg', caption: 'Banheiro' },
  { src: '/lista-casa-nova/photos/sala.jpeg', caption: 'Sala' },
  { src: '/lista-casa-nova/photos/sala-jantar.jpeg', caption: 'Sala jantar' },
  { src: '/lista-casa-nova/photos/quarto.jpeg', caption: 'Quarto' },
  { src: '/lista-casa-nova/photos/escritorio.jpeg', caption: 'Escritório' },
];
