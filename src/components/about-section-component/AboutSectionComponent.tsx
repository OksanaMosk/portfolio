import styles from "./AboutSectionComponent.module.css";
import  Image from "next/image"
export const AboutSectionComponent = () => (
  <section id="about" className={styles.section}>
      <h2 className={styles.sectionTitle}>About Me</h2>
      <div className={styles.aboutGrid}>
          <div className={styles.textContent}>
              <p className={styles.text}>
                  I am an entry-level Full-Stack Developer focused on the <strong>Next.js (TypeScript) & Django (Python)</strong> stack.
                  I have practical experience building complex web applications and SaaS systems from concept to
                  implementation.<br/>My approach is rooted in a systemic view of development: I design clean API
                  architectures, work with <strong>WebSockets</strong> for real-time features, and integrate geodata and databases
                  <strong> (PostgreSQL/MongoDB)</strong>.<br/>My strengths are analytical thinking and a passion for building stable,
                  efficient solutions based on <strong>DRY</strong> principles.I am looking for my first commercial projects or a team
                  position where I can solve interesting technical challenges aligned with business logic.
              </p>
          </div>
          <div className={styles.photoPlaceholder}>
           <Image
                  src="/images/33.png"
                  alt="Full-Stack Developer Avatar"
                  className={styles.avatar}
                  width={250}
                  height={400}
                  priority
              />
          </div>
      </div>
  </section>
);
