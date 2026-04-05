import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { photos } from '../data/photos';
import styles from './PhotoGallery.module.css';

export default function PhotoGallery() {
  const [current, setCurrent] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  if (photos.length === 0) return null;

  const slides = photos.map((p) => ({ src: p.src }));

  function prev() {
    setCurrent((i) => (i === 0 ? photos.length - 1 : i - 1));
  }

  function next() {
    setCurrent((i) => (i === photos.length - 1 ? 0 : i + 1));
  }

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>Um gostinho</p>
          <h2 className={styles.title}>Nosso Apartamento</h2>
          <p className={styles.subtitle}>Conheça o lugar que estamos transformando em lar</p>
        </div>

        <div className={styles.carousel}>
          {/* Foto principal */}
          <button
            className={styles.slide}
            onClick={() => setLightboxIndex(current)}
            aria-label="Abrir foto em tela cheia"
          >
            <img
              src={photos[current].src}
              alt={photos[current].caption ?? `Foto ${current + 1}`}
            />
            {photos[current].caption && (
              <span className={styles.caption}>{photos[current].caption}</span>
            )}
          </button>

          {/* Seta esquerda */}
          {photos.length > 1 && (
            <button className={`${styles.arrow} ${styles.arrowLeft}`} onClick={prev} aria-label="Foto anterior">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="20" height="20">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
          )}

          {/* Seta direita */}
          {photos.length > 1 && (
            <button className={`${styles.arrow} ${styles.arrowRight}`} onClick={next} aria-label="Próxima foto">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="20" height="20">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          )}
        </div>

        {/* Dots */}
        {photos.length > 1 && (
          <div className={styles.dots}>
            {photos.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
                onClick={() => setCurrent(i)}
                aria-label={`Ir para foto ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      <Lightbox
        open={lightboxIndex >= 0}
        index={lightboxIndex}
        close={() => setLightboxIndex(-1)}
        slides={slides}
        styles={{ container: { backgroundColor: 'rgba(61, 43, 31, 0.95)' } }}
      />
    </section>
  );
}
