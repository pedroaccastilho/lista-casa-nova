/** Gera o payload do QR Code PIX estático no padrão EMV (Banco Central do Brasil). */

function field(id: string, value: string): string {
  return `${id}${String(value.length).padStart(2, '0')}${value}`;
}

function crc16(str: string): string {
  let crc = 0xffff;
  for (let i = 0; i < str.length; i++) {
    crc ^= str.charCodeAt(i) << 8;
    for (let j = 0; j < 8; j++) {
      if (crc & 0x8000) {
        crc = ((crc << 1) ^ 0x1021) & 0xffff;
      } else {
        crc = (crc << 1) & 0xffff;
      }
    }
  }
  return crc.toString(16).toUpperCase().padStart(4, '0');
}

export function buildPixPayload(params: {
  key: string;
  name: string;
  city: string;
}): string {
  const { key, name, city } = params;

  const merchantAccount = field('00', 'BR.GOV.BCB.PIX') + field('01', key);

  let payload =
    field('00', '01') +
    field('26', merchantAccount) +
    field('52', '0000') +
    field('53', '986') +
    field('58', 'BR') +
    field('59', name.substring(0, 25)) +
    field('60', city.substring(0, 15)) +
    field('62', field('05', '***')) +
    '6304';

  return payload + crc16(payload);
}
