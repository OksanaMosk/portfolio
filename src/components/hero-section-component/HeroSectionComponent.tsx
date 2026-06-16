import Link from "next/link";
import styles from "./HeroSectionComponent.module.css";

export const HeroSectionComponent = () => {
    const projectsUrl = "#projects";
    const contactUrl = "#contact";

    return (
        <section id="home" className={styles.section}>
            <h1 className={styles.title}>
                Hi, I&apos;m <span className={styles.goldText}>Oksana</span>
            </h1>
            <p className={styles.description}>
                Fullstack Developer specialized in Next.js, Django, and Supabase.
            </p>
            <div className={styles.buttonGroup}>
                <Link href={projectsUrl} className={styles.goldButton}>View My Work</Link>
                <Link href={contactUrl} className={styles.outlineButton}>Contact Me</Link>
            </div>
        </section>
    )
};
