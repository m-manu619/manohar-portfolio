import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useInView, useScroll, useSpring } from 'framer-motion';
import {
  ArrowRight,
  Award,
  Briefcase,
  CheckCircle,
  ChevronUp,
  Code,
  Download,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Send,
  Sparkles,
  X,
} from 'lucide-react';
import './App.css';

import { fadeUp, heroLeft, heroRight } from './animations';
import {
  GITHUB_USERNAME,
  certifications,
  experience,
  marqueeItems,
  navigation,
  projectCategories,
  projects,
  skillLevels,
  skills,
  standoutPoints,
} from './data/portfolio';
import AnimatedCounter from './components/AnimatedCounter';
import ProjectCard from './components/ProjectCard';
import ProjectModal from './components/ProjectModal';
import GravitySandbox from './components/GravitySandbox';
import { ScrollReveal, ScrollZoom } from './components/ScrollAnimation';
import useGitHubRepoCount from './hooks/useGitHubRepoCount';
import resume from './images/Manohar_H_Resume.pdf';

// CSS scroll-driven animations run on the compositor with zero JS;
// fall back to the framer-motion spring bar where unsupported.
const supportsScrollTimeline =
  typeof CSS !== 'undefined' && CSS.supports('animation-timeline: scroll()');

function ScrollProgressFallback() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  return <motion.div className="scroll-progress" style={{ scaleX }} />;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);
  const [formStatus, setFormStatus] = useState('idle');

  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: '-20% 0px' });

  const repoCount = useGitHubRepoCount(GITHUB_USERNAME);
  const stats = [
    { value: '2+', label: 'Years of experience' },
    { value: `${repoCount ?? 12}`, label: 'Public GitHub repositories' },
    { value: '40%', label: 'Deployment improvement delivered' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.15, rootMargin: '-5% 0px -15% 0px' },
    );
    document.querySelectorAll('section[id]').forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handler = () => setShowBackToTop(window.scrollY > 500);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActiveSection(id);
    setMenuOpen(false);
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');

    const payload = {
      access_key: '636609b2-41ab-423c-9b5c-ac3d28f658e3',
      name: contactForm.name,
      email: contactForm.email,
      message: contactForm.message,
      subject: `New Portfolio Inquiry from ${contactForm.name}`,
    };

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.success) {
        setFormStatus('success');
        setContactForm({ name: '', email: '', message: '' });
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    }
  };

  const handleFormChange = (e) =>
    setContactForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const matchesCategory = (p) =>
    selectedCategory === 'All' || p.categories.includes(selectedCategory);
  const activeProjects = projects.filter((p) => !p.inProgress && matchesCategory(p));
  const workingProjects = projects.filter((p) => p.inProgress && matchesCategory(p));

  return (
    <div className="site-shell">
      {supportsScrollTimeline
        ? <div className="scroll-progress scroll-progress-css" />
        : <ScrollProgressFallback />}

      <div className="site-glow site-glow-left" />
      <div className="site-glow site-glow-right" />

      {/* ── Header ── */}
      <header className="topbar">
        <div className="container topbar-inner">
          <button className="brand-mark" onClick={() => scrollToSection('hero')} type="button">
            <span className="brand-mark-accent">MH</span>
            <span className="brand-copy">
              <strong>Manohar H</strong>
              <span>Software Engineer</span>
            </span>
          </button>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {navigation.map((item) => (
              <button
                key={item.id}
                type="button"
                className={activeSection === item.id ? 'nav-link active' : 'nav-link'}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="topbar-actions">
            <a className="button button-secondary" href={resume} download="Manohar_H_Resume.pdf">
              <Download size={16} />
              Resume
            </a>
            <button
              className="menu-button"
              type="button"
              aria-label="Toggle navigation menu"
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="mobile-drawer"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22, ease: 'easeInOut' }}
            >
              {navigation.map((item) => (
                <button key={item.id} type="button" className="mobile-link" onClick={() => scrollToSection(item.id)}>
                  {item.label}
                </button>
              ))}
              <a className="button button-primary mobile-resume" href={resume} download="Manohar_H_Resume.pdf">
                <Download size={16} />
                Download Resume
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        {/* ── Hero ── */}
        <section id="hero" className="hero-section">
          <div className="container hero-grid">
            <motion.div className="hero-copy" variants={heroLeft} initial="hidden" animate="visible">
              <motion.div variants={fadeUp} className="eyebrow">
                <Sparkles size={16} />
                Cloud, backend, and DevOps-focused engineer
              </motion.div>

              <motion.h1 variants={fadeUp}>
                I build cloud systems, reliable APIs, and CI/CD pipelines that ship confidently.
              </motion.h1>

              <motion.p variants={fadeUp} className="hero-summary">
                I design dependable software across cloud infrastructure, backend systems, and
                deployment automation — focused on reliability, speed, and measurable impact.
              </motion.p>

              <motion.div variants={fadeUp} className="hero-actions">
                <button className="button button-primary" type="button" onClick={() => scrollToSection('projects')}>
                  View Projects <ArrowRight size={16} />
                </button>
                <button className="button button-ghost" type="button" onClick={() => scrollToSection('contact')}>
                  Let&apos;s Connect
                </button>
              </motion.div>

              <motion.div variants={fadeUp} className="hero-meta">
                <a href="https://linkedin.com/in/manohar-h/" target="_blank" rel="noreferrer" className="meta-link">
                  <Linkedin size={18} /> LinkedIn
                </a>
                <a href="https://github.com/m-manu619" target="_blank" rel="noreferrer" className="meta-link">
                  <Github size={18} /> GitHub
                </a>
                <a href="mailto:mmanohar619@gmail.com" className="meta-link">
                  <Mail size={18} /> Email
                </a>
              </motion.div>
            </motion.div>

            <motion.aside className="hero-panel" variants={heroRight} initial="hidden" animate="visible">
              <div className="profile-showcase">
                <div className="profile-ring" />
                <div className="profile-frame profile-frame-placeholder">
                  <div className="profile-placeholder-content">
                    <Code size={48} />
                    <span className="profile-placeholder-title">&lt; MANOHAR.DEV &gt;</span>
                    <span className="profile-placeholder-sub">Cloud & DevOps Engineering</span>
                  </div>
                </div>
                <div className="profile-badge">
                  <span>Available for software roles</span>
                </div>
              </div>

              <div className="hero-card hero-card-main">
                <p className="hero-card-label">Current focus</p>
                <h2>Building production-minded cloud and application systems.</h2>
                <ul className="hero-points">
                  <li>AWS environment design and deployment workflows</li>
                  <li>Backend engineering with Java, Python, and Spring Boot</li>
                  <li>CI/CD pipelines, Docker, and infrastructure automation</li>
                </ul>
              </div>

              <div className="stats-grid" ref={statsRef}>
                {stats.map((stat) => (
                  <div key={stat.label} className="stat-card">
                    <strong><AnimatedCounter target={stat.value} trigger={statsInView} /></strong>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
            </motion.aside>
          </div>
        </section>

        {/* ── Marquee strip ── */}
        <div className="marquee-wrap" aria-hidden="true">
          <div className="marquee-track">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className="marquee-item">
                <span className="marquee-star">✦</span>{item}
              </span>
            ))}
          </div>
        </div>

        {/* ── About ── */}
        <section id="about" className="content-section section-accent">
          <div className="container section-layout">
            <ScrollReveal className="section-heading">
              <span className="section-label"><span className="section-label-star">✦</span> About</span>
              <h2>Software engineer bridging cloud infrastructure, backend systems, and DevOps automation.</h2>
            </ScrollReveal>
            <div className="about-grid">
              <ScrollZoom className="panel panel-large">
                <p>
                  I&apos;m a detail-oriented software engineer with experience spanning technical
                  support, cloud implementation, backend development, and delivery automation. I
                  enjoy solving real operational problems and turning complex workflows into simpler,
                  more dependable systems.
                </p>
                <p>
                  My background combines hands-on engineering with stakeholder collaboration, which
                  helps me build solutions that are both technically sound and practical for teams to
                  use and maintain.
                </p>
                <div className="info-list">
                  <div><MapPin size={18} /><span>Hassan, Karnataka, India</span></div>
                  <div><GraduationCap size={18} /><span>B.E. in Computer Science</span></div>
                  <div><Briefcase size={18} /><span>Experience across cloud, support, and software delivery</span></div>
                </div>
              </ScrollZoom>

              <ScrollZoom className="panel">
                <p className="panel-kicker">Why I stand out</p>
                <ul className="check-list">
                  {standoutPoints.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </ScrollZoom>
            </div>
          </div>
        </section>

        {/* ── Experience ── */}
        <section id="experience" className="content-section">
          <div className="container section-layout">
            <ScrollReveal className="section-heading">
              <span className="section-label"><span className="section-label-star">✦</span> Experience</span>
              <h2>Two years of industry experience across AWS, backend engineering, and CI/CD delivery.</h2>
            </ScrollReveal>
            <div className="timeline">
              {experience.map((job) => (
                <ScrollZoom key={`${job.role}-${job.company}`} className="timeline-item panel">
                  <div className="timeline-top">
                    <div>
                      <p className="panel-kicker">{job.company}</p>
                      <h3>{job.role}</h3>
                    </div>
                    <div className="timeline-meta">
                      <span>{job.period}</span>
                      <span>{job.location}</span>
                    </div>
                  </div>
                  <ul className="timeline-list">
                    {job.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </ScrollZoom>
              ))}
            </div>
          </div>
        </section>

        {/* ── Skills ── */}
        <section id="skills" className="content-section">
          <div className="container section-layout">
            <ScrollReveal className="section-heading">
              <span className="section-label"><span className="section-label-star">✦</span> Skills</span>
              <h2>A full-stack toolkit built for cloud-native development and reliable software delivery.</h2>
            </ScrollReveal>

            <div className="skill-legend" aria-hidden="true">
              {skillLevels.map((label, idx) => (
                <span key={label} className="skill-legend-item">
                  <span className="skill-dots">
                    {[0, 1, 2].map((d) => (
                      <span key={d} className={d <= idx ? 'skill-dot skill-dot-filled' : 'skill-dot'} />
                    ))}
                  </span>
                  {label}
                </span>
              ))}
            </div>

            <div className="skills-grid">
              {skills.map((category) => (
                <ScrollZoom key={category.title} className="panel skills-panel">
                  <h3>{category.title}</h3>
                  <div className="skill-items">
                    {category.items.map((skill) => (
                      <div key={skill.name} className="skill-chip">
                        {skill.icon ? (
                          <img src={skill.icon} alt={skill.name} />
                        ) : (
                          <div className="skill-chip-fallback">
                            <skill.FallbackIcon size={20} />
                          </div>
                        )}
                        <div className="skill-chip-info">
                          <span>{skill.name}</span>
                          <div className="skill-dots" aria-label={skillLevels[skill.level - 1]}>
                            {[1, 2, 3].map((d) => (
                              <span key={d} className={d <= skill.level ? 'skill-dot skill-dot-filled' : 'skill-dot'} />
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollZoom>
              ))}
            </div>
          </div>
        </section>

        {/* ── Projects ── */}
        <section id="projects" className="content-section">
          <div className="container section-layout">
            <ScrollReveal className="section-heading">
              <span className="section-label"><span className="section-label-star">✦</span> Projects</span>
              <h2>End-to-end projects spanning AI automation, cloud infrastructure, and DevOps pipelines.</h2>
            </ScrollReveal>

            <div className="filter-tabs">
              {projectCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            {workingProjects.length === 0 && activeProjects.length === 0 && (
              <p className="no-projects-msg">No projects found in this category.</p>
            )}

            {workingProjects.length > 0 && (
              <div className="projects-subsection">
                <h3 className="projects-subsection-title">Currently Working On</h3>
                <div className="projects-grid">
                  {workingProjects.map((project) => (
                    <ProjectCard key={project.title} project={project} onOpen={setActiveModalProject} />
                  ))}
                </div>
              </div>
            )}

            {activeProjects.length > 0 && (
              <div className="projects-subsection">
                <h3 className="projects-subsection-title">Featured Projects</h3>
                <div className="projects-grid">
                  {activeProjects.map((project) => (
                    <ProjectCard key={project.title} project={project} onOpen={setActiveModalProject} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ── Certifications ── */}
        <section id="certifications" className="content-section">
          <div className="container section-layout">
            <ScrollReveal className="section-heading">
              <span className="section-label"><span className="section-label-star">✦</span> Certifications</span>
              <h2>Continuous learning across cloud architecture, machine learning, and data analytics.</h2>
            </ScrollReveal>
            {['cert', 'sim'].map((type) => (
              <div key={type}>
                <h3 className="cert-group-label">
                  {type === 'cert' ? 'Certifications' : 'Job Simulations'}
                </h3>
                <div className="cert-grid">
                  {certifications.filter((c) => c.type === type).map((cert) => (
                    <ScrollZoom key={cert.label} className="panel cert-card">
                      <Award size={20} />
                      <p>{cert.label}</p>
                    </ScrollZoom>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Playground ── */}
        <section id="playground" className="content-section">
          <div className="container section-layout">
            <ScrollReveal className="section-heading">
              <span className="section-label"><span className="section-label-star">✦</span> Playground</span>
              <h2>Fling, throw, and float my tech skills. Experiment with gravity physics.</h2>
            </ScrollReveal>
            <ScrollZoom>
              <GravitySandbox />
            </ScrollZoom>
          </div>
        </section>

        {/* ── Contact ── */}
        <section id="contact" className="content-section content-section-last section-light">
          <div className="container section-layout">
            <ScrollReveal className="section-heading">
              <span className="section-label"><span className="section-label-star">✦</span> Contact</span>
              <h2>Let&apos;s talk — I&apos;m actively looking for software, cloud, and DevOps roles.</h2>
            </ScrollReveal>
            <ScrollZoom className="contact-band">
              <div>
                <p>
                  I&apos;m currently open to full-time roles in software engineering, cloud, or
                  DevOps. Drop me a message — I respond within 24 hours.
                </p>
                {formStatus === 'success' ? (
                  <div className="contact-success-box">
                    <CheckCircle size={36} />
                    <h3>Message Sent!</h3>
                    <p>Thank you for reaching out. Your message has been sent directly to Manohar, and he will get back to you soon.</p>
                  </div>
                ) : (
                  <form className="contact-form" onSubmit={handleContactSubmit}>
                    <div className="form-row">
                      <input className="form-input" name="name" type="text" required placeholder="Your name" value={contactForm.name} onChange={handleFormChange} />
                      <input className="form-input" name="email" type="email" required placeholder="Your email" value={contactForm.email} onChange={handleFormChange} />
                    </div>
                    <textarea className="form-input form-textarea" name="message" required placeholder="Your message…" value={contactForm.message} onChange={handleFormChange} />
                    <div>
                      <button type="submit" className="button button-primary" disabled={formStatus === 'submitting'}>
                        <Send size={16} /> {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                      </button>
                      {formStatus === 'error' && (
                        <span className="form-error-msg">
                          Oops! Something went wrong. Please try again.
                        </span>
                      )}
                    </div>
                  </form>
                )}
              </div>
              <div className="contact-actions">
                <a href="mailto:mmanohar619@gmail.com" className="contact-link"><Mail size={18} /> mmanohar619@gmail.com</a>
                <a href="tel:+918971979534" className="contact-link"><Phone size={18} /> +91 8971979534</a>
                <a href="https://linkedin.com/in/manohar-h/" target="_blank" rel="noreferrer" className="contact-link"><Linkedin size={18} /> LinkedIn Profile</a>
                <a href="https://github.com/m-manu619" target="_blank" rel="noreferrer" className="contact-link"><Github size={18} /> GitHub Portfolio</a>
              </div>
            </ScrollZoom>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="site-footer">
        <div className="container footer-inner">
          <span>© 2026 Manohar H. Built with React &amp; Vite.</span>
          <div className="footer-links">
            <a href="https://linkedin.com/in/manohar-h/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/m-manu619" target="_blank" rel="noreferrer">GitHub</a>
            <a href="mailto:mmanohar619@gmail.com">Email</a>
          </div>
        </div>
      </footer>

      {/* ── Back to top ── */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            className="back-to-top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            initial={{ opacity: 0, scale: 0.75, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.75, y: 10 }}
            transition={{ duration: 0.22 }}
            aria-label="Back to top"
            type="button"
          >
            <ChevronUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* ── Project Detail Modal ── */}
      <AnimatePresence>
        {activeModalProject && (
          <ProjectModal project={activeModalProject} onClose={() => setActiveModalProject(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
