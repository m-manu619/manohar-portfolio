import { Brain, Cpu, Database, Server, Sparkles, Zap } from 'lucide-react';

import aiResumeToolImage from '../images/ai_resume_screening_tool.webp';
import cloudFileImage from '../images/Cloud File Management System.webp';
import flaskCicdImage from '../images/Flask App CICD Pipeline on AWS.webp';
import terraformImage from '../images/Terraform AWS Infrastructure.webp';
import iplRetentionImage from '../images/ipl_retention_simulator.webp';
import viberentBookingImage from '../images/viberent_booking_platform.webp';
import proCricketAuctionImage from '../images/pro_cricket_auction_manager.webp';
import ipl2026Image from '../images/ipl_2026_simulator.webp';
import jenkinsPipelineImage from '../images/jenkins_pipeline.webp';
import fullstackReactExpressImage from '../images/fullstack_react_express.webp';

import javaIcon from '../images/icons8-java-48.png';
import pythonIcon from '../images/icons8-python-48.png';
import htmlIcon from '../images/icons8-html5-48.png';
import cssIcon from '../images/icons8-css3-48.png';
import javascriptIcon from '../images/icons8-javascript-48.png';
import reactIcon from '../images/icons8-react-80.png';
import mysqlIcon from '../images/icons8-mysql-48.png';
import postgresqlIcon from '../images/icons8-postgresql-50.png';
import gitIcon from '../images/icons8-git-48.png';
import githubIcon from '../images/icons8-github-48.png';
import awsIcon from '../images/icons8-aws-48.png';
import dockerIcon from '../images/icons8-docker-48.png';
import jenkinsIcon from '../images/icons8-jenkins-48.png';
import terraformIcon from '../images/icons8-terraform-48.png';
import springbootIcon from '../images/icons8-spring-boot-48.png';
import viteIcon from '../images/icons8-vite-48.png';

export const GITHUB_USERNAME = 'm-manu619';

export const navigation = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

export const skillLevels = ['Intermediate', 'Advanced', 'Expert'];

// level: 1 = Intermediate · 2 = Advanced · 3 = Expert
export const skills = [
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
      { name: 'Vite',       icon: viteIcon,       level: 3 },
      { name: 'GSAP',       level: 2,             FallbackIcon: Sparkles },
    ],
  },
  {
    title: 'Backend & Data',
    items: [
      { name: 'Spring Boot', icon: springbootIcon, level: 2 },
      { name: 'Spring Data JPA', level: 2,         FallbackIcon: Database },
      { name: 'Hibernate',   level: 2,             FallbackIcon: Database },
      { name: 'Maven',       level: 2,             FallbackIcon: Server },
      { name: 'FastAPI',     level: 2,             FallbackIcon: Server },
      { name: 'Express.js',  level: 2,             FallbackIcon: Server },
      { name: 'MySQL',       icon: mysqlIcon,      level: 2 },
      { name: 'PostgreSQL',  icon: postgresqlIcon, level: 2 },
      { name: 'DynamoDB',    level: 2,             FallbackIcon: Database },
      { name: 'WebSockets',  level: 2,             FallbackIcon: Zap },
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
      { name: 'GitHub Actions', icon: githubIcon, level: 2 },
    ],
  },
  {
    title: 'AI & Data Science',
    items: [
      { name: 'spaCy',            level: 2, FallbackIcon: Brain },
      { name: 'Machine Learning', level: 2, FallbackIcon: Cpu },
    ],
  },
];

export const projectCategories = ['All', 'Frontend', 'Backend', 'DevOps & Cloud', 'AI & Analytics'];

export const projects = [
  {
    title: 'IPL 2027 Retention Simulator',
    description:
      'Developed an interactive dashboard for the IPL 2027 mini-auction allowing users to plan squad retentions, manage purse balance, and export squad layouts.',
    impact: 'Enforces real retention constraints live, across all 10 franchises at once.',
    tech: ['React 19', 'Vite', 'Framer Motion', 'GSAP', 'CSS'],
    image: iplRetentionImage,
    github: 'https://github.com/m-manu619/ipl-2027-retention-simulator',
    demo: 'https://ipl-2027-retention-simulator.vercel.app',
    categories: ['Frontend'],
    details: [
      'Enforces squad size 18–25, a maximum of 8 overseas players, a minimum of 17 Indians, and the Rs 130 Cr purse cap.',
      'Live violation detection with committed-versus-free purse tracking across all 10 franchises.',
      'High-fidelity HTML-to-image canvas generation for immediate social sharing.',
    ],
  },
  {
    title: 'Pro Cricket Auction Manager',
    description:
      'Real-time multiplayer T20 squad mock auction application supporting live player bidding lobbies, synchronized WebSockets, and dynamic AI bidding franchises.',
    impact: 'Live in production across 100+ deployments, with uptime monitoring, error tracking and automated tests.',
    tech: ['React', 'Vite', 'WebSockets', 'Cloudflare Workers', 'Concurrency'],
    image: proCricketAuctionImage,
    github: null,
    demo: 'https://pro-cricket-auction-manager-client.vercel.app',
    categories: ['Frontend', 'Backend'],
    details: [
      'Solo play against 9 AI franchises, or real-time rooms for up to 10 players with host controls, seat assignment and shareable invites.',
      'WebSocket-synchronised room state across connected clients, backed by a Cloudflare Workers player-pool service and authenticated accounts.',
      'Also ships a 25-pick snake draft into a full T20 season with fixtures, playoffs and standings over a 450+ player pool.',
    ],
  },
  {
    title: 'ViBerent — Property Booking Platform',
    description:
      'Full-stack property booking platform on Java and Spring Boot, with a layered controller/service/repository backend and a React + Vite frontend.',
    impact: 'Date-overlap validation makes double-booking impossible rather than merely unlikely.',
    tech: ['Java 21', 'Spring Boot', 'Spring Data JPA', 'MySQL', 'React'],
    image: viberentBookingImage,
    github: 'https://github.com/m-manu619/viberent-booking-platform',
    demo: null,
    categories: ['Frontend', 'Backend'],
    architecture: ['React + Vite SPA', 'Spring Boot REST API', 'Service Layer', 'JPA Repositories', 'MySQL'],
    details: [
      '10 REST controllers over 11 services and 5 JPA repositories, with a dedicated DTO layer and constructor injection throughout.',
      'Custom JPQL date-range query rejects reservations overlapping an existing pending or confirmed stay; ownership checks return 403 on cross-user access.',
      'Guest and admin flows: property search, booking and cancellation, review CRUD, and a payment confirmation workflow.',
    ],
  },
  {
    title: 'AI Resume Screening & Job Matching Tool',
    description:
      'Batch resume screening service matching PDF and DOCX resumes against 14 engineering role profiles or a custom job description, with explainable score breakdowns.',
    impact: 'Every score is explainable — it names the skills that matched and the ones that did not.',
    tech: ['Python', 'FastAPI', 'React', 'NLP', 'OCR'],
    image: aiResumeToolImage,
    github: 'https://github.com/m-manu619/ai-resume-screening-job-matching-tool',
    demo: null,
    categories: ['AI & Analytics', 'Frontend', 'Backend'],
    architecture: ['React Upload UI', 'FastAPI REST API', 'Text Extraction + OCR', 'Weighted Scoring', 'Match Breakdown'],
    details: [
      'Batch-screens PDF and DOCX resumes against 14 engineering role profiles or a custom job description, with multiple text-extraction fallbacks including OCR.',
      'Six-component weighted scoring produces explainable breakdowns of matched and missing skills rather than a single opaque number.',
      'API-key-protected endpoints, backed by a test suite and a 20x20 labelled accuracy benchmark.',
    ],
  },
  {
    title: 'Cloud File Management System',
    description:
      'Spring Boot REST service for file upload and download backed by Amazon S3 through the AWS SDK, containerised with Docker.',
    impact: 'Clean service/controller separation over the AWS SDK v2 S3 client.',
    tech: ['Java', 'Spring Boot', 'AWS SDK v2', 'Amazon S3', 'Docker'],
    image: cloudFileImage,
    github: 'https://github.com/m-manu619/Cloud_File_Management_System',
    demo: null,
    categories: ['Backend', 'DevOps & Cloud'],
    details: [
      'Multipart upload and download endpoints storing objects in S3 with UUID keys.',
      'Content-type resolution on retrieval via an S3 head-object lookup.',
      'Containerised with Docker; configuration injected through Spring properties.',
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
      'Reactive UI transitions reflecting game simulation events and live net run rate modifications.',
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
      'Continuous integration triggers integrated with GitHub Webhooks and GitHub Actions.',
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
      'Modular directory structure separating development, staging, and production environments.',
    ],
  },
  {
    title: 'Jenkins Declarative CI/CD Pipeline',
    description:
      'Reusable declarative Jenkinsfile template laying out a multi-stage pipeline: Setup, Build, Test, Package and Deploy.',
    impact: 'A starting scaffold for standardising pipeline structure across projects.',
    tech: ['Jenkins', 'Docker', 'Groovy', 'CI/CD', 'Automation'],
    image: jenkinsPipelineImage,
    github: 'https://github.com/m-manu619/jenkins',
    demo: null,
    categories: ['DevOps & Cloud'],
    details: [
      'Declarative pipeline syntax with clearly separated Setup, Build, Test, Package and Deploy stages.',
      'Structured as a template to be adapted per project rather than a project-specific build.',
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
      'Zero-configuration deployment patterns designed for serverless AWS Lambda hosting.',
    ],
  },
];

export const experience = [
  {
    role: 'Independent Full-Stack Developer',
    company: 'Self-Directed Projects',
    location: 'Hassan, India',
    period: 'July 2024 – Present',
    highlights: [
      'Design, ship, and operate full-stack applications end to end — data model, REST API, React frontend, and production deployment.',
      'Run live products on Vercel across 100+ deployments, with uptime and error monitoring rather than deploy-and-forget.',
      'Work across Java and Spring Boot on the backend and React with Vite on the frontend, plus the AWS, Docker, and CI/CD tooling around them.',
    ],
  },
  {
    role: 'AWS Solution Architect and DevOps Intern',
    company: 'Micro Degree',
    location: 'Bengaluru, India',
    period: 'February 2024 – July 2024',
    highlights: [
      'Designed AWS environments across EC2, S3, and IAM, choosing configurations for scalability and cost rather than accepting defaults.',
      'Built CI/CD pipelines with Jenkins and Docker to cut manual deployment steps and shorten release cycles.',
      'Monitored and optimised cloud resources using CloudWatch to support stable operations.',
    ],
  },
  {
    role: 'Project Engineer',
    company: 'Wipro Technologies',
    location: 'Bengaluru, India',
    period: 'February 2022 – March 2023',
    highlights: [
      'Developed and integrated Java-based solutions for the OSDU platform — an open data standard for the oil and gas industry — in Core Java (Java 8+) with Spring Boot.',
      'Built and deployed RESTful services within a microservices architecture, designing for modularity as requirements shifted across releases.',
      'Managed PostgreSQL databases and root-caused critical production issues, restoring stability without introducing regressions.',
    ],
  },
];

export const certifications = [
  { label: 'AWS Certification | MicroDegree · Apr 2024', type: 'cert' },
  { label: 'DevOps Certification | MicroDegree · Jun 2024', type: 'cert' },
  { label: 'Machine Learning Using Python | Inventeron Technologies', type: 'cert' },
  { label: 'Goldman Sachs Excel Skills for Business | Forage', type: 'sim' },
  { label: 'PwC Switzerland Power BI Job Simulation | Forage', type: 'sim' },
  { label: 'Verizon Cloud Platform Job Simulation | Forage', type: 'sim' },
];

export const standoutPoints = [
  'A year of professional Spring Boot work at Wipro on the OSDU platform, in Core Java and microservices',
  'Runs a live multiplayer product in production — 100+ deployments with uptime monitoring, error tracking and automated tests',
  'Layered Spring Boot architecture with a DTO layer and a JPQL query that makes double-booking impossible',
  '10+ documented public repositories spanning Java full-stack, cloud infrastructure and NLP',
];

export const marqueeItems = [
  'Java', 'Spring Boot', 'Spring Data JPA', 'REST APIs', 'React', 'Vite',
  'MySQL', 'PostgreSQL', 'AWS', 'Docker', 'Jenkins', 'CI/CD',
];
