import { useEffect, useRef, useState } from 'react';
import {
  AnimatePresence,
  motion,
  useInView,
  useScroll,
  useSpring,
} from 'framer-motion';
import {
  ArrowRight,
  Award,
  Briefcase,
  CheckCircle,
  ChevronUp,
  Download,
  ExternalLink,
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

import aiResumeImage from './images/AI-Powered Resume Screening Tool.jpeg';
import cloudFileImage from './images/Cloud File Management System.jpeg';
import flaskCicdImage from './images/Flask App CICD Pipeline on AWS.jpeg';
import terraformImage from './images/Terraform AWS Infrastructure.jpeg';
import profilePhoto from './images/Manohar Photo.jpg';

import javaIcon from './images/icons8-java-48.png';
import pythonIcon from './images/icons8-python-48.png';
import htmlIcon from './images/icons8-html5-48.png';
import cssIcon from './images/icons8-css3-48.png';
import javascriptIcon from './images/icons8-javascript-48.png';
import reactIcon from './images/icons8-react-80.png';
import mysqlIcon from './images/icons8-mysql-48.png';
import postgresqlIcon from './images/icons8-postgresql-50.png';
import gitIcon from './images/icons8-git-48.png';
import githubIcon from './images/icons8-github-48.png';
import awsIcon from './images/icons8-aws-48.png';
import dockerIcon from './images/icons8-docker-48.png';
import jenkinsIcon from './images/icons8-jenkins-48.png';
import terraformIcon from './images/icons8-terraform-48.png';
import springbootIcon from './images/icons8-spring-boot-48.png';
import resume from './images/Manohar H Resume (Wing AI).pdf';

// ── Animation variants ──────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.44, ease: [0.25, 0.1, 0.25, 1] } },
};

const heroLeft = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1], staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const heroRight = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 },
  },
};

// ── Animated counter ────────────────────────────────────────────────────────

function AnimatedCounter({ target, trigger }) {
  const [value, setValue] = useState(0);
  const suffix = target.replace(/\d/g, '');
  const numeric = parseInt(target, 10);

  useEffect(() => {
    if (!trigger) return;
    let startTs = null;
    const duration = 1600;

    const tick = (ts) => {
      if (!startTs) startTs = ts;
      const p = Math.min((ts - startTs) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(eased * numeric));
      if (p < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [trigger, numeric]);

  return <>{value}{suffix}</>;
}

// ── Data ────────────────────────────────────────────────────────────────────

const navigation = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

// level: 1 = Intermediate · 2 = Advanced · 3 = Expert
const skills = [
  {
    title: 'Programming',
    items: [
      { name: 'Java',   icon: javaIcon,   level: 2 },
      { name: 'Python', icon: pythonIcon, level: 2 },
    ],
  },
  {
    title: 'Frontend',
    items: [
      { name: 'HTML',       icon: htmlIcon,       level: 3 },
      { name: 'CSS',        icon: cssIcon,        level: 3 },
      { name: 'JavaScript', icon: javascriptIcon, level: 3 },
      { name: 'React',      icon: reactIcon,      level: 2 },
    ],
  },
  {
    title: 'Backend & Data',
    items: [
      { name: 'Spring Boot', icon: springbootIcon, level: 2 },
      { name: 'MySQL',       icon: mysqlIcon,      level: 2 },
      { name: 'PostgreSQL',  icon: postgresqlIcon, level: 2 },
    ],
  },
  {
    title: 'Cloud & DevOps',
    items: [
      { name: 'AWS',       icon: awsIcon,       level: 3 },
      { name: 'Docker',    icon: dockerIcon,    level: 3 },
      { name: 'Jenkins',   icon: jenkinsIcon,   level: 2 },
      { name: 'Terraform', icon: terraformIcon, level: 2 },
      { name: 'Git',       icon: gitIcon,       level: 3 },
      { name: 'GitHub',    icon: githubIcon,    level: 3 },
    ],
  },
];

const projects = [
  {
    title: 'AI-Powered Resume Screening Tool',
    description:
      'Built an automated screening workflow using NLP and machine learning to speed up candidate shortlisting and improve recruiter efficiency.',
    impact: 'Reduced shortlisting effort by 50% with scalable AWS-backed processing.',
    tech: ['Python', 'AWS', 'NLP', 'Machine Learning', 'Scikit-learn'],
    image: aiResumeImage,
    github: 'https://github.com/m-manu619/AI-Powered-Resume-Screening-and-Job-Matching-Tool',
    demo: null,
  },
  {
    title: 'Cloud File Management System',
    description:
      'Created a secure cloud file platform with access control, dependable storage workflows, and a user-friendly interface for file operations.',
    impact: 'Improved usability while supporting secure storage and efficient file handling.',
    tech: ['React', 'Spring Boot', 'AWS S3', 'IAM', 'Docker'],
    image: cloudFileImage,
    github: 'https://github.com/m-manu619/Cloud_File_Management_System',
    demo: null,
  },
  {
    title: 'Flask App CI/CD Pipeline on AWS',
    description:
      'Automated Flask deployments with containerisation and pipeline orchestration to make releases faster, safer, and easier to repeat.',
    impact: 'Streamlined deployment flow with AWS services and container-based delivery.',
    tech: ['Flask', 'Docker', 'AWS CodePipeline', 'ECS', 'GitHub Actions'],
    image: flaskCicdImage,
    github: 'https://github.com/m-manu619/Flask-App-CI-CD-Pipeline-on-AWS-using-CodePipeline-ECS-and-Docker',
    demo: null,
  },
  {
    title: 'Terraform AWS Infrastructure',
    description:
      'Provisioned AWS infrastructure with Infrastructure as Code, focusing on repeatability, scalability, and cleaner environment setup.',
    impact: 'Enabled reusable infrastructure patterns and more controlled cloud provisioning.',
    tech: ['Terraform', 'AWS', 'IaC', 'DevOps', 'Automation'],
    image: terraformImage,
    github: 'https://github.com/m-manu619/terraform-aws-project',
    demo: null,
  },
];

const experience = [
  {
    role: 'AWS Solution Architect and DevOps Intern',
    company: 'Micro Degree',
    location: 'Bengaluru, India',
    period: 'February 2024 – July 2024',
    highlights: [
      'Designed and deployed AWS environments using EC2, S3, and IAM for practical cloud solutions.',
      'Improved deployment speed by 40% through CI/CD pipelines built with Jenkins and Docker.',
      'Monitored and optimised cloud resources using CloudWatch to support stable operations.',
    ],
  },
  {
    role: 'Project Engineer',
    company: 'Wipro Technologies',
    location: 'Bengaluru, India',
    period: 'February 2022 – March 2023',
    highlights: [
      'Supported production systems and resolved technical issues to keep platform operations smooth.',
      'Built Spring Boot applications that improved response time and overall system efficiency.',
      'Worked across teams to identify root causes, improve reliability, and streamline workflows.',
    ],
  },
];

const certifications = [
  'AWS Solution Architect and DevOps | Micro Degree',
  'Machine Learning Using Python | Inventeron Technologies',
  'Goldman Sachs Excel Skills for Business Job Simulation | Forage',
  'PwC Switzerland Power BI Job Simulation | Forage',
  'Verizon Cloud Platform Job Simulation | Forage',
];

const stats = [
  { value: '2+', label: 'Years of experience' },
  { value: '4', label: 'Featured technical projects' },
  { value: '40%', label: 'Deployment improvement delivered' },
];

// ── Component ───────────────────────────────────────────────────────────────

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [formSent, setFormSent] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: '-20% 0px' });

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

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = contactForm;
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`From: ${name} <${email}>\n\n${message}`);
    window.open(`mailto:mmanohar619@gmail.com?subject=${subject}&body=${body}`, '_blank');
    setFormSent(true);
    setContactForm({ name: '', email: '', message: '' });
    setTimeout(() => setFormSent(false), 5000);
  };

  const handleFormChange = (e) =>
    setContactForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  return (
    <div className="site-shell">
      <motion.div className="scroll-progress" style={{ scaleX }} />

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
                <div className="profile-frame">
                  <img src={profilePhoto} alt="Portrait of Manohar H" className="profile-photo" fetchpriority="high" decoding="async" />
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

        {/* ── About ── */}
        <section id="about" className="content-section">
          <motion.div className="container section-layout" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-10%' }}>
            <motion.div variants={fadeUp} className="section-heading">
              <span>About</span>
              <h2>Software engineer bridging cloud infrastructure, backend systems, and DevOps automation.</h2>
            </motion.div>
            <div className="about-grid">
              <motion.article variants={staggerItem} className="panel panel-large">
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
              </motion.article>

              <motion.aside variants={staggerItem} className="panel">
                <p className="panel-kicker">Why I stand out</p>
                <motion.ul className="check-list" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  {[
                    'Strong blend of engineering execution and operational thinking',
                    'Comfortable with both application work and infrastructure automation',
                    'Focused on measurable improvements, not just implementation',
                    'Professional presentation with practical project depth',
                  ].map((item) => (
                    <motion.li key={item} variants={staggerItem}>{item}</motion.li>
                  ))}
                </motion.ul>
              </motion.aside>
            </div>
          </motion.div>
        </section>

        {/* ── Experience ── */}
        <section id="experience" className="content-section">
          <motion.div className="container section-layout" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-10%' }}>
            <motion.div variants={fadeUp} className="section-heading">
              <span>Experience</span>
              <h2>Two years of industry experience across AWS, backend engineering, and CI/CD delivery.</h2>
            </motion.div>
            <div className="timeline">
              {experience.map((job) => (
                <motion.article key={`${job.role}-${job.company}`} variants={staggerItem} className="timeline-item panel">
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
                  <motion.ul className="timeline-list" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    {job.highlights.map((highlight) => (
                      <motion.li key={highlight} variants={staggerItem}>{highlight}</motion.li>
                    ))}
                  </motion.ul>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── Skills ── */}
        <section id="skills" className="content-section">
          <motion.div className="container section-layout" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-10%' }}>
            <motion.div variants={fadeUp} className="section-heading">
              <span>Skills</span>
              <h2>A full-stack toolkit built for cloud-native development and reliable software delivery.</h2>
            </motion.div>
            <motion.div variants={staggerContainer} className="skills-grid">
              {skills.map((category) => (
                <motion.article key={category.title} variants={staggerItem} className="panel skills-panel">
                  <h3>{category.title}</h3>
                  <motion.div className="skill-items" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    {category.items.map((skill) => (
                      <motion.div key={skill.name} variants={staggerItem} className="skill-chip">
                        <img src={skill.icon} alt={skill.name} />
                        <div className="skill-chip-info">
                          <span>{skill.name}</span>
                          <div className="skill-dots" aria-label={['Intermediate','Advanced','Expert'][skill.level - 1]}>
                            {[1, 2, 3].map((d) => (
                              <span key={d} className={d <= skill.level ? 'skill-dot skill-dot-filled' : 'skill-dot'} />
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.article>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* ── Projects ── */}
        <section id="projects" className="content-section">
          <motion.div className="container section-layout" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-10%' }}>
            <motion.div variants={fadeUp} className="section-heading">
              <span>Projects</span>
              <h2>End-to-end projects spanning AI automation, cloud infrastructure, and DevOps pipelines.</h2>
            </motion.div>
            <div className="projects-grid">
              {projects.map((project) => (
                <motion.article key={project.title} variants={staggerItem} className="project-card">
                  <a href={project.github} target="_blank" rel="noreferrer" className="project-visual" aria-label={`View ${project.title} on GitHub`}>
                    <img src={project.image} alt={project.title} loading="lazy" decoding="async" />
                    <div className="project-image-overlay">
                      <span>View on GitHub <ExternalLink size={14} /></span>
                    </div>
                  </a>
                  <div className="project-body">
                    <p className="panel-kicker">Featured Project</p>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="impact-box">{project.impact}</div>
                    <div className="tag-row">
                      {project.tech.map((item) => <span key={item} className="tag">{item}</span>)}
                    </div>
                    <div className="project-actions">
                      <a href={project.github} target="_blank" rel="noreferrer" className="button button-secondary">
                        <Github size={16} /> View Code
                      </a>
                      {project.demo && (
                        <a href={project.demo} target="_blank" rel="noreferrer" className="button button-ghost">
                          <ExternalLink size={16} /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── Certifications ── */}
        <section id="certifications" className="content-section">
          <motion.div className="container section-layout" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-10%' }}>
            <motion.div variants={fadeUp} className="section-heading">
              <span>Certifications</span>
              <h2>Continuous learning across cloud architecture, machine learning, and data analytics.</h2>
            </motion.div>
            <motion.div variants={staggerContainer} className="cert-grid">
              {certifications.map((cert) => (
                <motion.article key={cert} variants={staggerItem} className="panel cert-card">
                  <Award size={20} />
                  <p>{cert}</p>
                </motion.article>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* ── Contact ── */}
        <section id="contact" className="content-section content-section-last">
          <motion.div className="container section-layout" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-10%' }}>
            <motion.div variants={fadeUp} className="section-heading">
              <span>Contact</span>
              <h2>Let&apos;s talk — I&apos;m actively looking for software, cloud, and DevOps roles.</h2>
            </motion.div>
            <motion.div variants={staggerItem} className="contact-band">
              <div>
                <p>
                  I&apos;m currently open to full-time roles in software engineering, cloud, or
                  DevOps. Drop me a message — I respond within 24 hours.
                </p>
                <form className="contact-form" onSubmit={handleContactSubmit}>
                  <div className="form-row">
                    <input className="form-input" name="name" type="text" required placeholder="Your name" value={contactForm.name} onChange={handleFormChange} />
                    <input className="form-input" name="email" type="email" required placeholder="Your email" value={contactForm.email} onChange={handleFormChange} />
                  </div>
                  <textarea className="form-input form-textarea" name="message" required placeholder="Your message…" value={contactForm.message} onChange={handleFormChange} />
                  <div>
                    <button type="submit" className="button button-primary">
                      <Send size={16} /> Send Message
                    </button>
                    <AnimatePresence>
                      {formSent && (
                        <motion.span className="form-sent-msg" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} style={{ display: 'inline-flex', marginLeft: '1rem' }}>
                          <CheckCircle size={16} /> Opening your email client…
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>
                </form>
              </div>
              <div className="contact-actions">
                <a href="mailto:mmanohar619@gmail.com" className="contact-link"><Mail size={18} /> mmanohar619@gmail.com</a>
                <a href="tel:+918971979534" className="contact-link"><Phone size={18} /> +91 8971979534</a>
                <a href="https://linkedin.com/in/manohar-h/" target="_blank" rel="noreferrer" className="contact-link"><Linkedin size={18} /> LinkedIn Profile</a>
                <a href="https://github.com/m-manu619" target="_blank" rel="noreferrer" className="contact-link"><Github size={18} /> GitHub Portfolio</a>
              </div>
            </motion.div>
          </motion.div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="site-footer">
        <div className="container footer-inner">
          <span>© 2025 Manohar H. Built with React &amp; Vite.</span>
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
    </div>
  );
}

export default App;
