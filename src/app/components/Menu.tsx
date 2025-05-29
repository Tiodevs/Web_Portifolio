'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import styles from './Menu.module.scss';
import { usePathname } from 'next/navigation';

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();
    const menuItems = [
        { name: 'Home', path: '/' },
        { name: 'Projetos', path: '/projetos' },
        { name: 'Contato', path: '/contato' },
    ];

    useEffect(() => {
        if (menuRef.current) {
            gsap.from(menuRef.current.children, {
                y: -20,
                opacity: 0,
                duration: 0.5,
                stagger: 0.1,
                ease: 'power2.out',
            });
        }
    }, []);

    return (
        <nav className={styles.nav}>
            <div className={styles.menuDesktop} ref={menuRef}>
                {menuItems.map((item) => (
                    <Link
                        key={item.path}
                        href={item.path}
                        className={
                            `${styles.menuItem} ` +
                            (pathname === item.path ? styles.active : '')
                        }
                    >
                        {item.name}
                    </Link>
                ))}
            </div>
        </nav>
    );
};

export default Menu; 