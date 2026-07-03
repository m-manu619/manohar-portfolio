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
  { id: 'playground', label: 'Playground' },
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
      { name: 'GitHub',    icon: githubIcon,    level: 3 },
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
    impact: 'Enables real-time roster building constraints and high-fidelity squad card exports.',
    tech: ['React 19', 'Vite', 'Framer Motion', 'GSAP', 'CSS'],
    image: iplRetentionImage,
    github: 'https://github.com/m-manu619/ipl-2027-retention-simulator',
    demo: 'https://ipl-2027-retention-simulator.vercel.app',
    categories: ['Frontend'],
    details: [
      'Dynamic salary cap tracking (Rs 120 Crore) with real-time budget depletion alerts.',
      'Supports RTM (Right to Match) logic rules and maximum player retention limits.',
      'High-fidelity HTML-to-image canvas generation for immediate social sharing.',
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
      'Responsive concurrency handling with optimistic locking and Spring Boot backend.',
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
    architecture: ['React SPA', 'Spring Boot REST API', 'JWT Auth Layer', 'MySQL Database'],
    details: [
      'Role-based page authorization (Admin / Guest / Vendor) using secure JWT tokens.',
      'Interactive booking calendars with real-time property availability validation.',
      'Relational database schema in MySQL mapping bookings, properties, and users.',
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
    architecture: ['React Upload UI', 'FastAPI REST API', 'spaCy NLP Parser', 'Sentence Transformers', 'Match Score'],
    details: [
      'NLP parsing using spaCy to extract technical skills and structural text from PDF resumes.',
      'Semantic similarity matching scoring based on Hugging Face sentence transformers.',
      'FastAPI backend exposing REST endpoints for file uploads and JSON match score responses.',
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
      'Robust file metadata indexing using Amazon DynamoDB document storage.',
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
      'Automated slack hook notifications triggered upon pipeline failures or success status.',
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

export const certifications = [
  { label: 'AWS Solution Architect and DevOps | Micro Degree', type: 'cert' },
  { label: 'Machine Learning Using Python | Inventeron Technologies', type: 'cert' },
  { label: 'Goldman Sachs Excel Skills for Business | Forage', type: 'sim' },
  { label: 'PwC Switzerland Power BI Job Simulation | Forage', type: 'sim' },
  { label: 'Verizon Cloud Platform Job Simulation | Forage', type: 'sim' },
];

export const standoutPoints = [
  'Delivered a 40% deployment speed improvement at Micro Degree through CI/CD pipeline automation',
  'Built 10+ end-to-end projects spanning full-stack, cloud infrastructure, and AI — all on GitHub',
  'Reduced candidate shortlisting effort by 50% with an NLP-powered AI resume screening tool',
  'Shipped a live product (IPL 2027 Simulator) running 10,000+ Monte Carlo paths client-side in under 800ms',
];

export const marqueeItems = [
  'AWS', 'Docker', 'Terraform', 'Spring Boot', 'CI/CD', 'Java',
  'Python', 'React', 'Jenkins', 'PostgreSQL', 'DevOps', 'GitHub Actions',
];
