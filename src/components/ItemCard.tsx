import { useState } from 'react';
import type { Item } from '../data/items';
import { contacts } from '../data/contacts';
import styles from './ItemCard.module.css';

interface Props {
  item: Item;
}

function buildWhatsAppUrl(contact: { name: string; number: string }, itemName: string): string {
  const msg = encodeURIComponent(
    `Oi ${contact.name}! Vi na lista da casa nova e quero contribuir com: *${itemName}*`
  );
  return `https://wa.me/${contact.number}?text=${msg}`;
}

function ProductImage({ src, alt }: { src?: string; alt: string }) {
  const [errored, setErrored] = useState(false);

  if (!src || errored) {
    return (
      <div className={styles.imagePlaceholder} aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
      </div>
    );
  }

  return (
    <div className={styles.imageWrapper}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onError={() => setErrored(true)}
      />
    </div>
  );
}

export default function ItemCard({ item }: Props) {
  return (
    <div className={styles.card}>
      <ProductImage src={item.image} alt={item.name} />

      <div className={styles.cardBody}>
        <div className={styles.topRow}>
          <h3 className={styles.name}>{item.name}</h3>
        </div>
        {item.description && (
          <p className={styles.description}>{item.description}</p>
        )}
        <div className={styles.priceRow}>
          {item.estimatedPrice && (
            <p className={styles.price}>{item.estimatedPrice}</p>
          )}
          {item.link && (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.productLink}
              aria-label={`Ver produto: ${item.name}`}
            >
              Ver produto ↗
            </a>
          )}
        </div>
      </div>

      <div className={styles.actions}>
        {contacts.map((contact) => (
          <a
            key={contact.name}
            href={buildWhatsAppUrl(contact, item.name)}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappBtn}
            aria-label={`Falar com ${contact.name} sobre ${item.name}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="15" height="15" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.856L.054 23.994l6.306-1.654A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.651-.493-5.183-1.355l-.371-.22-3.844 1.008 1.027-3.748-.242-.386A9.943 9.943 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
            </svg>
            {contact.name}
          </a>
        ))}
      </div>
    </div>
  );
}
