import styles from "./page.module.css";
import Image from "next/image";
export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
      <Image
            src="/Me.png"
            alt="Foto do felipe o dono do portifolio"
            width={327}
            height={312}
        />
        <div className={styles.text}>
          <h1>Olá, eu sou o Felipe</h1>
          <p>Sou um desenvolvedor Full Stack apaixonado por criar soluções digitais robustas, seguras e inteligentes. Utilizo tecnologias modernas — incluindo inteligência artificial — para desenvolver produtos que geram retorno financeiro e entregam experiências excepcionais ao usuário.</p>
        </div>
      </div>
    </div>
  );
}
