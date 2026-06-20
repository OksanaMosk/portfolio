"use client"

import Link from "next/link";
import {useState} from "react";
import styles from "./ContactSectionComponent.module.css";

export const ContactSectionComponent = () => {
    const [copied, setCopied] = useState(false);
    const handleCopyEmail = () => {
    void navigator.clipboard.writeText("ksenjap124@gmail.com");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

    return (
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
                    <button
                        onClick={handleCopyEmail}
                        className={styles.contactButton}
                        style={{cursor: 'pointer'}}
                    >
                        {copied ? "Copied! ✓" : "Email"}
                    </button>
                </div>
            </div>
        </section>
    );
}