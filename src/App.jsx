import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Award, GraduationCap, Menu, X } from 'lucide-react';

// Import project images
import aiResumeImage from './images/AI-Powered Resume Screening Tool.jpeg';
import cloudFileImage from './images/Cloud File Management System.jpeg';
import flaskCicdImage from './images/Flask App CICD Pipeline on AWS.jpeg';
import terraformImage from './images/Terraform AWS Infrastructure.jpeg';

// Import skill icons
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
import terraformIconSkill from './images/icons8-terraform-48.png';
import springbootIcon from './images/icons8-spring-boot-48.png';

// Import resume
import resume from './images/Manohar H Resume (Wing AI).pdf';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState({});
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: entry.isIntersecting
            }));
          });
        },
        { threshold: 0.1 }
      );

      document.querySelectorAll('section[id]').forEach((section) => {
        observer.observe(section);
      });

      return () => observer.disconnect();
    }
  }, [loading]);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = resume;
    link.download = 'Manohar_H_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const skills = {
    programming: {
      title: 'Programming Language',
      items: [
        { name: 'Java', icon: javaIcon },
        { name: 'Python', icon: pythonIcon }
      ]
    },
    webdev: {
      title: 'Web Development Technology',
      items: [
        { name: 'HTML', icon: htmlIcon },
        { name: 'CSS', icon: cssIcon },
        { name: 'JavaScript', icon: javascriptIcon },
        { name: 'React', icon: reactIcon },
        { name: 'Vite', icon: viteIcon }
      ]
    },
    database: {
      title: 'Database',
      items: [
        { name: 'MySQL', icon: mysqlIcon },
        { name: 'PostgreSQL', icon: postgresqlIcon }
      ]
    },
    versioncontrol: {
      title: 'Version Control',
      items: [
        { name: 'Git', icon: gitIcon },
        { name: 'GitHub', icon: githubIcon }
      ]
    },
    cloud: {
      title: 'Cloud & DevOps',
      items: [
        { name: 'AWS', icon: awsIcon },
        { name: 'Docker', icon: dockerIcon },
        { name: 'Jenkins', icon: jenkinsIcon },
        { name: 'Terraform', icon: terraformIconSkill }
      ]
    },
    frameworks: {
      title: 'Frameworks',
      items: [
        { name: 'Spring Boot', icon: springbootIcon }
      ]
    }
  };

  const projects = [
    {
      title: "AI-Powered Resume Screening Tool",
      description: "Automated resume screening with NLP, improving shortlisting speed by 50%. Built using Python and AWS for scalable deployment with machine learning algorithms.",
      tech: ["Python", "AWS", "NLP", "Machine Learning", "Scikit-learn"],
      github: "https://github.com/m-manu619/AI-Powered-Resume-Screening-and-Job-Matching-Tool",
      image: aiResumeImage,
      features: ["Natural Language Processing", "AWS Deployment", "50% Speed Improvement", "Automated Shortlisting"]
    },
    {
      title: "Cloud File Management System",
      description: "A user-friendly platform for managing files on the cloud with secure access control, focusing on seamless functionality and performance optimization.",
      tech: ["AWS S3", "IAM", "Docker", "Spring Boot", "React"],
      github: "https://github.com/m-manu619/Cloud_File_Management_System",
      image: cloudFileImage,
      features: ["Secure File Storage", "Access Control", "40% Storage Reduction", "User-friendly Interface"]
    },
    {
      title: "Flask App CI/CD Pipeline on AWS",
      description: "Automated deployment pipelines with AWS CodePipeline and ECS to simplify Flask app deployments with containerization and orchestration.",
      tech: ["AWS CodePipeline", "ECS", "Docker", "Flask", "GitHub Actions"],
      github: "https://github.com/m-manu619/Flask-App-CI-CD-Pipeline-on-AWS-using-CodePipeline-ECS-and-Docker",
      image: flaskCicdImage,
      features: ["Automated Deployment", "Container Orchestration", "Pipeline Automation", "Zero Downtime Deployment"]
    },
    {
      title: "Terraform AWS Infrastructure",
      description: "Leveraging Infrastructure as Code (IaC) to automate AWS resource provisioning for scalable solutions with best practices and cost optimization.",
      tech: ["Terraform", "AWS", "IaC", "DevOps", "CloudFormation"],
      github: "https://github.com/m-manu619/terraform-aws-project",
      image: terraformImage,
      features: ["Infrastructure as Code", "Resource Automation", "Scalable Architecture", "Cost Optimization"]
    }
  ];

  const experience = [
    {
      title: "AWS Solution Architect and DevOps Intern",
      company: "Micro Degree",
      location: "Bengaluru",
      duration: "February 2024 – July 2024",
      achievements: [
        "Designed and deployed AWS environments with EC2, S3, and IAM",
        "Streamlined CI/CD pipelines with Jenkins and Docker, reducing deployment time by 40%",
        "Monitored and optimized AWS resources using CloudWatch"
      ]
    },
    {
      title: "Project Engineer",
      company: "Wipro Technologies",
      location: "Bengaluru",
      duration: "February 2022 – March 2023",
      achievements: [
        "Provided technical support, troubleshooting user queries and ensuring seamless platform operations",
        "Developed Java applications using Spring Boot, improving system efficiency and reducing response time",
        "Conducted root cause analysis and implemented solutions to enhance system reliability",
        "Collaborated with cross-functional teams to optimize workflows and improve process efficiency"
      ]
    }
  ];

  const certifications = [
    "AWS Solution Architect and DevOps | Micro Degree",
    "Machine Learning Using Python | Inventeron Technologies",
    "Goldman Sachs Excel Skills for Business Job Simulation | Forage",
    "PwC Switzerland Power BI Job Simulation | Forage",
    "Verizon Cloud Platform Job Simulation | Forage"
  ];

  const styles = `
    @import url('https://fonts.googleapis.com/css2?family=Prata&family=Dancing+Script:wght@400;700&family=Kaushan+Script:wght@400;700&display=swap');

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Inter', sans-serif;
      background: #00203F;
      color: #ffffff;
      line-height: 1.6;
      overflow-x: hidden;
      position: relative;
    }

    /* Loading Screen Styles */
    .loading-screen {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(45deg, #00203F, #001B36, #00203F, #002847);
      background-size: 400% 400%;
      animation: gradientShift 3s ease infinite;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      z-index: 9999;
      transition: opacity 0.5s ease, visibility 0.5s ease;
    }

    .loading-screen.fade-out {
      opacity: 0;
      visibility: hidden;
    }

    .loading-logo {
      font-size: 48px;
      font-weight: 800;
      color: #A8E6CF;
      margin-bottom: 30px;
      animation: logoGlow 2s ease-in-out infinite alternate;
    }

    .loading-logo::before {
      content: '<';
      color: #A8E6CF;
      margin-right: 10px;
    }

    .loading-logo::after {
      content: '/>';
      color: #A8E6CF;
      margin-left: 10px;
    }

    @keyframes logoGlow {
      from {
        text-shadow: 0 0 20px rgba(168, 230, 207, 0.5);
        transform: scale(1);
      }
      to {
        text-shadow: 0 0 40px rgba(168, 230, 207, 0.8), 0 0 60px rgba(168, 230, 207, 0.3);
        transform: scale(1.05);
      }
    }

    .loading-spinner {
      width: 60px;
      height: 60px;
      border: 4px solid rgba(168, 230, 207, 0.3);
      border-top: 4px solid #A8E6CF;
      border-radius: 50%;
      animation: spin 1s linear infinite;
      margin-bottom: 20px;
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    .loading-text {
      font-size: 18px;
      color: #cccccc;
      margin-bottom: 20px;
      animation: pulse 1.5s ease-in-out infinite;
    }

    .loading-progress {
      width: 300px;
      height: 4px;
      background: rgba(168, 230, 207, 0.3);
      border-radius: 2px;
      overflow: hidden;
      margin-bottom: 20px;
    }

    .loading-progress-bar {
      height: 100%;
      background: linear-gradient(90deg, #A8E6CF, #7FD3B3);
      border-radius: 2px;
      animation: progressBar 3s ease-out forwards;
    }

    @keyframes progressBar {
      0% { width: 0%; }
      25% { width: 30%; }
      50% { width: 60%; }
      75% { width: 85%; }
      100% { width: 100%; }
    }

    .loading-dots {
      display: flex;
      gap: 8px;
    }

    .loading-dot {
      width: 8px;
      height: 8px;
      background: #A8E6CF;
      border-radius: 50%;
      animation: dotBounce 1.4s ease-in-out infinite both;
    }

    .loading-dot:nth-child(1) { animation-delay: -0.32s; }
    .loading-dot:nth-child(2) { animation-delay: -0.16s; }
    .loading-dot:nth-child(3) { animation-delay: 0s; }

    @keyframes dotBounce {
      0%, 80%, 100% {
        transform: scale(0.8);
        opacity: 0.5;
      }
      40% {
        transform: scale(1.2);
        opacity: 1;
      }
    }

    @keyframes handwriteSignature {
      0% {
        opacity: 0;
        transform: translateY(20px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .loading-particles {
      position: absolute;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    .loading-particle {
      position: absolute;
      width: 4px;
      height: 4px;
      background: #A8E6CF;
      border-radius: 50%;
      opacity: 0.6;
      animation: floatParticle 4s linear infinite;
    }

    .loading-particle:nth-child(1) { left: 10%; animation-delay: 0s; }
    .loading-particle:nth-child(2) { left: 20%; animation-delay: 0.5s; }
    .loading-particle:nth-child(3) { left: 30%; animation-delay: 1s; }
    .loading-particle:nth-child(4) { left: 40%; animation-delay: 1.5s; }
    .loading-particle:nth-child(5) { left: 50%; animation-delay: 2s; }
    .loading-particle:nth-child(6) { left: 60%; animation-delay: 2.5s; }
    .loading-particle:nth-child(7) { left: 70%; animation-delay: 3s; }
    .loading-particle:nth-child(8) { left: 80%; animation-delay: 3.5s; }
    .loading-particle:nth-child(9) { left: 90%; animation-delay: 0.25s; }
    .loading-particle:nth-child(10) { left: 95%; animation-delay: 0.75s; }

    @keyframes floatParticle {
      0% {
        transform: translateY(100vh) rotate(0deg);
        opacity: 0;
      }
      10% {
        opacity: 0.6;
      }
      90% {
        opacity: 0.6;
      }
      100% {
        transform: translateY(-100vh) rotate(360deg);
        opacity: 0;
      }
    }

    /* Animated Background Gradient */
    body::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(45deg, #00203F, #001B36, #00203F, #002847);
      background-size: 400% 400%;
      animation: gradientShift 15s ease infinite;
      z-index: -1;
    }

    @keyframes gradientShift {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    /* Floating Particles */
    .background-particles {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 1;
    }

    .particle {
      position: absolute;
      width: 4px;
      height: 4px;
      background: #A8E6CF;
      border-radius: 50%;
      opacity: 0.6;
      animation: float 12s linear infinite;
    }

    .particle:nth-child(1) { left: 10%; animation-delay: 0s; }
    .particle:nth-child(2) { left: 20%; animation-delay: 2s; }
    .particle:nth-child(3) { left: 30%; animation-delay: 4s; }
    .particle:nth-child(4) { left: 40%; animation-delay: 6s; }
    .particle:nth-child(5) { left: 50%; animation-delay: 8s; }
    .particle:nth-child(6) { left: 60%; animation-delay: 10s; }
    .particle:nth-child(7) { left: 70%; animation-delay: 1s; }
    .particle:nth-child(8) { left: 80%; animation-delay: 3s; }
    .particle:nth-child(9) { left: 90%; animation-delay: 5s; }
    .particle:nth-child(10) { left: 95%; animation-delay: 7s; }

    @keyframes float {
      0% {
        transform: translateY(100vh) rotate(0deg);
        opacity: 0;
      }
      10% {
        opacity: 0.6;
      }
      90% {
        opacity: 0.6;
      }
      100% {
        transform: translateY(-100vh) rotate(360deg);
        opacity: 0;
      }
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 24px;
      position: relative;
      z-index: 10;
      width: 100%;
    }

    .nav {
      position: fixed;
      top: 0;
      width: 100%;
      background: rgba(0, 32, 63, 0.95);
      backdrop-filter: blur(20px);
      z-index: 1000;
      border-bottom: 1px solid #002847;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
      transition: all 0.3s ease;
    }

    .nav:hover {
      background: rgba(0, 32, 63, 0.98);
      box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
    }

    .nav-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 24px;
      max-width: 1200px;
      margin: 0 auto;
      width: 100%;
    }

    .logo {
      font-size: 24px;
      font-weight: 600;
      color: #ffffff;
      transition: all 0.3s ease;
      cursor: pointer;
    }

    .logo:hover {
      transform: scale(1.05);
      text-shadow: 0 0 20px rgba(168, 230, 207, 0.5);
    }

    .logo::before {
      content: '<';
      color: #A8E6CF;
      transition: all 0.3s ease;
    }

    .logo::after {
      content: '/>';
      color: #A8E6CF;
      transition: all 0.3s ease;
    }

    .logo:hover::before,
    .logo:hover::after {
      color: #ffffff;
      text-shadow: 0 0 10px #A8E6CF;
    }

    .nav-links {
      display: flex;
      gap: 32px;
      align-items: center;
      justify-content: center;
    }

    .nav-links.mobile {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      background: rgba(0, 32, 63, 0.98);
      flex-direction: column;
      padding: 24px;
      gap: 20px;
    }

    .nav-links.mobile.open {
      display: flex;
    }

    .nav-link {
      background: none;
      border: none;
      color: #cccccc;
      cursor: pointer;
      font-size: 16px;
      font-weight: 500;
      text-transform: uppercase;
      transition: all 0.4s ease;
      position: relative;
      padding: 8px 16px;
      border-radius: 8px;
      overflow: hidden;
    }

    .nav-link::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(168, 230, 207, 0.2), transparent);
      transition: left 0.5s ease;
    }

    .nav-link:hover::before {
      left: 100%;
    }

    .nav-link:hover,
    .nav-link.active {
      color: #A8E6CF;
      transform: translateY(-2px);
      box-shadow: 0 4px 15px rgba(168, 230, 207, 0.3);
    }

    .nav-link.home {
      background: linear-gradient(45deg, #A8E6CF, #7FD3B3);
      color: #00203F;
      padding: 8px 16px;
      border-radius: 20px;
      font-weight: 600;
      animation: pulse 2s ease-in-out infinite alternate;
    }

    .nav-link.home:hover {
      transform: translateY(-3px) scale(1.05);
      box-shadow: 0 8px 25px rgba(168, 230, 207, 0.5);
    }

    .nav-link.resume {
      background: linear-gradient(45deg, #A8E6CF, #7FD3B3);
      color: #00203F;
      padding: 8px 16px;
      border-radius: 20px;
      font-weight: 600;
      animation: pulse 2s ease-in-out infinite alternate;
      animation-delay: 1s;
    }

    .nav-link.resume:hover {
      transform: translateY(-3px) scale(1.05);
      box-shadow: 0 8px 25px rgba(168, 230, 207, 0.5);
    }

    @keyframes pulse {
      from { box-shadow: 0 0 10px rgba(168, 230, 207, 0.3); }
      to { box-shadow: 0 0 20px rgba(168, 230, 207, 0.6); }
    }

    .menu-toggle {
      display: none;
      background: none;
      border: 2px solid #A8E6CF;
      color: #A8E6CF;
      cursor: pointer;
      padding: 8px;
      border-radius: 8px;
    }

    @media (max-width: 768px) {
      .nav-links {
        display: none;
      }
      
      .menu-toggle {
        display: block;
      }
    }

    .hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
      position: relative;
      overflow: hidden;
    }

    .hero-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 60px;
      align-items: center;
      width: 100%;
      min-height: 80vh;
    }

    .hero-left {
      z-index: 2;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .hero-greeting {
      font-size: 20px;
      color: #cccccc;
      margin-bottom: 16px;
    }

    .hero-greeting::before {
      content: '👋 ';
    }

    .hero-title {
      font-family: 'Kaushan Script', cursive, sans-serif;
      font-size: clamp(40px, 6vw, 72px);
      font-weight: 400;
      margin-bottom: 24px;
      color: transparent;
      background: linear-gradient(90deg, #A8E6CF 0%, #A8E6CF 100%);
      background-size: 0% 100%;
      background-repeat: no-repeat;
      -webkit-background-clip: text;
      background-clip: text;
      line-height: 1.1;
      animation: handwriteText 3s ease-in-out 0.5s forwards;
      position: relative;
    }

    @keyframes handwriteText {
      0% { background-size: 0% 100%; }
      100% { background-size: 100% 100%; }
    }

    .hero-title::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 3px;
      background: linear-gradient(90deg, #A8E6CF, transparent);
      animation: drawUnderline 1s ease-out 3.5s forwards;
    }

    @keyframes drawUnderline {
      0% { width: 0; }
      100% { width: 60%; }
    }

    .hero-role {
      font-family: 'Dancing Script', cursive, sans-serif;
      font-size: 28px;
      color: #A8E6CF;
      margin-bottom: 8px;
      font-weight: 500;
      animation: typewriter 2s steps(20) 2s both;
      overflow: hidden;
      white-space: nowrap;
      border-right: 2px solid #A8E6CF;
    }

    @keyframes typewriter {
      from { 
        width: 0; 
        border-right: 2px solid #A8E6CF;
      }
      to { 
        width: 100%; 
        border-right: 2px solid transparent;
      }
    }

    .hero-cta {
      background: linear-gradient(45deg, #A8E6CF, #7FD3B3);
      color: #00203F;
      padding: 16px 32px;
      border: none;
      border-radius: 30px;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.4s ease;
      margin-bottom: 40px;
      position: relative;
      overflow: hidden;
    }

    .hero-cta::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
      transition: left 0.6s ease;
    }

    .hero-cta:hover::before {
      left: 100%;
    }

    .hero-cta:hover {
      transform: translateY(-3px) scale(1.05);
      box-shadow: 0 10px 30px rgba(168, 230, 207, 0.4);
      background: linear-gradient(45deg, #7FD3B3, #A8E6CF);
    }

    .hero-social {
      display: flex;
      gap: 16px;
    }

    .social-link {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 48px;
      height: 48px;
      background: #001B36;
      border-radius: 12px;
      color: #cccccc;
      text-decoration: none;
      transition: all 0.4s ease;
      position: relative;
      overflow: hidden;
    }

    .social-link::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 0;
      height: 0;
      background: radial-gradient(circle, rgba(168, 230, 207, 0.3), transparent);
      transition: all 0.4s ease;
      transform: translate(-50%, -50%);
    }

    .social-link:hover::before {
      width: 100px;
      height: 100px;
    }

    .social-link:hover {
      background: #A8E6CF;
      color: #00203F;
      transform: translateY(-4px) scale(1.1);
      box-shadow: 0 8px 25px rgba(168, 230, 207, 0.4);
    }

    .hero-right {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      height: 100%;
    }

    .hero-illustration {
      width: 400px;
      height: 400px;
      background: linear-gradient(135deg, #A8E6CF, #7FD3B3, #6BC9A3);
      border-radius: 50% 30% 60% 40%;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      animation: morph 8s ease-in-out infinite, glow 4s ease-in-out infinite alternate;
      box-shadow: 0 20px 60px rgba(168, 230, 207, 0.3);
    }

    @keyframes morph {
      0%, 100% { border-radius: 50% 30% 60% 40%; }
      25% { border-radius: 30% 60% 40% 50%; }
      50% { border-radius: 60% 40% 50% 30%; }
      75% { border-radius: 40% 50% 30% 60%; }
    }

    @keyframes glow {
      from {
        box-shadow: 0 20px 60px rgba(168, 230, 207, 0.3);
      }
      to {
        box-shadow: 0 25px 80px rgba(168, 230, 207, 0.6), 0 0 40px rgba(168, 230, 207, 0.4);
      }
    }

    .hero-illustration::before {
      content: '🧑🏻‍💻 🌐'; 
      font-size: 120px;
      position: absolute;
      z-index: 2;
    }

   @media (max-width: 768px) {
      .hero-content {
        grid-template-columns: 1fr;
        text-align: center;
        gap: 40px;
     }
     
     .hero-illustration {
      width: 300px;
      height: 300px;
    }

    .hero-illustration::before {
      font-size: 80px;
    }

    .loading-logo {
      font-size: 32px;
    }

    .loading-progress {
      width: 250px;
    }
  }

  .section {
    padding: 100px 0;
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
  }

  .section-alt {
    background: #001B36;
  }

  .section-title {
    font-family: 'Prata', serif;
    font-size: 48px;
    font-weight: 400;
    text-align: center;
    margin-bottom: 60px;
    color: #ffffff;
    position: relative;
    overflow: hidden;
  }

  .section-title.clip-reveal {
    animation: sectionTitleClip 1.5s 0.3s cubic-bezier(0.5, 0, 0.1, 1) both;
  }

  @keyframes sectionTitleClip {
    from {
      clip-path: polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%);
      transform: translateY(30px);
    }
    to {
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
      transform: translateY(0);
    }
  }

  .section-title::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 3px;
    background: linear-gradient(90deg, #A8E6CF, #7FD3B3);
    animation: expandLine 1.5s ease-out 2s forwards;
  }

 @keyframes slideInFromTop {
   from {
     opacity: 0;
     transform: translateY(-50px);
   }
   to {
     opacity: 1;
     transform: translateY(0);
   }
 }

 @keyframes expandLine {
   to { width: 100px; }
 }

 .about-grid {
   display: grid;
   grid-template-columns: 1fr 1fr;
   gap: 60px;
   align-items: start;
   max-width: 1000px;
   margin: 0 auto;
 }

 @media (max-width: 768px) {
   .about-grid {
     grid-template-columns: 1fr;
     gap: 40px;
   }
 }

 .about-text {
   font-size: 18px;
   color: #cccccc;
   line-height: 1.8;
   margin-bottom: 24px;
 }

 .about-info {
   display: flex;
   align-items: center;
   gap: 12px;
   color: #A8E6CF;
   margin-bottom: 16px;
   font-size: 16px;
 }

 .about-card {
   background: #002847;
   padding: 40px;
   border-radius: 16px;
   border: 1px solid #003559;
   height: fit-content;
 }

 .about-card h3 {
   color: #A8E6CF;
   margin-bottom: 24px;
   font-size: 24px;
   font-weight: 600;
 }

 .about-card ul {
   list-style: none;
 }

 .about-card li {
   color: #cccccc;
   margin-bottom: 12px;
   padding-left: 20px;
   position: relative;
   font-size: 16px;
 }

 .about-card li::before {
   content: '✓';
   color: #A8E6CF;
   position: absolute;
   left: 0;
   font-weight: bold;
 }

 .experience-item {
   background: #001B36;
   padding: 40px;
   margin-bottom: 30px;
   border-radius: 16px;
   border: 1px solid #002847;
   transition: all 0.3s ease;
   display: flex;
   flex-direction: column;
 }

 .experience-item:hover {
   transform: translateY(-5px);
   border-color: #A8E6CF;
 }

 .experience-header {
   display: flex;
   justify-content: space-between;
   align-items: flex-start;
   margin-bottom: 20px;
   flex-wrap: wrap;
   gap: 16px;
   min-height: 60px;
 }

 .experience-title {
   font-size: 24px;
   font-weight: 700;
   color: #A8E6CF;
   margin-bottom: 8px;
 }

 .experience-company {
   font-size: 18px;
   color: #ffffff;
   font-weight: 500;
 }

 .experience-duration {
   color: #cccccc;
   font-size: 14px;
   font-weight: 500;
   background: #002847;
   padding: 8px 16px;
   border-radius: 20px;
 }

 .experience-achievements {
   list-style: none;
   flex-grow: 1;
 }

 .experience-achievements li {
   color: #cccccc;
   margin-bottom: 10px;
   padding-left: 20px;
   position: relative;
   font-size: 16px;
   line-height: 1.6;
 }

 .experience-achievements li::before {
   content: '•';
   color: #A8E6CF;
   position: absolute;
   left: 0;
   font-weight: bold;
 }

 .skills-section {
   background: #001B36;
   padding: 100px 0;
 }

 .skills-container {
   max-width: 1200px;
   margin: 0 auto;
   padding: 0 24px;
 }

 .skills-category {
   margin-bottom: 60px;
 }

 .skills-category-title {
   font-family: 'Prata', serif;
   font-size: 32px;
   font-weight: 400;
   color: #A8E6CF;
   margin-bottom: 30px;
   border-bottom: 3px solid #A8E6CF;
   display: inline-block;
   padding-bottom: 8px;
   overflow: hidden;
 }

 .skills-category-title.clip-reveal {
   animation: skillsTitleClip 1s 0.5s cubic-bezier(0.5, 0, 0.1, 1) both;
 }

 @keyframes skillsTitleClip {
   from {
     clip-path: polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%);
     transform: translateX(-20px);
   }
   to {
     clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
     transform: translateX(0);
   }
 }

 .skills-items {
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
   gap: 16px;
   align-items: stretch;
 }

 .skill-item {
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   text-align: center;
   min-width: 120px;
   min-height: 120px;
   padding: 20px;
   background: #002847;
   border-radius: 12px;
   border: 1px solid #003559;
   transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
   position: relative;
   overflow: hidden;
 }

 .skill-item::before {
   content: '';
   position: absolute;
   top: 0;
   left: -100%;
   width: 100%;
   height: 100%;
   background: linear-gradient(90deg, transparent, rgba(168, 230, 207, 0.1), transparent);
   transition: left 0.6s ease;
 }

 .skill-item:hover::before {
   left: 100%;
 }

 .skill-item:hover {
   transform: translateY(-8px) scale(1.05);
   border-color: #A8E6CF;
   background: #003559;
   box-shadow: 0 15px 35px rgba(168, 230, 207, 0.3);
 }

 .skill-item:nth-child(even):hover {
   transform: translateY(-8px) scale(1.05) rotate(2deg);
 }

 .skill-item:nth-child(odd):hover {
   transform: translateY(-8px) scale(1.05) rotate(-2deg);
 }

 .skill-icon {
   width: 48px;
   height: 48px;
   margin-bottom: 12px;
   object-fit: contain;
   transition: all 0.3s ease;
 }

 .skill-item:hover .skill-icon {
   transform: scale(1.1);
   filter: brightness(1.2);
 }

 .skill-name {
   color: #ffffff;
   font-size: 16px;
   font-weight: 600;
   position: relative;
   z-index: 1;
 }

 .projects-grid {
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
   gap: 40px;
   max-width: 1400px;
   margin: 0 auto;
   align-items: stretch;
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }
}

.project-card {
  background: #001B36;
  border-radius: 16px;
  border: 1px solid #002847;
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  min-height: 600px;
}

.project-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, rgba(168, 230, 207, 0.1), transparent, rgba(168, 230, 207, 0.1));
  opacity: 0;
  transition: opacity 0.5s ease;
  z-index: 1;
}

.project-card:hover::before {
  opacity: 1;
}

.project-card:hover {
  transform: translateY(-15px) scale(1.02);
  border-color: #A8E6CF;
  box-shadow: 0 25px 60px rgba(168, 230, 207, 0.4);
}

.project-card.clip-reveal {
  animation: projectCardClip 1s 0.4s cubic-bezier(0.5, 0, 0.1, 1) both;
}

@keyframes projectCardClip {
  from {
    clip-path: polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%);
    transform: translateY(50px);
  }
  to {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    transform: translateY(0);
  }
}

.project-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-bottom: 1px solid #002847;
  transition: all 0.5s ease;
}

.project-card:hover .project-image {
  transform: scale(1.05);
  filter: brightness(1.1);
}

.project-content {
  padding: 30px;
  position: relative;
  z-index: 2;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.project-title {
  font-family: 'Prata', serif;
  font-size: 22px;
  font-weight: 400;
  color: #ffffff;
  margin-bottom: 16px;
  transition: all 0.3s ease;
  overflow: hidden;
}

.project-title.clip-reveal {
  animation: projectTitleClip 1s 0.6s cubic-bezier(0.5, 0, 0.1, 1) both;
}

@keyframes projectTitleClip {
  from {
    clip-path: polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%);
  }
  to {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
}

.project-card:hover .project-title {
  color: #A8E6CF;
  transform: translateX(5px);
}

.project-description {
  color: #cccccc;
  line-height: 1.6;
  margin-bottom: 20px;
  font-size: 15px;
  flex-grow: 1;
  min-height: 80px;
}

.project-features {
  margin-bottom: 20px;
}

.project-features h4 {
  color: #A8E6CF;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 8px;
}

.project-features ul {
  list-style: none;
}

.project-features li {
  color: #cccccc;
  font-size: 13px;
  margin-bottom: 4px;
  padding-left: 16px;
  position: relative;
}

.project-features li::before {
  content: '•';
  color: #A8E6CF;
  position: absolute;
  left: 0;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
}

.project-tech-tag {
  background: #002847;
  color: #A8E6CF;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
  border: 1px solid #A8E6CF;
}

.project-links {
  display: flex;
  gap: 16px;
  margin-top: auto;
}

.project-link {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #A8E6CF;
  text-decoration: none;
  transition: all 0.4s ease;
  padding: 8px 16px;
  border: 1px solid #A8E6CF;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  position: relative;
  overflow: hidden;
}

.project-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, #A8E6CF, transparent);
  transition: left 0.5s ease;
}

.project-link:hover::before {
  left: 100%;
}

.project-link:hover {
  background: #A8E6CF;
  color: #00203F;
  transform: translateX(5px) scale(1.05);
  box-shadow: 0 5px 15px rgba(168, 230, 207, 0.4);
}

.certifications-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 24px;
  max-width: 1000px;
  margin: 0 auto;
  align-items: stretch;
}

.certification-item {
  background: #002847;
  padding: 30px;
  border-radius: 12px;
  border: 1px solid #003559;
  transition: all 0.3s ease;
  min-height: 120px;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.certification-item.clip-reveal {
  animation: certificationClip 1s 0.3s cubic-bezier(0.5, 0, 0.1, 1) both;
}

@keyframes certificationClip {
  from {
    clip-path: polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%);
    transform: translateY(30px);
  }
  to {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    transform: translateY(0);
  }
}

.certification-item:hover {
  transform: translateY(-5px);
  border-color: #A8E6CF;
}

.certification-content {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  width: 100%;
}

.certification-content svg {
  color: #A8E6CF;
  margin-top: 4px;
  flex-shrink: 0;
}

.certification-text {
  color: #cccccc;
  font-size: 16px;
  line-height: 1.6;
  flex-grow: 1;
}

.contact-intro {
  text-align: center;
  margin-bottom: 60px;
}

.contact-intro p {
  font-size: 20px;
  color: #cccccc;
  margin-bottom: 32px;
  line-height: 1.6;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
  max-width: 1000px;
  margin: 0 auto;
  align-items: stretch;
}

.contact-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  background: #001B36;
  border-radius: 12px;
  border: 1px solid #002847;
  text-decoration: none;
  color: #ffffff;
  transition: all 0.3s ease;
  min-height: 140px;
}

.contact-item:hover {
  transform: translateY(-5px);
  border-color: #A8E6CF;
  background: #002847;
}

.contact-item svg {
  color: #A8E6CF;
  margin-bottom: 16px;
}

.contact-text {
  text-align: center;
  font-size: 14px;
  font-weight: 500;
}

.footer {
  background: #001B36;
  padding: 40px 0;
  border-top: 1px solid #002847;
  text-align: center;
}

.footer p {
  color: #cccccc;
  font-size: 14px;
}

.fade-in {
  opacity: 0;
  transform: translateY(50px);
  transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 768px) {
  .section {
    padding: 80px 0;
    min-height: auto;
  }
  
  .section-title {
    font-size: 36px;
  }
  
  .skills-items {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 12px;
  }
  
  .nav-content {
    padding: 16px 24px;
  }
  
  .logo {
    font-size: 20px;
  }

  .projects-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .project-image {
    height: 200px;
  }

  .skill-icon {
    width: 40px;
    height: 40px;
  }

  .skill-item {
    min-height: 100px;
    padding: 15px;
  }

  .contact-grid {
    grid-template-columns: 1fr;
  }

  .certifications-grid {
    grid-template-columns: 1fr;
  }

  .about-grid {
    align-items: center;
  }
}
`;

// Show loading screen
if (loading) {
return (
  <div>
    <style>{styles}</style>
    <div className={`loading-screen ${!loading ? 'fade-out' : ''}`}>
      <div className="loading-particles">
        <div className="loading-particle"></div>
        <div className="loading-particle"></div>
        <div className="loading-particle"></div>
        <div className="loading-particle"></div>
        <div className="loading-particle"></div>
        <div className="loading-particle"></div>
        <div className="loading-particle"></div>
        <div className="loading-particle"></div>
        <div className="loading-particle"></div>
        <div className="loading-particle"></div>
      </div>
      
      <div className="loading-logo">Manohar H</div>
      
      <div className="loading-spinner"></div>
      
      <div className="loading-text">Loading Portfolio...</div>
      
      <div className="loading-progress">
        <div className="loading-progress-bar"></div>
      </div>
      
      <div className="loading-dots">
        <div className="loading-dot"></div>
        <div className="loading-dot"></div>
        <div className="loading-dot"></div>
      </div>
      
      <div style={{
        fontFamily: "'Dancing Script', cursive",
        fontSize: '24px',
        color: '#A8E6CF',
        marginTop: '15px',
        opacity: 0,
        animation: 'handwriteSignature 2s ease-in-out 1.5s forwards'
      }}>~ Software Engineer</div>
    </div>
  </div>
);
}

return (
<div>
  <style>{styles}</style>
  
  {/* Animated Background Particles */}
  <div className="background-particles">
    <div className="particle"></div>
    <div className="particle"></div>
    <div className="particle"></div>
    <div className="particle"></div>
    <div className="particle"></div>
    <div className="particle"></div>
    <div className="particle"></div>
    <div className="particle"></div>
    <div className="particle"></div>
    <div className="particle"></div>
  </div>
  
  {/* Navigation */}
  <nav className="nav">
    <div className="container">
      <div className="nav-content">
        <div className="logo">Manohar H</div>
        <div className="nav-links">
          <button
            onClick={() => scrollToSection('home')}
            className={`nav-link ${activeSection === 'home' ? 'home active' : ''}`}
          >
            HOME
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
          >
            ABOUT ME
          </button>
          <button
            onClick={() => scrollToSection('experience')}
            className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}
          >
            EXPERIENCE
          </button>
          <button
            onClick={() => scrollToSection('skills')}
            className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
          >
            SKILLS
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
          >
            PROJECTS
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
          >
            CONTACT
          </button>
          <button onClick={downloadResume} className="nav-link resume">
            RESUME
          </button>
        </div>
        <button 
          className="menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div className={`nav-links mobile ${mobileMenuOpen ? 'open' : ''}`}>
          <button
            onClick={() => scrollToSection('home')}
            className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
          >
            HOME
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
          >
            ABOUT ME
          </button>
          <button
            onClick={() => scrollToSection('experience')}
            className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}
          >
            EXPERIENCE
          </button>
          <button
            onClick={() => scrollToSection('skills')}
            className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
          >
            SKILLS
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
          >
            PROJECTS
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
          >
            CONTACT
          </button>
          <button onClick={downloadResume} className="nav-link resume">
            RESUME
          </button>
        </div>
      </div>
    </div>
  </nav>

  {/* Hero Section */}
  <section id="home" className="hero">
    <div className="container">
      <div className={`hero-content fade-in ${isVisible.home ? 'visible' : ''}`}>
        <div className="hero-left">
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-title">Manohar H</h1>
          <p className="hero-role">Software Engineer</p>
          <button onClick={() => scrollToSection('contact')} className="hero-cta">
            Contact
          </button>
          <div className="hero-social">
            <a href="https://linkedin.com/in/manohar-h/" target="_blank" rel="noopener noreferrer" className="social-link">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com/m-manu619" target="_blank" rel="noopener noreferrer" className="social-link">
              <Github size={20} />
            </a>
            <a href="https://wa.me/918971979534" target="_blank" rel="noopener noreferrer" className="social-link">
              <Phone size={20} />
            </a>
            <a href="mailto:mmanohar619@gmail.com" className="social-link">
              <Mail size={20} />
            </a>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-illustration"></div>
        </div>
      </div>
    </div>
  </section>

  {/* About Section */}
  <section id="about" className="section section-alt">
    <div className="container">
      <div className={`fade-in ${isVisible.about ? 'visible' : ''}`}>
        <h2 className={`section-title ${isVisible.about ? 'clip-reveal' : ''}`}>About Me</h2>
        <div className="about-grid">
          <div>
            <p className="about-text">
              Detail-oriented professional with experience in technical support, project coordination, and cloud technologies. 
              Skilled in troubleshooting, workflow optimization, and software development.
            </p>
            <p className="about-text">
              Strong problem-solving skills, excellent communication, and ability to manage multiple tasks efficiently. 
              Passionate about leveraging modern technologies to create innovative solutions.
            </p>
            <div className="about-info">
              <MapPin size={20} />
              <span>Hassan, Karnataka, India</span>
            </div>
            <div className="about-info">
              <GraduationCap size={20} />
              <span>B.E. Computer Science</span>
            </div>
          </div>
          <div className="about-card">
            <h3>Quick Facts</h3>
            <ul>
              <li>2 years of industry experience</li>
              <li>AWS Solution Architect certified</li>
              <li>Proficient in Java, Python, and cloud technologies</li>
              <li>Experience with CI/CD and DevOps practices</li>
              <li>Strong background in technical support</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* Experience Section */}
  <section id="experience" className="section">
    <div className="container">
      <div className={`fade-in ${isVisible.experience ? 'visible' : ''}`}>
        <h2 className={`section-title ${isVisible.experience ? 'clip-reveal' : ''}`}>Experience</h2>
        {experience.map((job, index) => (
          <div key={index} className="experience-item">
            <div className="experience-header">
              <div>
                <h3 className="experience-title">{job.title}</h3>
                <p className="experience-company">{job.company} • {job.location}</p>
              </div>
              <span className="experience-duration">{job.duration}</span>
            </div>
            <ul className="experience-achievements">
              {job.achievements.map((achievement, i) => (
                <li key={i}>{achievement}</li>))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* Skills Section */}
  {/* Skills Section */}
  <section id="skills" className="skills-section">
    <div className="skills-container">
      <div className={`fade-in ${isVisible.skills ? 'visible' : ''}`}>
        <h2 className={`section-title ${isVisible.skills ? 'clip-reveal' : ''}`}>Skills</h2>
        
        {Object.entries(skills).map(([category, categoryData]) => (
          <div key={category} className="skills-category">
            <h3 className={`skills-category-title ${isVisible.skills ? 'clip-reveal' : ''}`}>{categoryData.title}</h3>
            <div className="skills-items">
              {categoryData.items.map((skill, index) => (
                <div key={index} className="skill-item">
                  <img 
                    src={skill.icon} 
                    alt={skill.name} 
                    className="skill-icon"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* Projects Section */}
  <section id="projects" className="section">
    <div className="container">
      <div className={`fade-in ${isVisible.projects ? 'visible' : ''}`}>
        <h2 className={`section-title ${isVisible.projects ? 'clip-reveal' : ''}`}>Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className={`project-card ${isVisible.projects ? 'clip-reveal' : ''}`}>
              <img 
                src={project.image} 
                alt={project.title} 
                className="project-image"
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="200" viewBox="0 0 400 200"%3E%3Crect width="400" height="200" fill="%23002847"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="%23A8E6CF" font-size="16" font-family="Arial"%3EProject Image%3C/text%3E%3C/svg%3E';
                }}/>
              <div className="project-content">
                <h3 className={`project-title ${isVisible.projects ? 'clip-reveal' : ''}`}>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="project-tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    <Github size={18} />
                    <span>View Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>

  {/* Certifications Section */}
  <section className="section section-alt">
    <div className="container">
      <h2 className="section-title">Certifications</h2>
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <div key={index} className="certification-item clip-reveal">
            <div className="certification-content">
              <Award size={24} />
              <p className="certification-text">{cert}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* Contact Section */}
  <section id="contact" className="section">
    <div className="container">
      <div className={`fade-in ${isVisible.contact ? 'visible' : ''}`}>
        <h2 className={`section-title ${isVisible.contact ? 'clip-reveal' : ''}`}>Get In Touch</h2>
        <div className="contact-intro">
          <p>I'm always excited to collaborate on impactful projects. Feel free to reach out!</p>
        </div>
        
        <div className="contact-grid">
          <a href="mailto:mmanohar619@gmail.com" className="contact-item">
            <Mail size={32} />
            <span className="contact-text">mmanohar619@gmail.com</span>
          </a>
          
          <a href="tel:+918971979534" className="contact-item">
            <Phone size={32} />
            <span className="contact-text">+91 8971979534</span>
          </a>
          
          <a href="https://linkedin.com/in/manohar-h/" target="_blank" rel="noopener noreferrer" className="contact-item">
            <Linkedin size={32} />
            <span className="contact-text">LinkedIn</span>
          </a>
          
          <a href="https://github.com/m-manu619" target="_blank" rel="noopener noreferrer" className="contact-item">
            <Github size={32} />
            <span className="contact-text">GitHub</span>
          </a>
        </div>
      </div>
    </div>
  </section>

  {/* Footer */}
  <footer className="footer">
    <div className="container">
      <p>© 2025 <span style={{
        fontFamily: "'Dancing Script', cursive", 
        fontSize: '18px', 
        color: '#A8E6CF'
      }}>Manohar H</span>. Built with React Vite</p>
    </div>
  </footer>
</div>
);
};

export default Portfolio;