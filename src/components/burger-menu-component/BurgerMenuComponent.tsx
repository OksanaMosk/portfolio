"use client"

import Link from "next/link";
import type { FC } from "react";
import ThemesButtonComponent from "@/components/themesButtonComponent/ThemesButtonComponent";
import styles from "./BurgerMenuComponent.module.css";

type BurgerMenuProps = {
    isOpen: boolean;
    from: string;
    closeMenuAction: () => void;
    menuItems: { href: string; label: string; id: string }[];
    activeSection: string;
};

export const BurgerMenuComponent: FC<BurgerMenuProps> = ({
                                                             isOpen,
                                                             menuItems,
                                                             closeMenuAction,
                                                             activeSection,
                                                         }) => {
    if (!isOpen) return null;

    return (
        <nav className={`burgerMenu ${styles.burgerMenu}`}>
            <button onClick={closeMenuAction} className={styles.closeBtn} aria-label="Close menu">
                ×
            </button>
            <ThemesButtonComponent/>
            <ul className={styles.burgerMenuList}>
                {menuItems.map((item) => {
                    const isActive = activeSection === item.id;
                    return (
                    <li key={item.href}>
                        <Link
                            href={item.href}
                            onClick={closeMenuAction}
                             className={`${styles.burgerLink} ${isActive ? styles.active : ""}`}
                        >
                            {item.label}
                        </Link>
                    </li>)
            })}
            </ul>
        </nav>
    );
};