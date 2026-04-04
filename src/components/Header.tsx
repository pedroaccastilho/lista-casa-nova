import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.overlay} />
      <div className={`container ${styles.content}`}>
        <p className={styles.eyebrow}>Pedro &amp; Maju</p>
        <h1 className={styles.title}>Nossa Casa Nova</h1>
        <p className={styles.subtitle}>
          Estamos realizando o sonho de montar nosso lar juntos.
          <br />
          Se quiser nos ajudar a torná-lo ainda mais especial, ficamos muito felizes!
        </p>
        <div className={styles.divider}>✦ ✦ ✦</div>
      </div>
    </header>
  );
}
