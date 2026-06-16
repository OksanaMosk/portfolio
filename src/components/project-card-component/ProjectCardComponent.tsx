import Image from "next/image";
import styles from "./ProjectCardComponent.module.css";

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
}

export const ProjectCardComponent = ({ title, description, tags, image }: ProjectProps) => (
  <article className={styles.card}>
    <div className={styles.imageWrapper}>
      <div className={styles.imagePlaceholder}>{image}</div>
      {/* Потім зам на <Image src={image} ... /> */}
    </div>
    <div className={styles.cardContent}>
      <h3 className={styles.projectTitle}>{title}</h3>
      <p className={styles.projectDescription}>{description}</p>
      <div className={styles.tagList}>
        {tags.map((tag) => (
          <span key={tag} className={styles.tag}>{tag}</span>
        ))}
      </div>
    </div>
  </article>
);
