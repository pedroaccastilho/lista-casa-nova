export interface Contact {
  name: string;
  number: string;
}

export const contacts: Contact[] = [
  { name: 'Pedro', number: '5519997611530' },
  { name: 'Maju', number: '5519982726419' },
];

export interface PixKey {
  name: string;
  key: string;
  keyType: 'CPF' | 'Telefone' | 'E-mail' | 'Aleatória';
  city: string;
}

export const pixKeys: PixKey[] = [
  { name: 'Pedro', key: 'pedroaccastilho@gmail.com', keyType: 'E-mail', city: 'Mogi Mirim' },
  { name: 'Maju',  key: '+5519982726419', keyType: 'Telefone', city: 'Mogi Mirim' },
];
