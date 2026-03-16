import { useEffect, useState } from 'react';
import {
  ArrowRight,
  Award,
  Briefcase,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
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
import viteIcon from './images/icons8-vite-48.png';
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

const navigation = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

const skills = [
  {
    title: 'Programming',
    items: [
      { name: 'Java', icon: javaIcon },
      { name: 'Python', icon: pythonIcon },
    ],
  },
  {
    title: 'Frontend',
    items: [
      { name: 'HTML', icon: htmlIcon },
      { name: 'CSS', icon: cssIcon },
      { name: 'JavaScript', icon: javascriptIcon },
      { name: 'React', icon: reactIcon },
      { name: 'Vite', icon: viteIcon },
    ],
  },
  {
    title: 'Backend & Data',
    items: [
      { name: 'Spring Boot', icon: springbootIcon },
      { name: 'MySQL', icon: mysqlIcon },
      { name: 'PostgreSQL', icon: postgresqlIcon },
    ],
  },
  {
    title: 'Cloud & DevOps',
    items: [
      { name: 'AWS', icon: awsIcon },
      { name: 'Docker', icon: dockerIcon },
      { name: 'Jenkins', icon: jenkinsIcon },
      { name: 'Terraform', icon: terraformIcon },
      { name: 'Git', icon: gitIcon },
      { name: 'GitHub', icon: githubIcon },
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
  },
  {
    title: 'Cloud File Management System',
    description:
      'Created a secure cloud file platform with access control, dependable storage workflows, and a user-friendly interface for file operations.',
    impact: 'Improved usability while supporting secure storage and efficient file handling.',
    tech: ['React', 'Spring Boot', 'AWS S3', 'IAM', 'Docker'],
    image: cloudFileImage,
    github: 'https://github.com/m-manu619/Cloud_File_Management_System',
  },
  {
    title: 'Flask App CI/CD Pipeline on AWS',
    description:
      'Automated Flask deployments with containerization and pipeline orchestration to make releases faster, safer, and easier to repeat.',
    impact: 'Streamlined deployment flow with AWS services and container-based delivery.',
    tech: ['Flask', 'Docker', 'AWS CodePipeline', 'ECS', 'GitHub Actions'],
    image: flaskCicdImage,
    github: 'https://github.com/m-manu619/Flask-App-CI-CD-Pipeline-on-AWS-using-CodePipeline-ECS-and-Docker',
  },
  {
    title: 'Terraform AWS Infrastructure',
    description:
      'Provisioned AWS infrastructure with Infrastructure as Code, focusing on repeatability, scalability, and cleaner environment setup.',
    impact: 'Enabled reusable infrastructure patterns and more controlled cloud provisioning.',
    tech: ['Terraform', 'AWS', 'IaC', 'DevOps', 'Automation'],
    image: terraformImage,
    github: 'https://github.com/m-manu619/terraform-aws-project',
  },
];

const experience = [
  {
    role: 'AWS Solution Architect and DevOps Intern',
    company: 'Micro Degree',
    location: 'Bengaluru, India',
    period: 'February 2024 - July 2024',
    highlights: [
      'Designed and deployed AWS environments using EC2, S3, and IAM for practical cloud solutions.',
      'Improved deployment speed by 40% through CI/CD pipelines built with Jenkins and Docker.',
      'Monitored and optimized cloud resources using CloudWatch to support stable operations.',
    ],
  },
  {
    role: 'Project Engineer',
    company: 'Wipro Technologies',
    location: 'Bengaluru, India',
    period: 'February 2022 - March 2023',
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

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [visibleSections, setVisibleSections] = useState({ hero: true, about: true });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            setVisibleSections((current) => ({
              ...current,
              [entry.target.id]: true,
            }));
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '-5% 0px -15% 0px',
      },
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    setActiveSection(sectionId);
    setVisibleSections((current) => ({
      ...current,
      [sectionId]: true,
    }));
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMenuOpen(false);
  };

  return (
    <div className="site-shell">
      <div className="site-glow site-glow-left" />
      <div className="site-glow site-glow-right" />

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
              onClick={() => setMenuOpen((value) => !value)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        <div className={menuOpen ? 'mobile-drawer open' : 'mobile-drawer'}>
          {navigation.map((item) => (
            <button key={item.id} type="button" className="mobile-link" onClick={() => scrollToSection(item.id)}>
              {item.label}
            </button>
          ))}
          <a className="button button-primary mobile-resume" href={resume} download="Manohar_H_Resume.pdf">
            <Download size={16} />
            Download Resume
          </a>
        </div>
      </header>

      <main>
        <section id="hero" className="hero-section">
          <div className="container hero-grid">
            <div className={visibleSections.hero ? 'hero-copy section-reveal is-visible' : 'hero-copy section-reveal'}>
              <div className="eyebrow">
                <Sparkles size={16} />
                Cloud, backend, and DevOps-focused engineer
              </div>
              <h1>Professional software portfolio built to feel sharp, credible, and hiring-ready.</h1>
              <p className="hero-summary">
                I build dependable software experiences across cloud infrastructure, backend systems, and deployment
                automation. My focus is practical engineering that improves reliability, speed, and user experience.
              </p>

              <div className="hero-actions">
                <button className="button button-primary" type="button" onClick={() => scrollToSection('projects')}>
                  View Projects
                  <ArrowRight size={16} />
                </button>
                <button className="button button-ghost" type="button" onClick={() => scrollToSection('contact')}>
                  Let&apos;s Connect
                </button>
              </div>

              <div className="hero-meta">
                <a href="https://linkedin.com/in/manohar-h/" target="_blank" rel="noreferrer" className="meta-link">
                  <Linkedin size={18} />
                  LinkedIn
                </a>
                <a href="https://github.com/m-manu619" target="_blank" rel="noreferrer" className="meta-link">
                  <Github size={18} />
                  GitHub
                </a>
                <a href="mailto:mmanohar619@gmail.com" className="meta-link">
                  <Mail size={18} />
                  Email
                </a>
              </div>
            </div>

            <aside className={visibleSections.hero ? 'hero-panel section-reveal is-visible' : 'hero-panel section-reveal'}>
              <div className="profile-showcase">
                <div className="profile-ring" />
                <div className="profile-frame">
                  <img src={profilePhoto} alt="Portrait of Manohar H" className="profile-photo" />
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

              <div className="stats-grid">
                {stats.map((stat) => (
                  <div key={stat.label} className="stat-card">
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <section id="about" className="content-section">
          <div className={visibleSections.about ? 'container section-layout section-reveal is-visible' : 'container section-layout section-reveal'}>
            <div className="section-heading">
              <span>About</span>
              <h2>Clear technical profile with a professional, grounded story.</h2>
            </div>

            <div className="about-grid">
              <article className="panel panel-large">
                <p>
                  I&apos;m a detail-oriented software engineer with experience spanning technical support, cloud
                  implementation, backend development, and delivery automation. I enjoy solving real operational
                  problems and turning complex workflows into simpler, more dependable systems.
                </p>
                <p>
                  My background combines hands-on engineering with stakeholder collaboration, which helps me build
                  solutions that are both technically sound and practical for teams to use and maintain.
                </p>

                <div className="info-list">
                  <div>
                    <MapPin size={18} />
                    <span>Hassan, Karnataka, India</span>
                  </div>
                  <div>
                    <GraduationCap size={18} />
                    <span>B.E. in Computer Science</span>
                  </div>
                  <div>
                    <Briefcase size={18} />
                    <span>Experience across cloud, support, and software delivery</span>
                  </div>
                </div>
              </article>

              <aside className="panel">
                <p className="panel-kicker">Why I stand out</p>
                <ul className="check-list">
                  <li>Strong blend of engineering execution and operational thinking</li>
                  <li>Comfortable with both application work and infrastructure automation</li>
                  <li>Focused on measurable improvements, not just implementation</li>
                  <li>Professional presentation with practical project depth</li>
                </ul>
              </aside>
            </div>
          </div>
        </section>

        <section id="experience" className="content-section">
          <div className={visibleSections.experience ? 'container section-layout section-reveal is-visible' : 'container section-layout section-reveal'}>
            <div className="section-heading">
              <span>Experience</span>
              <h2>Work that shows delivery, ownership, and technical maturity.</h2>
            </div>

            <div className="timeline">
              {experience.map((job) => (
                <article key={`${job.role}-${job.company}`} className="timeline-item panel">
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
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="content-section">
          <div className={visibleSections.skills ? 'container section-layout section-reveal is-visible' : 'container section-layout section-reveal'}>
            <div className="section-heading">
              <span>Skills</span>
              <h2>Balanced stack across software engineering, cloud, and delivery tooling.</h2>
            </div>

            <div className="skills-grid">
              {skills.map((category) => (
                <article key={category.title} className="panel skills-panel">
                  <h3>{category.title}</h3>
                  <div className="skill-items">
                    {category.items.map((skill) => (
                      <div key={skill.name} className="skill-chip">
                        <img src={skill.icon} alt={skill.name} />
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="content-section">
          <div className={visibleSections.projects ? 'container section-layout section-reveal is-visible' : 'container section-layout section-reveal'}>
            <div className="section-heading">
              <span>Projects</span>
              <h2>Featured work presented like case studies, not just repo links.</h2>
            </div>

            <div className="projects-grid">
              {projects.map((project) => (
                <article key={project.title} className="project-card">
                  <div className="project-visual">
                    <img src={project.image} alt={project.title} />
                  </div>
                  <div className="project-body">
                    <p className="panel-kicker">Featured Project</p>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="impact-box">{project.impact}</div>
                    <div className="tag-row">
                      {project.tech.map((item) => (
                        <span key={item} className="tag">
                          {item}
                        </span>
                      ))}
                    </div>
                    <div className="project-actions">
                      <a href={project.github} target="_blank" rel="noreferrer" className="button button-secondary">
                        <Github size={16} />
                        View Code
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="certifications" className="content-section">
          <div className={visibleSections.certifications ? 'container section-layout section-reveal is-visible' : 'container section-layout section-reveal'}>
            <div className="section-heading">
              <span>Certifications</span>
              <h2>Additional signals that support the core engineering profile.</h2>
            </div>

            <div className="cert-grid">
              {certifications.map((certification) => (
                <article key={certification} className="panel cert-card">
                  <Award size={20} />
                  <p>{certification}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="content-section content-section-last">
          <div className={visibleSections.contact ? 'container section-reveal is-visible' : 'container section-reveal'}>
            <div className="contact-band">
              <div>
                <span className="contact-label">Contact</span>
                <h2>Open to strong engineering opportunities and impactful collaborations.</h2>
                <p>
                  If you&apos;re hiring for software, cloud, or DevOps-oriented roles, I&apos;d be glad to connect and
                  discuss how I can contribute.
                </p>
              </div>

              <div className="contact-actions">
                <a href="mailto:mmanohar619@gmail.com" className="contact-link">
                  <Mail size={18} />
                  mmanohar619@gmail.com
                </a>
                <a href="tel:+918971979534" className="contact-link">
                  <Phone size={18} />
                  +91 8971979534
                </a>
                <a href="https://linkedin.com/in/manohar-h/" target="_blank" rel="noreferrer" className="contact-link">
                  <Linkedin size={18} />
                  LinkedIn Profile
                </a>
                <a href="https://github.com/m-manu619" target="_blank" rel="noreferrer" className="contact-link">
                  <ExternalLink size={18} />
                  GitHub Portfolio
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
