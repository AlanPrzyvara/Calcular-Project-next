import Image from "next/image";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <Image src="/images/calcularlogo.png" alt="Logo" width={200} height={70} />
        <span className={styles.title}>Ferramenta de aprendizagem de cálculo</span>
      </div>
      <span className={styles.date}>07/06/2022</span>
    </header>
  );
}
