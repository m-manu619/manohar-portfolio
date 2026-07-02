import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, ExternalLink, Github, X } from 'lucide-react';

function ProjectModal({ project, onClose }) {
  const closeButtonRef = useRef(null);

  // Escape key closes; body scroll locked while open; focus moves into dialog
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="modal-wrapper"
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        initial={{ scale: 0.9, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.9, y: 20, opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 220 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          ref={closeButtonRef}
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <img src={project.image} alt={project.title} className="modal-image" />

        <div className="modal-body">
          <div className="modal-header">
            <span className={`panel-kicker ${project.inProgress ? 'kicker-in-progress' : ''}`}>
              {project.inProgress ? 'Currently working on' : 'Featured Project'}
            </span>
            <h2>{project.title}</h2>
            <div className="tag-row">
              {project.tech.map((t) => <span key={t} className="tag">{t}</span>)}
            </div>
          </div>

          <div className="modal-section-title">Overview</div>
          <p className="modal-description">{project.description}</p>

          {project.architecture && (
            <>
              <div className="modal-section-title">Architecture</div>
              <div className="arch-flow" aria-label="Architecture flow">
                {project.architecture.map((step, idx) => (
                  <span key={step} className="arch-step-wrap">
                    <span className="arch-step">{step}</span>
                    {idx < project.architecture.length - 1 && (
                      <ArrowRight size={14} className="arch-arrow" aria-hidden="true" />
                    )}
                  </span>
                ))}
              </div>
            </>
          )}

          {project.details && (
            <>
              <div className="modal-section-title">Key Technical Details</div>
              <ul className="modal-highlights">
                {project.details.map((d) => (
                  <li key={d}>
                    <CheckCircle size={16} />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </>
          )}

          <div className="modal-footer">
            <a href={project.github} target="_blank" rel="noreferrer" className="button button-primary">
              <Github size={16} /> View Repository
            </a>
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noreferrer" className="button button-secondary">
                <ExternalLink size={16} /> Live Demo
              </a>
            )}
            <button type="button" className="button button-ghost" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default ProjectModal;
