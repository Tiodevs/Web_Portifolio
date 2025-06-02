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
            <img src="/projcts/02/Capa02.png" alt="Capa do projeto" />
          </div>
          <h2 className={styles.projectsTitle}>Site de links</h2>
          <p className={styles.projectsDescription}>
          Desenvolvi um site de links para um a ASSUMTEK, com um design moderno e responsivo. O site foi criado com Next.js e node.js, uma interface de adiministração para gerenciar os links e um painel de controle para gerenciar o site.
          </p>
          <div className={styles.projezctsContainer}>

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
                <img src="/projcts/02/Tela01.png" alt="Tela do projeto" />
                <img src="/projcts/02/Tela02.png" alt="Tela do projeto" />
                <img src="/projcts/02/Tela03.png" alt="Tela do projeto" />
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
