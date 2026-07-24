'use client';

import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";
import ProjectCard from '../../components/Projetos/ProjectCard';
import { HabilidadesList } from '../../components/Habilidades/HabilidadesList';
import { ExperienciaItem } from '../../components/ExperiencialItem/ExperienciaItem';
import { Contato } from '../../components/Contato/Contato';
import { CertificadoItem } from '../../components/Certificados/CertificadoItem';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { useLoadingState } from "../../hooks/useLoadingState";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const headerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const buttonTextRef = useRef<HTMLSpanElement>(null);
  const buttonTextRef2 = useRef<HTMLSpanElement>(null);

  // Refs para a seção de projetos
  const projectsHeaderRef = useRef<HTMLDivElement>(null);

  const { isLoading } = useLoadingState();

  useEffect(() => {
    const tl = gsap.timeline();

    // Animação do header
    gsap.set([titleRef.current, textRef.current, buttonRef.current], {
      opacity: 0,
      y: 30
    });

    // Animação do header
    tl.from(headerRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.3,
      ease: "power2.out"
    })
      .from(imageRef.current, {
        y: 30,
        scale: 5,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out"
      }, "-=0.8")
      .to(titleRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        delay: 1
      })
      .to(textRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
      }, "-=0.4")
      .to(buttonRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.1,
        ease: "power2.out",
        clearProps: "all",
      }, "-=0.4");

    // Configurações do botão CV
    gsap.set(buttonTextRef2.current, {
      y: '100%',
      rotationX: -90,
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      opacity: 1,
      pointerEvents: 'none'
    });

    // Adiciona a animação de hover
    if (buttonRef.current && buttonTextRef.current && buttonTextRef2.current) {
      const buttonTl = gsap.timeline({ paused: true });

      buttonTl.to(buttonTextRef.current, {
        duration: 0.5,
        y: '-100%',
        rotationX: 90,
        ease: 'power2.inOut'
      })
        .to(buttonTextRef2.current, {
          duration: 0.5,
          y: '0%',
          rotationX: 0,
          ease: 'power2.inOut'
        }, '<');

      buttonRef.current.addEventListener('mouseenter', () => {
        buttonTl.play();
      });

      buttonRef.current.addEventListener('mouseleave', () => {
        buttonTl.reverse();
      });
    }


  }, [isLoading]);

  useEffect(() => {
    // Animação dos projetos com cabeçalho fixo
    const timer = setTimeout(() => {
      console.log('Iniciando animação dos projetos...');

      const projectCards = gsap.utils.toArray<HTMLElement>('.project-card-item');
      console.log('Cards encontrados:', projectCards.length);

      if (projectCards.length > 0) {
        console.log('Criando ScrollTrigger...');

        // Efeito de acordeão nos cards
        projectCards.forEach((card, index) => {
          const isFirst = index === 0;

          // Define posição inicial dos cards
          gsap.set(card, {
            zIndex: projectCards.length + index,
            position: 'sticky',
            top: `${100 + (index * 10)}px`, // Mais espaçamento entre cards
          });

          if (isFirst) {
            gsap.set(card, {
              y: 0,
            });

            // Animação de entrada suave para cada card
            gsap.fromTo(card,
              {
                y: 0,
              },
              {
                y: 0,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: card,
                  start: 'top 70%',
                  end: 'top 100%',
                  scrub: false,
                  markers: false,
                }
              }
            );
          } else {

            // Animação de entrada suave para cada card
            gsap.fromTo(card,
              {
                y: 150,
              },
              {
                y: 0,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: card,
                  start: 'top 70%',
                  end: 'top 100%',
                  scrub: false,
                  markers: false,
                }
              }
            );

          }



        });
      }

      // Animações da timeline de experiências
      const timelineItems = gsap.utils.toArray<HTMLElement>('.timelineItem');

      timelineItems.forEach((item, index) => {
        const dot = item.querySelector('.timelineDot');
        const card = item.querySelector('.timelineCard');
        const line = item.querySelector('.timelineLine');

        // Animação de entrada do item
        gsap.fromTo(item,
          {
            opacity: 0,
            x: index % 2 === 0 ? -50 : 50,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: 'top 80%',
              end: 'top 20%',
              toggleActions: 'play none none reverse',
            }
          }
        );

        // Animação do ponto da timeline
        if (dot) {
          gsap.fromTo(dot,
            {
              scale: 0,
              rotation: -180,
            },
            {
              scale: 1,
              rotation: 0,
              duration: 0.6,
              ease: "back.out(1.7)",
              scrollTrigger: {
                trigger: item,
                start: 'top 75%',
                toggleActions: 'play none none reverse',
              }
            }
          );
        }

        // Animação da linha da timeline
        if (line) {
          gsap.fromTo(line,
            {
              scaleY: 0,
              transformOrigin: 'top',
            },
            {
              scaleY: 1,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: item,
                start: 'top 70%',
                end: 'bottom 70%',
                toggleActions: 'play none none reverse',
              }
            }
          );
        }

        // Animação do card
        if (card) {
          gsap.fromTo(card,
            {
              y: 30,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power2.out",
              delay: 0.2,
              scrollTrigger: {
                trigger: item,
                start: 'top 75%',
                toggleActions: 'play none none reverse',
              }
            }
          );
        }
      });

      // Animações da seção de educação/cursos
      const cursoItems = gsap.utils.toArray<HTMLElement>('.curso-item');

      cursoItems.forEach((item, index) => {
        // Animação lateral de entrada (da direita para esquerda)
        gsap.fromTo(item,
          {
            opacity: 0,
            x: 120,
            rotationY: 15,
          },
          {
            opacity: 1,
            x: 0,
            rotationY: 0,
            duration: 1,
            ease: "power3.out",
            delay: index * 0.15,
          }
        );



        // Animação de hover mais suave
        const cardContainer = item.querySelector('.cardContainer');
        if (cardContainer) {
          gsap.set(cardContainer, {
            transformPerspective: 1000,
          });
        }
      });

    }, 500);


    return () => {
      clearTimeout(timer);
      // Limpa todos os ScrollTriggers quando o componente desmonta
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);


  return (
    <div className={`${styles.page} ${isLoading ? styles.hidden : styles.visible}`}>
      <div className={styles.header} ref={headerRef}>
        <div ref={imageRef} className={styles.image}>
          <Image
            src="/Me.png"
            alt="Foto do felipe o dono do portifolio"
            width={604}
            height={324}
            quality={100}
          />
        </div>
        <div className={styles.text}>
          <h1 ref={titleRef}>Desenvolvedor Full Stack</h1>
          <p ref={textRef}>Web, Cloud, IA & Automação — de Curitiba para produtos que escalam. Construo aplicações web de alta performance, lidero projetos da concepção ao suporte e integro IA no fluxo de trabalho de forma ética e sustentável, com foco em código limpo, seguro e impacto estratégico no negócio.</p>

          <a
            ref={buttonRef}
            className={styles.buttonheader}
            href="/CV2026v3.pdf"
            download="CV2026v3.pdf"
          >
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
              <span
                className={styles.buttonText1}
                ref={buttonTextRef}
              >
                Baixar currículo
              </span>
              <span
                ref={buttonTextRef2}
                className={styles.buttonText2}
              >
                Baixar agora
              </span>
            </div>
          </a>
        </div>
      </div>

      <div className={styles.projects}>
        <div className={styles.project}>
          <div ref={projectsHeaderRef} className={styles.projectsHeader}>
            <h2 className={styles.projectsTitle}>Meus projetos</h2>
            <p className={styles.projectsDescription}>
              Alguns dos projetos mais recentes — sempre com foco em UX, performance, segurança e resultados que aparecem nas métricas, alinhados ao que faço hoje em produto, dados e IA aplicada.
            </p>
          </div>
          <div className={styles.projectsContainer}>
            <ProjectCard
              title="IA CHAT"
              subtitle="2025 - Full Stack"
              description="Desenvolvi uma solução completa de IA que gera especificações funcionais para consultores SAP, automatizando tarefas que antes levavam horas e reduzindo esse tempo para poucos minutos. Atuei em todas as frentes do projeto — do backend ao frontend, além da infraestrutura e DevOps — garantindo performance, escalabilidade e uma experiência de uso fluida."
              image="/projcts/01/capa01.png"
              link="/projetos/01"
            />
            <ProjectCard
              title="Sentier - Landing Page"
              subtitle="2025 - Full Stack"
              description="Desenvolvi uma landing page para o Sentier, com um design moderno e responsivo. O site foi criado com Next.js e node.js, a pagina foi feita para apresentar as informações da empresa e os produtos que ela oferece."
              image="/projcts/03/Capa01.png"
              link="/projetos/03"
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
            titulo="Front-end"
            habilidades={[
              { nome: "HTML", imagem: "/icons/html5-original.svg", altImagem: "HTML5" },
              { nome: "CSS", imagem: "/icons/css3-original.svg", altImagem: "CSS3" },
              { nome: "JavaScript", imagem: "/icons/javascript-original.svg", altImagem: "JavaScript" },
              { nome: "TypeScript", imagem: "/icons/typescript-original.svg", altImagem: "TypeScript" },
              { nome: "React", imagem: "/icons/react-original.svg", altImagem: "React" },
              { nome: "Next.js", imagem: "/icons/nextjs-original.svg", altImagem: "Next.js" },
              "Tailwind CSS",
              "GSAP",
            ]}
            habilidadeDestaque="Next.js"
          />
          <HabilidadesList
            titulo="Back-end & APIs"
            habilidades={[
              { nome: "Node.js", imagem: "/icons/nodejs-original.svg", altImagem: "Node.js" },
              { nome: "Express", imagem: "/icons/express-original.svg", altImagem: "Express" },
              { nome: "Prisma", imagem: "/icons/prisma-original.svg", altImagem: "Prisma" },
              { nome: "PostgreSQL", imagem: "/icons/postgresql-original.svg", altImagem: "PostgreSQL" },
              "MongoDB",
              "APIs REST",
              "Autenticação",
              "DDD",
            ]}
            habilidadeDestaque="Node.js"
          />
          <HabilidadesList
            titulo="Cloud & DevOps"
            habilidades={[
              "AWS (S3, SQS, Lambda)",
              { nome: "Docker", imagem: "/icons/docker-original.svg", altImagem: "Docker" },
              "CI/CD & Git Flow",
              { nome: "Vercel", imagem: "/icons/vercel-original.svg", altImagem: "Vercel" },
              { nome: "Railway", imagem: "/icons/railway-original.svg", altImagem: "Railway" },
              "New Relic",
            ]}
            habilidadeDestaque="AWS (S3, SQS, Lambda)"
          />
          <HabilidadesList
            titulo="Automação & outros"
            habilidades={[
              "Make & n8n",
              { nome: "Figma", imagem: "/icons/figma-original.svg", altImagem: "Figma" },
              "Scrum",
              "Power BI",
            ]}
            habilidadeDestaque="Make & n8n"
          />
          <HabilidadesList
            titulo="IA & LLMs"
            habilidades={[
              "LangChain & RAG",
              "OpenAI SDK & Gemini",
              "Prompt engineering",
              "Gestão de memória / contexto",
              "GitHub Copilot",
            ]}
            habilidadeDestaque="LangChain & RAG"
          />

        </div>
      </div>

      <div className={styles.experiencias}>
        <h2 className={styles.experienciasTitle}>Experiências</h2>
        <div className={styles.timelineContainer}>
          <ExperienciaItem
            empresa="Grupo Boticário"
            cargo="Engenheiro de Software Pleno"
            periodo="Jan 2026 — Atual"
            descricao="GenIA e reestruturação industrial: ponto focal na modernização do suporte fabril com IA generativa (RAG) para documentação técnica, dashboards de BI para a gestão e redesenho de processos (BPMN) com integrações de sistemas. Desenvolvimento Full Stack em PWA no App Super (gestão de mais de 5.000 colaboradores): decisões técnicas em React, Node.js, MongoDB/DocumentDB e SSO, com DevOps na AWS (EKS, S3, ArgoCD, New Relic). A solução substituiu dezenas de planilhas manuais, com cerca de 20% mais produtividade dos coordenadores fabris, 10% menos tempo em alocação de equipes e otimização de um custo operacional de R$ 63 milhões/ano."
          />
          <ExperienciaItem
            empresa="ASSUMTEK"
            cargo="Desenvolvedor Full Stack Pleno & Tech Lead"
            periodo="Jan 2025 — Jan 2026"
            descricao="Produto de RH do zero (Node, PostgreSQL, Next, Vercel, Railway): jornada PJ, folha, regras de negócio, aprovações e cálculo dinâmico de remuneração — redução de cerca de 70% no tempo operacional do RH no fechamento da folha. Liderança técnica: arquitetura, demandas e cerimônias 1:1. MarTech e APIs com Node, n8n e Make (Meta Ads, CRMs, base interna). Pipelines de dados com Node e Python alimentando Power BI para todos os setores e dashboards B2B."
          />
          <ExperienciaItem
            empresa="Sentier"
            cargo="Fundador & Desenvolvedor Full Stack"
            periodo="Jan 2021 — Jan 2025"
            descricao="Mais de 40 projetos B2B ponta a ponta: sistemas sob medida, landing pages, automações e BI. Destaque: plataforma SaaS multi-tenant para barbearias (agenda, folha, assinaturas, lembretes) com Next.js, Node, Prisma, AWS S3, Resend e Vercel — mais de 7.000 usuários cadastrados e economia de tempo estimada entre 17% e 20% na operação dos clientes."
            isLast
          />
          
        </div>
      </div>

      <div className={styles.educacao}>
        <h2 className={styles.educacaoTitle}>Educação</h2>

        <div className={styles.educacaoContainer}>
          

          <div className={styles.educacaoCategoria}>
            <h3 className={styles.categoriaTitle}>Formação e cursos</h3>
            <div className={styles.categoriaContent}>
              <CertificadoItem
                titulo="FAEL — Análise e Desenvolvimento de Sistemas"
                descricao="Graduação em Análise e Desenvolvimento de Sistemas (jan 2021 – dez 2025), com foco em programação, desenvolvimento web, sistemas e bases para atuar com IA e software em ambientes corporativos."
                index={1}
                progresso={100}
              />
              <CertificadoItem
                titulo="Grupo Boticário — Programa Desenvolve"
                descricao="Programa intensivo em Full Stack (Node, React, Next) e IA, alinhado às práticas e stack usadas em produto de grande escala."
                index={2}
                progresso={100}
              />
              <CertificadoItem
                titulo="Harvard Business Education — Business Fundamentals"
                descricao="Fundamentos de negócio para conectar entrega técnica a valor, priorização e visão de produto no ambiente corporativo."
                index={3}
                progresso={100}
              />
              <CertificadoItem
                titulo="Google — Análise de Dados & BI"
                descricao="Base sólida em ciclo de vida dos dados, tomada de decisão orientada a dados e ferramentas de análise e BI usadas no dia a dia."
                imagem="/certificados/googDados.jpeg"
                index={4}
              />
              <CertificadoItem
                titulo="Harvard University — CS50x (Ciência da Computação)"
                descricao="Introdução rigorosa à ciência da computação: de fundamentos e algoritmos a projetos práticos de software e web, com todos os trabalhos concluídos."
                imagem="/certificados/CS50x.png"
                index={5}
              />
              <CertificadoItem
                titulo="AWS Academy — Cloud Foundations"
                descricao="Conceitos de nuvem AWS: infraestrutura global, serviços essenciais, segurança, arquitetura e modelos de precificação para decisões informadas em cloud."
                imagem="/certificados/aws.png"
                index={6}
              />
            </div>
          </div>
        </div>
      </div>

      <Contato/>
    </div>
  );
}
