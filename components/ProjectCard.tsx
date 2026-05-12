import Image from "next/image";

import { Project } from "@/types";

import styles from "@/styles/ProjectCard.module.css";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.card}
    >
      <div className={styles.content}>
        <div className={styles.lynsection}>
          
            <div className={styles.logoWrapper}>
              <Image
                src={project.logo}
                alt={`${project.title} logo`}
                width={30}
                height={30}
                className={styles.logo}
              />
            </div>

            <span className={styles.number}>
              {String(index).padStart(2, "0")}
            </span>
          </div>
        
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
      </div>
    </a>
  );
};

export default ProjectCard;
