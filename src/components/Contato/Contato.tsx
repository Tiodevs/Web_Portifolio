import Image from 'next/image';
import styles from './Contato.module.scss';
import { LINKEDIN_PROFILE_URL } from '@/lib/social';


export function Contato() {
  return (
    <div className={styles.contato}>
      <div className={styles.imgFooter}>
        <Image 
          src="/me2.png" 
          alt="Foto do felipe o dono do portifolio" 
          width={429} 
          height={323} 
          quality={100} 
        />
      </div>
      <h2 className={styles.contatoTitle}>Contate-me</h2>
      <div className={styles.contatoLinks}>
        <a href={`mailto:santospefelipe@gmail.com`} target="_blank" >
          <img src="/iconEmail.svg" alt="Meu email" /> 
          {"santospefelipe@gmail.com"}
        </a>
        <a href={LINKEDIN_PROFILE_URL} target="_blank" rel="noopener noreferrer">
          <img src="/iconLinkedin.svg" alt="Meu linkedin" />
        </a>
        <a href="https://www.instagram.com/somente_ofelipe/" target="_blank" >
          <img src="/IconIntagram.svg" alt="Meu Intagram" />
        </a>
      </div>
      <p data-testid="contato-copyright">© 2026 Felipe Santos</p>
    </div>
  );
} 