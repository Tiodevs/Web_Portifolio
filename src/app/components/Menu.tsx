'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import styles from './Menu.module.scss';
import gsap from 'gsap';
import { usePathname } from 'next/navigation';

export function Menu() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();
    
    const menuItems = [
        { name: 'Home', path: '/home' },
        { name: 'Projetos', path: '/projetos' },
        { name: 'Curriculo', path: '/cv25.pdf' },
    ];

    useEffect(() => {
        // Animação simples: menu desliza de cima para baixo
        gsap.from(menuRef.current, {
            y: -50,
            opacity: 0,
            duration: 1,
            ease: "power2.out"
        });
    }, []);

    return (
        <nav ref={menuRef} className={styles.nav}>
            <div className={styles.menuDesktop}>
                {menuItems.map((item) => (
                    <Link
                        key={item.path}
                        href={item.path}
                        className={
                            `${styles.menuItem} ` +
                            (pathname.startsWith(item.path) ? styles.active : '')
                        }
                    >
                        {item.name}
                    </Link>
                ))}
            </div>
            <button
                className={`${styles.menuButton} ${isOpen ? styles.open : ''}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Abrir menu"
            >
                <span className={styles.hamburger}></span>
                <span className={styles.hamburger}></span>
            </button>
            {isOpen && (
                <div className={styles.menuMobile}>
                    {menuItems.map((item) => (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={styles.menuItem}
                            onClick={() => setIsOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
}
