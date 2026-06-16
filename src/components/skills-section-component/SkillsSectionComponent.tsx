import styles from "./SkillsSectionComponent.module.css";

export const SkillsSectionComponent = () => {
    const skillCategories = [
        {
            name: "Languages",
            skills: ["JavaScript", "TypeScript", "Python", "SQL"]
        },
        {
            name: "Frontend",
            skills: ["Next.js", "React", "Redux Toolkit", "Tailwind CSS", "HTML5/CSS3"]
        },
        {
            name: "Backend & Databases",
            skills: ["Node.js", "Django", "Supabase", "PostgreSQL", "MongoDB", "MySQL", "JWT"]
        },
        {
            name: "Cloud, DevOps & Tools",
            skills: ["Firebase Auth", "Google Maps API", "AWS", "Docker", "Hetzner", "Postman", "REST API"]
        },
        {
            name: "Core Competencies",
            skills: [
                "Analytical Thinking",
                "Problem Solving",
                "System Architecture",
                "Reliability & Stability",
                "Critical Thinking",
                "Team Collaboration"
            ]
        }

    ]

  return (
    <section id="skills" className={styles.section}>
      <h2 className={styles.sectionTitle}>
        Technical <span className={styles.goldText}>Stack</span>
      </h2>
      <div className={styles.skillsGrid}>
        {skillCategories.map((cat) => (
          <div key={cat.name} className={styles.categoryCard}>
            <h3 className={styles.categoryName}>{cat.name}</h3>
            <div className={styles.skillList}>
              {cat.skills.map(skill => (
                <span key={skill} className={styles.skillBadge}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
