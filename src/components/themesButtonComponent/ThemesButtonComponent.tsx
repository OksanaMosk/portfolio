"use client"

import { useTheme } from "next-themes";
import {useEffect, useState} from "react";
import styles from "./ThemesButtonComponent.module.css";
import Image from "next/image";

const ThemesButtonComponent = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className={styles.theme}
        >
            <Image
                src={theme === "light" ? "/images/darkButton.png" : "/images/lightButton.png"}
                alt={theme === "light" ? "Dark Theme" : "Light Theme"}
                width={30}
                height={30}
                priority
                unoptimized
                className={
                    theme === "light"
                        ? styles.themeImageLight
                        : styles.themeImageDark
                }
            />
        </button>
    );
};

export default ThemesButtonComponent;