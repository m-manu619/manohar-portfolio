/* eslint-disable no-unused-vars */
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

import aiResumeToolImage from './images/ai_resume_screening_tool.png';
import cloudFileImage from './images/Cloud File Management System.jpeg';
import flaskCicdImage from './images/Flask App CICD Pipeline on AWS.jpeg';
import terraformImage from './images/Terraform AWS Infrastructure.jpeg';
import profilePhoto from './images/Manohar Photo.jpg';

import iplRetentionImage from './images/ipl_retention_simulator.png';
import viberentBookingImage from './images/viberent_booking_platform.png';
import proCricketAuctionImage from './images/pro_cricket_auction_manager.png';
import ipl2026Image from './images/ipl_2026_simulator.png';
import jenkinsPipelineImage from './images/jenkins_pipeline.png';
import fullstackReactExpressImage from './images/fullstack_react_express.png';

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
    title: 'IPL 2027 Retention Simulator',
    description:
      'Developed an interactive dashboard for the IPL 2027 mini-auction allowing users to plan squad retentions, manage purse balance, and export squad layouts.',
    impact: 'Enables real-time roster building constraints and high-fidelity squad card exports.',
    tech: ['React 19', 'Vite', 'Framer Motion', 'GSAP', 'CSS'],
    image: iplRetentionImage,
    github: 'https://github.com/m-manu619/ipl-2027-retention-simulator',
    demo: null,
    categories: ['Frontend'],
    details: [
      'Dynamic salary cap tracking (Rs 120 Crore) with real-time budget depletion alerts.',
      'Supports RTM (Right to Match) logic rules and maximum player retention limits.',
      'High-fidelity HTML-to-image canvas generation for immediate social sharing.'
    ],
  },
  {
    title: 'Pro Cricket Auction Manager',
    description:
      'Real-time multiplayer T20 squad mock auction application supporting live player bidding lobbies, synchronized WebSockets, and dynamic AI bidding franchises.',
    impact: 'Under active development; features a low-latency concurrent bidding engine and automated AI opponents.',
    tech: ['React', 'Spring Boot', 'WebSockets', 'MySQL', 'Concurrency'],
    image: proCricketAuctionImage,
    github: 'https://github.com/m-manu619/Pro_Cricket_Auction_Manager',
    demo: null,
    inProgress: true,
    categories: ['Frontend', 'Backend'],
    details: [
      'Synchronized WebSockets bidding room with active user lobbies and bidding state machines.',
      'Algorithmic AI franchises bidding dynamically based on budget constraints and squad needs.',
      'Responsive concurrency handling with optimistic locking and Spring Boot backend.'
    ],
  },
  {
    title: 'Viberent Booking Platform',
    description:
      'Full-stack rental property booking application featuring secure JWT authentication, interactive property catalogs, and transactional booking workflows.',
    impact: 'Implements role-based access control and robust backend state validation.',
    tech: ['React', 'Spring Boot', 'MySQL', 'JWT Auth', 'REST API'],
    image: viberentBookingImage,
    github: 'https://github.com/m-manu619/viberent-booking-platform',
    demo: null,
    categories: ['Frontend', 'Backend'],
    details: [
      'Role-based page authorization (Admin / Guest / Vendor) using secure JWT tokens.',
      'Interactive booking calendars with real-time property availability validation.',
      'Relational database schema in MySQL mapping bookings, properties, and users.'
    ],
  },
  {
    title: 'AI-Powered Resume Screener & Job Matcher',
    description:
      'Full-stack semantic analysis tool parsing resume uploads, extracting technical skill categories, and computing semantic match scores against job profiles.',
    impact: 'Speeds up candidate profiling with advanced NLP extraction models and cosine similarity scores.',
    tech: ['FastAPI', 'React', 'Python', 'spaCy', 'Sentence Transformers'],
    image: aiResumeToolImage,
    github: 'https://github.com/m-manu619/ai-resume-screening-job-matching-tool',
    demo: null,
    categories: ['AI & Analytics', 'Frontend', 'Backend'],
    details: [
      'NLP parsing using spaCy to extract technical skills and structural text from PDF resumes.',
      'Semantic similarity matching scoring based on Hugging Face sentence transformers.',
      'FastAPI backend exposing REST endpoints for file uploads and JSON match score responses.'
    ],
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
    categories: ['Backend', 'DevOps & Cloud'],
    details: [
      'Secure file upload/download pipelines interacting with AWS S3 storage buckets.',
      'Role-based file permission access control policies via Amazon IAM.',
      'Robust file metadata indexing using Amazon DynamoDB document storage.'
    ],
  },
  {
    title: 'IPL 2026 Simulator',
    description:
      'Sports analytics engine simulating matches, computing net run rates, and plotting playoff qualification probability trajectories.',
    impact: 'Runs 10,000+ Monte Carlo seasonal paths locally inside the browser in under a second.',
    tech: ['React', 'JavaScript', 'Framer Motion', 'Data Analytics'],
    image: ipl2026Image,
    github: 'https://github.com/m-manu619/ipl-2026-simulator',
    demo: null,
    categories: ['Frontend', 'AI & Analytics'],
    details: [
      'Client-side Monte Carlo simulations running 10,000+ tournament seasons in under 800ms.',
      'Interactive points race line chart tracking qualification thresholds dynamically.',
      'Reactive UI transitions reflecting game simulation events and live net run rate modifications.'
    ],
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
    categories: ['DevOps & Cloud'],
    details: [
      'Dockerized Flask web container build templates optimized for small foot-print size.',
      'Multi-stage automated pipeline via AWS CodePipeline, ECR, and ECS.',
      'Continuous integration triggers integrated with GitHub Webhooks and GitHub Actions.'
    ],
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
    categories: ['DevOps & Cloud'],
    details: [
      'Declarative infrastructure as code provisioning VPC, Subnets, EC2, RDS, and Route53.',
      'State locking synchronization using AWS S3 backend with DynamoDB tables.',
      'Modular directory structure separating development, staging, and production environments.'
    ],
  },
  {
    title: 'Jenkins Declarative CI/CD Pipeline',
    description:
      'Standardized template automating multi-stage pipelines (Build, Test, SonarQube Lint, Docker Package, and Deploy) with containerized execution.',
    impact: 'Minimizes release friction by automating build-validation stages with agent-based runners.',
    tech: ['Jenkins', 'Docker', 'Groovy', 'CI/CD', 'Automation'],
    image: jenkinsPipelineImage,
    github: 'https://github.com/m-manu619/jenkins',
    demo: null,
    categories: ['DevOps & Cloud'],
    details: [
      'Standardized declarative Jenkinsfile implementing unit testing, lint check, and packaging.',
      'Integrated with Docker agents to isolate compilation and test runtime runtimes.',
      'Automated slack hook notifications triggered upon pipeline failures or success status.'
    ],
  },
  {
    title: 'Full-Stack React Express Boilerplate',
    description:
      'Production-ready boilerplate combining a React frontend, an Express server, and Amazon DynamoDB for cloud document storage.',
    impact: 'Provides a modular starting point for serverless and document-store application development.',
    tech: ['React', 'Express', 'DynamoDB', 'AWS', 'REST API'],
    image: fullstackReactExpressImage,
    github: 'https://github.com/m-manu619/fullstack-react-express-app',
    demo: null,
    categories: ['Frontend', 'Backend'],
    details: [
      'Reusable boilerplate architecture combining React client application with Express server.',
      'Configured with CORS rules, JWT authentication, and DynamoDB document client query helpers.',
      'Zero-configuration deployment patterns designed for serverless AWS Lambda hosting.'
    ],
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
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);
  const [formStatus, setFormStatus] = useState('idle');

  const cursorRef = useRef(null);
  const cursorRingRef = useRef(null);

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

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
      if (cursorRingRef.current) {
        cursorRingRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const handleHoverStart = () => {
      document.body.classList.add('cursor-hover');
    };
    const handleHoverEnd = () => {
      document.body.classList.remove('cursor-hover');
    };

    window.addEventListener('mousemove', moveCursor);

    const updateListeners = () => {
      const interactives = document.querySelectorAll('a, button, input, textarea, .project-card, .filter-btn, .tag');
      interactives.forEach((el) => {
        el.addEventListener('mouseenter', handleHoverStart);
        el.addEventListener('mouseleave', handleHoverEnd);
      });
    };

    updateListeners();

    const observer = new MutationObserver(updateListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      observer.disconnect();
      const interactives = document.querySelectorAll('a, button, input, textarea, .project-card, .filter-btn, .tag');
      interactives.forEach((el) => {
        el.removeEventListener('mouseenter', handleHoverStart);
        el.removeEventListener('mouseleave', handleHoverEnd);
      });
    };
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
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (data.success) {
        setFormStatus('success');
        setContactForm({ name: '', email: '', message: '' });
      } else {
        setFormStatus('error');
      }
    } catch (err) {
      console.error(err);
      setFormStatus('error');
    }
  };

  const handleFormChange = (e) =>
    setContactForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const activeProjects = projects.filter((p) => {
    const matchesCategory = selectedCategory === 'All' || p.categories.includes(selectedCategory);
    return !p.inProgress && matchesCategory;
  });
  const workingProjects = projects.filter((p) => {
    const matchesCategory = selectedCategory === 'All' || p.categories.includes(selectedCategory);
    return p.inProgress && matchesCategory;
  });

  return (
    <div className="site-shell">
      <div className="cursor-dot" ref={cursorRef} />
      <div className="cursor-ring" ref={cursorRingRef} />
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

        {/* ── Marquee strip ── */}
        <div className="marquee-wrap" aria-hidden="true">
          <div className="marquee-track">
            {['AWS', 'Docker', 'Terraform', 'Spring Boot', 'CI/CD', 'Java', 'Python', 'React', 'Jenkins', 'PostgreSQL', 'DevOps', 'GitHub Actions'].concat(
              ['AWS', 'Docker', 'Terraform', 'Spring Boot', 'CI/CD', 'Java', 'Python', 'React', 'Jenkins', 'PostgreSQL', 'DevOps', 'GitHub Actions']
            ).map((item, i) => (
              <span key={i} className="marquee-item">
                <span className="marquee-star">✦</span>{item}
              </span>
            ))}
          </div>
        </div>

        {/* ── About ── */}
        <section id="about" className="content-section section-accent">
          <motion.div className="container section-layout" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-10%' }}>
            <motion.div variants={fadeUp} className="section-heading">
              <span className="section-label"><span className="section-label-star">✦</span> About</span>
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
              <span className="section-label"><span className="section-label-star">✦</span> Experience</span>
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
              <span className="section-label"><span className="section-label-star">✦</span> Skills</span>
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
              <span className="section-label"><span className="section-label-star">✦</span> Projects</span>
              <h2>End-to-end projects spanning AI automation, cloud infrastructure, and DevOps pipelines.</h2>
            </motion.div>

            {/* Filter Tabs */}
            <div className="filter-tabs">
              {['All', 'Frontend', 'Backend', 'DevOps & Cloud', 'AI & Analytics'].map((cat) => (
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
              <p style={{ textAlign: 'center', color: 'var(--muted)', marginTop: '2rem', fontStyle: 'italic' }}>
                No projects found in this category.
              </p>
            )}

            {workingProjects.length > 0 && (
              <div className="projects-subsection">
                <h3 className="projects-subsection-title">Currently Working On</h3>
                <div className="projects-grid">
                  {workingProjects.map((project) => (
                    <motion.article key={project.title} variants={staggerItem} className="project-card">
                      <button
                        type="button"
                        className="project-visual"
                        onClick={() => setActiveModalProject(project)}
                        aria-label={`View details for ${project.title}`}
                      >
                        <img src={project.image} alt={project.title} loading="lazy" decoding="async" />
                        <div className="project-image-overlay">
                          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
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
                          <button
                            type="button"
                            className="button button-primary"
                            onClick={() => setActiveModalProject(project)}
                          >
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
                    </motion.article>
                  ))}
                </div>
              </div>
            )}

            <div className="projects-subsection">
              <h3 className="projects-subsection-title">Featured Projects</h3>
              <div className="projects-grid">
                {activeProjects.map((project) => (
                  <motion.article key={project.title} variants={staggerItem} className="project-card">
                    <button
                      type="button"
                      className="project-visual"
                      onClick={() => setActiveModalProject(project)}
                      aria-label={`View details for ${project.title}`}
                    >
                      <img src={project.image} alt={project.title} loading="lazy" decoding="async" />
                      <div className="project-image-overlay">
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
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
                        <button
                          type="button"
                          className="button button-primary"
                          onClick={() => setActiveModalProject(project)}
                        >
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
                  </motion.article>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* ── Certifications ── */}
        <section id="certifications" className="content-section">
          <motion.div className="container section-layout" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-10%' }}>
            <motion.div variants={fadeUp} className="section-heading">
              <span className="section-label"><span className="section-label-star">✦</span> Certifications</span>
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
        <section id="contact" className="content-section content-section-last section-light">
          <motion.div className="container section-layout" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-10%' }}>
            <motion.div variants={fadeUp} className="section-heading">
              <span className="section-label"><span className="section-label-star">✦</span> Contact</span>
              <h2>Let&apos;s talk — I&apos;m actively looking for software, cloud, and DevOps roles.</h2>
            </motion.div>
            <motion.div variants={staggerItem} className="contact-band">
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
                        <span className="form-error-msg" style={{ display: 'inline-flex', marginLeft: '1rem', color: '#ef4444', fontSize: '0.88rem', fontWeight: 600 }}>
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

      {/* ── Project Detail Modal ── */}
      <AnimatePresence>
        {activeModalProject && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveModalProject(null)}
          >
            <motion.div
              className="modal-wrapper"
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setActiveModalProject(null)}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <img
                src={activeModalProject.image}
                alt={activeModalProject.title}
                className="modal-image"
              />

              <div className="modal-body">
                <div className="modal-header">
                  <span className={`panel-kicker ${activeModalProject.inProgress ? 'kicker-in-progress' : ''}`}>
                    {activeModalProject.inProgress ? 'Currently working on' : 'Featured Project'}
                  </span>
                  <h2>{activeModalProject.title}</h2>
                  <div className="tag-row">
                    {activeModalProject.tech.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                </div>

                <div className="modal-section-title">Overview</div>
                <p className="modal-description">{activeModalProject.description}</p>

                {activeModalProject.details && (
                  <>
                    <div className="modal-section-title">Key Technical Details</div>
                    <ul className="modal-highlights">
                      {activeModalProject.details.map((d, idx) => (
                        <li key={idx}>
                          <CheckCircle size={16} />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                <div className="modal-footer">
                  <a
                    href={activeModalProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="button button-primary"
                  >
                    <Github size={16} /> View Repository
                  </a>
                  {activeModalProject.demo && (
                    <a
                      href={activeModalProject.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="button button-secondary"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                  <button
                    type="button"
                    className="button button-ghost"
                    onClick={() => setActiveModalProject(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
