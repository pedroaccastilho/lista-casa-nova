import Header from './components/Header';
import PhotoGallery from './components/PhotoGallery';
import CategorySection from './components/CategorySection';
import PixSection from './components/PixSection';
import Footer from './components/Footer';
import { categories } from './data/items';
import styles from './App.module.css';

export default function App() {
  return (
    <>
      <Header />
      <PhotoGallery />
      <main className={styles.main}>
        <div className="container">
          <div className={styles.listHeader}>
            <p className={styles.eyebrow}>O que precisamos</p>
            <h2 className={styles.title}>Lista da Casa Nova</h2>
            <p className={styles.subtitle}>
              Clique em qualquer item e fale diretamente com a gente pelo WhatsApp 💚
            </p>
          </div>
          {categories.map((category) => (
            <CategorySection key={category.id} category={category} />
          ))}
        </div>
      </main>
      <PixSection />
      <Footer />
    </>
  );
}
