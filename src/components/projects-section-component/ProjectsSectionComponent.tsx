import {ProjectCardComponent} from "@/components/project-card-component/ProjectCardComponent";
import styles from "./ProjectsSectionComponent.module.css";

export const ProjectsSectionComponent = () => {
    const projects = [
        {
            title: "VIPBoozer",
            liveUrl: "https://vipboozer.duckdns.org",
            githubUrl: "https://github.com/OksanaMosk/Boozer.git",
            description: "Comprehensive nightlife platform featuring Canvas-based table booking, real-time WebSockets chat, integrated business revenue analytics, advanced order lifecycle management, and a multi-step order engine that visualizes complete global travel routes including international flights, airport transfers and venue destinations.",
            tags: ["Next.js", "TypeScript", "Django", "Supabase"],
            video: "/vipboozer.mp4"
        },
        {
            title: "AutoRiaClone",
            liveUrl: "https://autoriaclone.duckdns.org:8443",
            githubUrl: "https://github.com/OksanaMosk/AutoRiaClone.git",
            description: "Advanced automotive marketplace featuring multi-role user dashboards, automated PrivatBank exchange rate conversion, a multi-tier account system, real-time WebSockets messaging, content moderation, view metrics.",
            tags: ["Next.js", "TypeScript", "Django", "Supabase"],
            video: "/auto.mp4"
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
