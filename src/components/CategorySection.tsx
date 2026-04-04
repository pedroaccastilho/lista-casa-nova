import type { Category } from '../data/items';
import ItemCard from './ItemCard';
import styles from './CategorySection.module.css';

interface Props {
  category: Category;
}

export default function CategorySection({ category }: Props) {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>
        <span className={styles.emoji}>{category.emoji}</span>
        {category.name}
      </h2>
      <div className={styles.grid}>
        {category.items.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
