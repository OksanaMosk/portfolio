"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ThemesButtonComponent from "@/components/themesButtonComponent/ThemesButtonComponent";
import { BurgerMenuComponent } from "@/components/burger-menu-component/BurgerMenuComponent";
import { useActiveSection } from "@/hooks/useActiveSection";
import styles from "./HeaderClientComponent.module.css";

export const HeaderClientComponent = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { href: "#home", id: "home", label: "Home" },
        { href: "#about", id: "about", label: "About" },
        { href: "#projects", id: "projects", label: "Projects" },
        { href: "#skills", id: "skills", label: "Skills" },
        { href: "#contact", id: "contact", label: "Contact" },
    ];

    const activeSection = useActiveSection(menuItems.map(item => item.id));

    const from = "/";

    return (
        <div className={styles.header}>
            <nav className={styles.navbar}>
                <Link href="/" className={styles.logoLink}>
                    <Image
                        src="/fav/android-chrome-512x512.png"
                        alt="logo"
                        width={80}
                        height={80}
                        className={styles.logoImage}
                        loading="eager"
                        style={{ objectFit: "contain" }}
                        priority
                    />
                </Link>

                <ul className={styles.menuList}>
                    {menuItems.map((item) => {
                        const isActive = activeSection === item.id;

                        return (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className={`${styles.navLink} ${isActive ? styles.active : ""}`}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                <div className={styles.rightBlock}>
                    <ThemesButtonComponent />
                </div>

                <button onClick={() => setIsOpen(true)} className={styles.burger}>
                    <div className={styles.burgerLine} />
                    <div className={styles.burgerLine} />
                    <div className={styles.burgerLine} />
                </button>
            </nav>

            <BurgerMenuComponent
                isOpen={isOpen}
                from={from}
                menuItems={menuItems}
                closeMenuAction={() => setIsOpen(false)}
                activeSection={activeSection}

            />
        </div>
    );
};
