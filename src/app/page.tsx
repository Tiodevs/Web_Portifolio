import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";
import ProjectCard from './components/ProjectCard';
import { HabilidadesList } from './components/HabilidadesList';

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <Image
          src="/Me.png"
          alt="Foto do felipe o dono do portifolio"
          width={604}
          height={324}
          quality={100}
        />
        <div className={styles.text}>
          <h1>Olá, eu sou o Felipe</h1>
          <p>Sou um desenvolvedor Full Stack apaixonado por criar soluções digitais robustas, seguras e inteligentes. Utilizo tecnologias modernas — incluindo inteligência artificial — para desenvolver produtos que geram retorno financeiro e entregam experiências excepcionais ao usuário.</p>
        </div>
      </div>

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
          <div className={styles.projectsButtonContainer}>
            <Link href="/projetos" className={styles.projectsButton}>Ver mais</Link>
          </div>
        </div>
      </div>

      <div className={styles.habilidades}>
        <h2 className={styles.habilidadesTitle}>Habilidades</h2>
        <div className={styles.habilidadesContainer}>
          <HabilidadesList 
            titulo="Frontend"
            habilidades={[
              "HTML",
              "CSS",
              "JavaScript",
              "Typescript",
              "React",
              "Next.js",
              "Figma",
              "SCSS",
              "Vercel",
              "GSAP",
              "Axios",
              "NextAuth",
              "SEO",
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
              "Docker",
              "AWS",
              "CI/CD",
              "Git",
              "GitHub",
              "Integrações com IA",
              "Treinamento de IA",
              "Testes automatizados",
              "Testes unitários",
              "Testes de integração",
              "Testes de sistema",
              "Testes de segurança",
              "Testes de performance",
            ]}
            habilidadeDestaque="Node.js"
          />  
          <HabilidadesList 
            titulo="Soft skills"
            habilidades={[
              "Comunicação Clara e Eficiente",
              "Pensamento Analítico",
              "Liderança e Tomada de Decisão",
              "Adaptabilidade",
              "Escuta Ativa e Empatia",
              "Gestão de Tempo e Prioridades",
              "Pensamento empreendedor",
            ]}
            habilidadeDestaque="Liderança e Tomada de Decisão"
          />
          <HabilidadesList 
            titulo="Outros"
            habilidades={[
              "Automações com n8n e make",
              "sap",
              "Metodologias ágeis",
            ]}
            habilidadeDestaque="Metodologias ágeis"
          />
          
        </div>
      </div>
    </div>
  );
}
