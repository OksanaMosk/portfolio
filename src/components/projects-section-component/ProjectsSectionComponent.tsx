
import styles from "./ProjectsSectionComponent.module.css";
import {ProjectCardComponent} from "@/components/project-card-component/ProjectCardComponent";

export const ProjectsSectionComponent = () => {
  const projects = [
   {
    "title": "VIPBoozer",
    "description": "Comprehensive nightlife platform featuring Canvas-based table booking, real-time WebSockets chat, and a multi-step order engine that visualizes complete global travel routes including international flights, airport transfers, and venue destinations.",
    "tags": ["Next.js", "TypeScript", "Django", "Supabase"],
    "image": "VIPBoozer Preview"
  },
  {
    "title": "AutoRiaClone",
    "description": "Advanced automotive marketplace featuring multi-role user dashboards, automated PrivatBank exchange rate conversion, a multi-tier account system, real-time WebSockets messaging, content moderation, and premium analytics charts.",
    "tags": ["Next.js", "TypeScript", "Django", "Supabase"],
    "image": "AutoRiaClone Preview"
  }
  ];

  return (
    <section id="projects" className={styles.section}>
      <h2 className={styles.sectionTitle}>Featured Projects</h2>
      <div className={styles.projectsGrid}>
        {projects.map((project) => (
          <ProjectCardComponent key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};
