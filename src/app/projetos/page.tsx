import Link from "next/link";
import styles from "./page.module.css";
import ProjectCard from "@/app/components/ProjectCard";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.projects}>
        <div className={styles.project}>
          <h2 className={styles.projectsTitle}>Meus projetos</h2>
          <p className={styles.projectsDescription}>
            Aqui está um pouco dos meus projetos mais recentes. Cada um deles reflete meu foco em soluções centradas no usuário e meu compromisso com a excelência em performance, segurança e resultados reais para o negócio.
          </p>
          <div className={styles.projectsContainer}>
            <ProjectCard
              title="IA CHAT"
              subtitle="2025 - Full Stack"
              description="Desenvolvi uma solução completa de IA que gera especificações funcionais para consultores SAP, automatizando tarefas que antes levavam horas e reduzindo esse tempo para poucos minutos. Atuei em todas as frentes do projeto — do backend ao frontend, além da infraestrutura e DevOps — garantindo performance, escalabilidade e uma experiência de uso fluida."
              image="/projcts/01/capa01.png"
              link="/"
              linksgit="/"
            />
            <ProjectCard
              title="Site de links"
              subtitle="2025 - Full Stack"
              description="Desenvolvi um site de links para um a ASSUMTEK, com um design moderno e responsivo. O site foi criado com Next.js e node.js, uma interface de adiministração para gerenciar os links e um painel de controle para gerenciar o site."
              image="/projcts/02/capa01.png"
              link="/"
              linksgit="/"
            />


          </div>


        </div>
      </div>

      
    </div>
  );
}
