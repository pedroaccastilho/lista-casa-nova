import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { pixKeys } from '../data/contacts';
import type { PixKey } from '../data/contacts';
import { buildPixPayload } from '../utils/pixPayload';
import styles from './PixSection.module.css';

function PixCard({ pix }: { pix: PixKey }) {
  const [copied, setCopied] = useState(false);

  const payload = buildPixPayload({
    key: pix.key,
    name: pix.name,
    city: pix.city,
  });

  function handleCopy() {
    navigator.clipboard.writeText(pix.key).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div className={styles.card}>
      <div className={styles.qrWrapper}>
        <QRCodeSVG
          value={payload}
          size={160}
          bgColor="transparent"
          fgColor="var(--qr-color)"
          level="M"
        />
      </div>
      <div className={styles.cardFooter}>
        <p className={styles.personName}>{pix.name}</p>
        <p className={styles.keyType}>{pix.keyType}</p>
        <button
          className={`${styles.copyBtn} ${copied ? styles.copied : ''}`}
          onClick={handleCopy}
          aria-label={`Copiar chave PIX de ${pix.name}`}
        >
          {copied ? (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="14" height="14" aria-hidden="true">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Chave copiada!
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14" aria-hidden="true">
                <rect x="9" y="9" width="13" height="13" rx="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
              Copiar chave PIX
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export default function PixSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.header}>
            <p className={styles.eyebrow}>Prefere enviar direto?</p>
            <h2 className={styles.title}>Contribua via PIX</h2>
            <p className={styles.subtitle}>
              Qualquer valor é muito bem-vindo e ajuda a transformar esse espaço no nosso lar 🏡
            </p>
          </div>
          <div className={styles.cards}>
            {pixKeys.map((pix) => (
              <PixCard key={pix.name} pix={pix} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
