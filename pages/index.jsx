import Link from 'next/link';
import Head from '../components/Head';
import styles from '../styles/HomePage.module.css';

export default function HomePage() {
  return (
    <>
      <Head title="Alton Vieira | Home" />
      <div className={styles.container}>
        <h6 className={styles.welcome}>Olá, geeks! Eu sou</h6>
        <h1 className={styles.title}>Alton Vieira</h1>
        <h3 className={styles.subtitle}>&lt;!-- Web Developer --&gt;</h3>
        <div className={styles.buttons}>
          <Link href="/about">
            <button className={styles.contained}>O que eu posso fazer?</button>
          </Link>
          <Link href="/contact">
            <button className={styles.outlined}>Entre em Contato</button>
          </Link>
        </div>
      </div>
    </>
  );
}
