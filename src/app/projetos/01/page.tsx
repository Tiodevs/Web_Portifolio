import Link from "next/link";
import styles from "./page.module.css";
import ProjectCard from "@/app/components/ProjectCard";
import { Contato } from "@/app/components/Contato";
import { HabilidadesList } from "@/app/components/HabilidadesList";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.projects}>
        <div className={styles.project}>
          <div className={styles.projectCapa}>
            <img src="/projcts/01/capa02.png" alt="Capa do projeto" />
          </div>
          <h2 className={styles.projectsTitle}>IA CHAT</h2>
          <p className={styles.projectsDescription}>
            Desenvolvi uma solução completa de IA que gera especificações funcionais para consultores SAP, automatizando tarefas que antes levavam horas e reduzindo esse tempo para poucos minutos. Atuei em todas as frentes do projeto — do backend ao frontend, além da infraestrutura e DevOps — garantindo performance, escalabilidade e uma experiência de uso fluida.
          </p>
          <div className={styles.projectsContainer}>

            <div className={styles.projectsContainerList}>
              <HabilidadesList
                titulo="Frontend"
                habilidades={[
                  "Figma",
                  "Next.js",
                  "CSS",
                  "Typescript",
                  "Vercel",
                  "GSAP",
                  "Git",
                ]}
                habilidadeDestaque="Next.js"
              />
              <HabilidadesList
                titulo="Backend"
                habilidades={[
                  "Node.js",
                  "Express",
                  "Prisma",
                  "PostgreSQL",
                  "Railway",
                  "Supabase",
                  "Yup",
                  "Integração com IA",
                  "Desenvolvimento de IA",
                  "Git",
                ]}
                habilidadeDestaque="Node.js"
              />
            </div>

            <div className={styles.projectsContainerTelas}>
                <img src="/projcts/01/tela01.png" alt="Tela do projeto" />
                <img src="/projcts/01/tela02.png" alt="Tela do projeto" />
                <img src="/projcts/01/tela03.png" alt="Tela do projeto" />
            </div>
          </div>
        </div>
      </div>

      <Contato
        email="santospefelipe@gmail.com"
        linkedin="https://www.linkedin.com/in/felipe-santos-pe/"
        instagram="https://www.instagram.com/felipe.santos.pe/"
        copyright="© 2025 Felipe Santos"
      />
    </div>
  );
}
