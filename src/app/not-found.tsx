'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import styles from './not-found.module.scss';

export default function NotFound() {
    useEffect(() => {
        gsap.from('.error-content', {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        });
    }, []);

    return (
        <div className={styles.container}>
            <div className={`${styles.content} error-content`}>
                <h2 className={styles.subtitle}>Página não encontrada</h2>
                <p className={styles.description}>
                    Ops! Parece que você se perdeu no espaço digital.
                </p>
                <Link href="/home" className={styles.button}>
                    Voltar para Home
                </Link>
            </div>
        </div>
    );
} 