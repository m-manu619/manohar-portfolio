import { ExternalLink, Github, Sparkles } from 'lucide-react';
import { ScrollZoom } from './ScrollAnimation';

function ProjectCard({ project, onOpen }) {
  return (
    <ScrollZoom className="project-card">
      <button
        type="button"
        className="project-visual"
        onClick={() => onOpen(project)}
        aria-label={`View details for ${project.title}`}
      >
        <img src={project.image} alt={project.title} loading="lazy" decoding="async" />
        <div className="project-image-overlay">
          <span className="overlay-cta">
            View Details <Sparkles size={14} />
          </span>
        </div>
      </button>

      <div className="project-body">
        <p className={`panel-kicker ${project.inProgress ? 'kicker-in-progress' : ''}`}>
          {project.inProgress ? 'Currently working on' : 'Featured Project'}
        </p>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="impact-box">{project.impact}</div>
        <div className="tag-row">
          {project.tech.map((item) => <span key={item} className="tag">{item}</span>)}
        </div>
        <div className="project-actions">
          <button type="button" className="button button-primary" onClick={() => onOpen(project)}>
            Details
          </button>
          <a href={project.github} target="_blank" rel="noreferrer" className="button button-secondary">
            <Github size={16} /> Code
          </a>
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer" className="button button-ghost">
              <ExternalLink size={16} /> Demo
            </a>
          )}
        </div>
      </div>
    </ScrollZoom>
  );
}

export default ProjectCard;
