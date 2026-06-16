import styles from "./ContactSectionComponent.module.css";
import Link from "next/link";

export const ContactSectionComponent = () => (
  <section id="contact" className={styles.section}>
    <h2 className={styles.sectionTitle}>
      Let&apos;s <span className={styles.goldText}>Connect</span>
    </h2>
    <div className={styles.contactContent}>
      <p className={styles.contactText}>
        I am currently open to new opportunities and interesting projects.
        <br/> Whether you have a question or just want to say hi, my inbox is always open!
      </p>
      <div className={styles.links}>
        <Link
          href="https://t.me/Oksana_oks_m3"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.contactButton}
        >
          Telegram
        </Link>
        <Link
          href="https://www.linkedin.com/in/oksanamoskalova/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.contactButton}
        >
          LinkedIn
        </Link>
        <Link
          href="mailto:ksenjap124@gmail.com"
          className={styles.contactButton}
        >
          Email
        </Link>
      </div>
    </div>
  </section>
);
