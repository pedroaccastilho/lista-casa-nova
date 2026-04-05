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
  { src: '/lista-casa-nova/photos/piso-banheiros.jpeg', caption: 'Piso banheiros (obra)' },
  { src: '/lista-casa-nova/photos/cozinha-obra.jpeg', caption: 'Cozinha (obra)' },
];
