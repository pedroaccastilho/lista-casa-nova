import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { photos } from '../data/photos';
import styles from './PhotoGallery.module.css';

export default function PhotoGallery() {
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  if (photos.length === 0) return null;

  const slides = photos.map((p) => ({ src: p.src }));

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>Um gostinho</p>
          <h2 className={styles.title}>Nosso Apartamento</h2>
          <p className={styles.subtitle}>Conheça o lugar que estamos transformando em lar</p>
        </div>

        <div className={styles.grid}>
          {photos.map((photo, index) => (
            <button
              key={index}
              className={styles.photoCard}
              onClick={() => setLightboxIndex(index)}
              aria-label={`Ver foto ${photo.caption ?? index + 1}`}
            >
              <img src={photo.src} alt={photo.caption ?? `Foto ${index + 1}`} loading="lazy" />
              {photo.caption && (
                <span className={styles.caption}>{photo.caption}</span>
              )}
            </button>
          ))}
        </div>
      </div>

      <Lightbox
        open={lightboxIndex >= 0}
        index={lightboxIndex}
        close={() => setLightboxIndex(-1)}
        slides={slides}
        styles={{
          container: { backgroundColor: 'rgba(61, 43, 31, 0.95)' },
        }}
      />
    </section>
  );
}
