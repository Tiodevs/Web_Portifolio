import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";
import ProjectCard from '../components/ProjectCard';
import { HabilidadesList } from '../components/HabilidadesList';
import { ExperienciaItem } from '../components/ExperienciaItem';
import { Contato } from '../components/Contato';
import { CertificadoItem } from '../components/CertificadoItem';

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


          <a className={styles.buttonheader} href="/cv25.pdf" download>Baixar currículo</a>
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
              link="/projetos/01"
              linksgit="/"
            />
            <ProjectCard
              title="Site de links"
              subtitle="2025 - Full Stack"
              description="Desenvolvi um site de links para um a ASSUMTEK, com um design moderno e responsivo. O site foi criado com Next.js e node.js, uma interface de adiministração para gerenciar os links e um painel de controle para gerenciar o site."
              image="/projcts/02/Capa01.png"
              link="/projetos/02"
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
              "Desenvolvimento de IA",
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

      <div className={styles.experiencias}>
        <h2 className={styles.experienciasTitle}>Experiências</h2>
        <div className={styles.experienciasContainer}>
          <ExperienciaItem
            titulo="Líder do time de Tech"
            periodo="Assumtek / Jan 2025 — Atual"
            descricao="Atuo como Desenvolvedor Full Stack na ASSUMTEK Education, liderando iniciativas de tecnologia aplicadas à educação. Participei do desenvolvimento de sites institucionais e soluções inovadoras como cartões NFC e assistentes com IA treinada em conteúdos internos. Estruturei automações no Zoho CRM e iniciei projetos de BI para apoiar decisões estratégicas. Também contribuo em eventos como o SAP FORWARD e na modernização de processos internos."
          />
          <ExperienciaItem
            titulo="Serviço voluntario"
            periodo="Jan 2023 — Jan 2025 "
            descricao="Optei por fazer uma pausa na minha carreira para me dedicar integralmente a um programa de voluntariado, aplicando meus conhecimentos em tecnologia, fotografia, música e gestão para apoiar ONGs, hospitais e comunidades carentes. Durante esse período, participei de diversas iniciativas que buscam proporcionar inclusão, inovação e impacto social."
          />
          <ExperienciaItem
            titulo="Professor de TI"
            periodo="Jan 2022 — Jan 2023"
            descricao="Optei por fazer uma pausa na minha carreira para me dedicar integralmente a um programa de voluntariado, aplicando meus conhecimentos em tecnologia, fotografia, música e gestão para apoiar ONGs, hospitais e comunidades carentes. Durante esse período, participei de diversas iniciativas que buscam proporcionar inclusão, inovação e impacto social."
          />
        </div>
      </div>

      <div className={styles.educacao}>
        <h2 className={styles.educacaoTitle}>Educação</h2>

        <div className={styles.educacaoContainer}>
          <div className={styles.educacaoCategoria}>
            <h3 className={styles.categoriaTitle}>Formação Acadêmica</h3>
            <div className={styles.categoriaContent}>
              <CertificadoItem
                titulo="Faculdade de ADS - Análise e Desenvolvimento de Sistemas"
                descricao="Atualmente cursando Análise e Desenvolvimento de Sistemas na Universidade Estácio de Sá, com previsão de conclusão o segundo semestre de 2025. Estou aprofundando meus conhecimentos em programação, desenvolvimento web e sistemas, além de aprender sobre IA e desenvolvimento de software."
              />
            </div>
          </div>

          <div className={styles.educacaoCategoria}>
            <h3 className={styles.categoriaTitle}>Cursos em Andamento</h3>
            <div className={styles.categoriaContent}>
              <CertificadoItem
                titulo="Programa Desenvolve | Desenvolvimento de Software - Grupo Boticário"
                descricao="Atualmente participando do Desenvolve, o programa de aceleração de carreiras em tecnologia do Grupo Boticário. Fui selecionado para esta trilha de desenvolvimento de software, que visa formar os futuros especialistas da companhia através de uma imersão em projetos reais, tecnologias de ponta e na cultura de uma das maiores empresas de beleza e tecnologia do mundo."
                imagem="/certificados/desenvolve.png"
              />
            </div>
          </div>

          <div className={styles.educacaoCategoria}>
            <h3 className={styles.categoriaTitle}>Cursos Concluídos</h3>
            <div className={styles.categoriaContent}>
              <CertificadoItem
                titulo="Harvard University: CS50x Introdução à Ciência da Computação"
                descricao="Orgulhoso por ter concluído o CS50x de Harvard, uma das mais desafiadoras e gratificantes introduções à ciência da computação. O curso me levou de conceitos fundamentais, como o sistema binário e algoritmos, a projetos práticos de desenvolvimento de software e web. Finalizei com sucesso todos os trabalhos propostos."
                imagem="/certificados/CS50x.png"
              />
              <CertificadoItem
                titulo="Curso do Google - Análise de Dados"
                descricao="Este programa intensivo, ministrado por especialistas do Google, me proporcionou uma base sólida no mundo da análise de dados. Aprendi a identificar o ciclo de vida dos dados, a importância da tomada de decisões baseada em dados e as principais ferramentas e metodologias utilizadas por analistas de dados no dia a dia."
                imagem="/certificados/googDados.jpeg"
              />
              <CertificadoItem
                titulo="Santander - Liderança e Performance"
                descricao="O treinamento de 8 horas explorou como a estratégia, a tecnologia e o fator humano se unem para criar equipes vencedoras. Adquiri conhecimentos sobre como aplicar essa mentalidade de alta performance para otimizar processos, motivar equipes e acelerar resultados no ambiente de trabalho."
                imagem="/certificados/SantanderLidereança.jpg"
              />
              <CertificadoItem
                titulo="AWS Academy Graduate - Cloud Foundations"
                descricao="Este programa me proporcionou um entendimento detalhado dos conceitos da nuvem AWS, incluindo sua infraestrutura global, serviços essenciais, segurança, arquitetura e modelos de precificação. Adquiri o conhecimento fundamental para articular os benefícios da nuvem AWS e tomar decisões informadas sobre soluções baseadas em seus principais serviços."
                imagem="/certificados/aws.png"
              />
              <CertificadoItem
                titulo="Matheus Fraga - Full Stack, Node e React"
                descricao="Finalizei com sucesso o curso Projeto Completo da Udemy, que me proporcionou uma imersão prática no desenvolvimento de software. Durante as 25.5 horas de curso, apliquei conceitos de back-end, front-end e mobile para construir uma aplicação funcional."
                imagem="/certificados/MatheusFraga-React-Next-Node-ReactNative.jpg"
              />
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
