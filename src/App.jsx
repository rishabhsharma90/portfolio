import { useEffect } from "react";
import {
  FiArrowRight,
  FiAward,
  FiBriefcase,
  FiCloud,
  FiCode,
  FiCpu,
  FiDatabase,
  FiDownload,
  FiGithub,
  FiGlobe,
  FiInbox,
  FiLayers,
  FiLinkedin,
  FiMonitor,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
  FiServer,
} from "react-icons/fi";
import {
  SiBootstrap,
  SiExpress,
  SiFirebase,
  SiGooglemaps,
  SiHtml5,
  SiJavascript,
  SiLangchain,
  SiMongodb,
  SiMongoose,
  SiNodedotjs,
  SiNodemailer,
  SiOpenai,
  SiPaypal,
  SiPython,
  SiReact,
  SiRedis,
  SiRazorpay,
  SiStripe,
  SiTailwindcss,
  SiGit,
  SiGithub,
} from "react-icons/si";

const portfolio = {
  nav: [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ],
  hero: {
    role: "Full-Stack Software Engineer · Backend Lead · MERN Stack",
    name: ["Rishabh", "Sharma"],
    subtitle:
      "Backend-focused full-stack engineer with ~2 years of experience building production APIs, RBAC systems, payment flows, realtime infrastructure, and admin panels across live MERN products.",
    badges: [
      "~2 years experience",
      "5+ completed projects",
      "4 live products managed",
      "Open to relocation / remote",
    ],
    metrics: [
      { value: "5+", label: "Projects owned as sole backend engineer" },
      { value: "100+", label: "Monthly payment transactions handled" },
      { value: "500+", label: "Scheduled email and SMS jobs per day" },
      { value: "1,000+", label: "Push and email notifications delivered daily" },
    ],
  },
  contact: {
    email: "rixhabh01@gmail.com",
    phone: "+91 9084221949",
    location: "Lucknow, Uttar Pradesh, India",
    linkedin: "https://linkedin.com/in/rishabhsharmaai",
    github: "https://github.com/rishabhsharmaai",
    resume: "/sharmarishabh_resume.pdf",
  },
  about: {
    paragraphs: [
      "I specialize in backend architecture, REST API design, admin panel development, and full-stack product delivery for production client applications on the MERN stack.",
      "At Aayan Infotech, I have worked as the sole backend engineer across 5+ completed projects while managing 4 simultaneous live products, independently building scalable APIs, realtime systems, payment integrations, queues, cloud workflows, and role-based access control.",
      "I am especially drawn to high-growth product and startup environments where ownership matters, technical quality compounds, and shipping practical systems quickly is part of the culture.",
    ],
    stats: [
      { value: "~2", label: "Years of focused full-stack experience" },
      { value: "4", label: "Live products currently managed" },
      { value: "5+", label: "Completed products with backend ownership" },
      { value: "6+", label: "Major integration categories shipped" },
    ],
  },
  skillGroups: [
    {
      title: "Languages",
      items: [
        { name: "JavaScript (ES6+)", icon: SiJavascript },
        { name: "Python", icon: SiPython },
        { name: "Java", icon: FiCode },
      ],
    },
    {
      title: "Frontend",
      items: [
        { name: "React.js", icon: SiReact },
        { name: "HTML5", icon: SiHtml5 },
        { name: "CSS3", icon: FiMonitor },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "Bootstrap", icon: SiBootstrap },
      ],
    },
    {
      title: "Backend",
      items: [
        { name: "Node.js", icon: SiNodedotjs },
        { name: "Express.js", icon: SiExpress },
        { name: "REST API Design", icon: FiServer },
        { name: "JWT Auth", icon: FiCpu },
        { name: "RBAC", icon: FiBriefcase },
      ],
    },
    {
      title: "Databases & Queueing",
      items: [
        { name: "MongoDB", icon: SiMongodb },
        { name: "Mongoose", icon: SiMongoose },
        { name: "Redis", icon: SiRedis },
        { name: "BullMQ", icon: FiInbox },
      ],
    },
    {
      title: "Cloud & Realtime",
      items: [
        { name: "AWS S3", icon: FiCloud },
        { name: "AWS SNS", icon: FiCloud },
        { name: "AWS Lambda", icon: FiCloud },
        { name: "Firebase", icon: SiFirebase },
      ],
    },
    {
      title: "Payments & Integrations",
      items: [
        { name: "Stripe", icon: SiStripe },
        { name: "Razorpay", icon: SiRazorpay },
        { name: "PayPal", icon: SiPaypal },
        { name: "Google Maps API", icon: SiGooglemaps },
        { name: "Nodemailer", icon: FiMail },
      ],
    },
    {
      title: "AI / ML",
      items: [
        { name: "Generative AI", icon: SiOpenai },
        { name: "Prompt Engineering", icon: FiCpu },
        { name: "RAG", icon: FiLayers },
        { name: "Vector Embeddings", icon: FiGlobe },
        { name: "LangChain", icon: SiLangchain },
        { name: "AI Agents", icon: FiSend },
      ],
    },
    {
      title: "Workflow",
      items: [
        { name: "Git", icon: SiGit },
        { name: "GitHub", icon: SiGithub },
        { name: "Agile", icon: FiBriefcase },
        { name: "Scrum", icon: FiBriefcase },
        { name: "Code Review", icon: FiCode },
        { name: "Performance Optimisation", icon: FiCpu },
      ],
    },
  ],
  experience: [
    {
      period: "Dec 2024 - Present",
      role: "Full-Stack Developer - Backend Lead",
      company: "Aayan Infotech | Lucknow, India",
      bullets: [
        "Sole backend engineer across 5+ completed client projects and 4 simultaneous live products, independently designing and deploying all server-side systems.",
        "Architected scalable REST APIs for marketplace, e-commerce, mentorship, and location-based platforms using Node.js, Express.js, and MongoDB, reducing average API response time by about 35% through indexing and query optimisation.",
        "Built RBAC systems supporting 3 to 5 user roles with JWT-secured routes, and integrated Stripe, Razorpay, PayPal, and eWay for 100+ monthly subscription and one-time transactions.",
        "Implemented realtime chat and push notifications with Firebase, and engineered BullMQ plus Redis background jobs processing 500+ scheduled email and SMS tasks daily with zero message loss.",
        "Integrated AWS S3, SNS, Lambda, Google Maps API, Nodemailer, and SMS gateways while coordinating delivery in Agile and Scrum sprints.",
      ],
    },
    {
      period: "Jun 2024 - Nov 2024",
      role: "Full-Stack Developer Trainee",
      company: "Kmitr | Remote",
      bullets: [
        "Built 8+ responsive React.js frontend modules and JWT-authenticated REST APIs with role-based access control in a remote Agile team of 6 engineers.",
        "Implemented standardized API error-handling and response patterns, reducing client-side integration errors by about 40% and saving an estimated 2 debugging hours per sprint.",
        "Contributed to sprint planning, code reviews, and documentation in a remote-first engineering workflow.",
      ],
    },
  ],
  projects: [
    {
      number: "01",
      title: "Subscription-Based Service Marketplace",
      subtitle: "Urban Company-style platform",
      bullets: [
        "Built two complete platform versions solo, including English and fully bilingual Arabic-English experiences with language-aware notifications, emails, chat, and data delivery.",
        "Engineered location-based job matching and subscription models across Pay-Per-Lead, Monthly, and Annual tiers, with Stripe webhook flows for upgrades, renewals, and cancellations.",
        "Built realtime chat using Firebase, AWS Lambda-powered chat translation, and a BullMQ plus Redis plus AWS SNS notification system delivering 1,000+ push and email notifications per day.",
        "Developed a comprehensive admin panel for users, providers, subscriptions, job listings, and analytics, reducing manual operations by around 60%.",
      ],
      stack: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Firebase",
        "Stripe",
        "AWS S3",
        "AWS SNS",
        "AWS Lambda",
        "BullMQ",
        "Redis",
      ],
    },
    {
      number: "02",
      title: "Multi-Branch Food E-Commerce Platform",
      subtitle: "Italian restaurant chain",
      bullets: [
        "Served as sole backend and admin panel engineer for a multi-branch delivery platform managing 6,000+ SKUs with ERP sync, location-based branch routing, and inter-city courier capability.",
        "Built slot-based delivery flows for Standard, Slot-Based, and Pre-Midnight delivery, with dynamic pricing and automated courier and agent assignment that reduced manual dispatch effort by around 70%.",
        "Implemented Redis caching for fast product availability checks across 6,000+ SKUs, cutting average catalog load time by about 65%.",
        "Built a granular 4-role admin panel with chat support, SMS, email workflows, and operational controls.",
      ],
      stack: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "React.js",
        "Redis",
        "BullMQ",
        "Razorpay",
        "Google Maps API",
      ],
    },
    {
      number: "03",
      title: "Mentorship & Rehabilitation Management System",
      subtitle: "Role-based learning and milestone platform",
      bullets: [
        "Built the complete backend and admin panel solo for a 4-tier role hierarchy covering Mentor, Instructor, User, and Student or Prisoner access.",
        "Implemented scoped JWT-secured permissions, location-based session management, attendance tracking, content access, and configurable journal visibility.",
        "Developed a certification and milestone engine that tracked 300+ student journeys with structured progress workflows.",
      ],
      stack: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Firebase",
        "JWT",
        "Google Maps API",
      ],
    },
    {
      number: "04",
      title: "Agricultural AI Agent",
      subtitle: "Exploratory AI / ML project",
      bullets: [
        "Built an AI agent around agricultural use cases while exploring RAG pipelines and vector embeddings.",
        "Focused on practical retrieval flows, prompt design, and agentic responses grounded in structured knowledge.",
      ],
      stack: ["Generative AI", "RAG", "Vector Embeddings", "LangChain"],
    },
  ],
  education: [
    {
      title: "B.Tech - Computer Science & Engineering",
      school: "GLA University | Mathura, India",
      year: "2024",
      score: "CGPA 7.5 / 10",
    },
  ],
  certifications: [
    "Full-Stack Web Development - Udemy",
    "Data Structures & Algorithms - Coursera",
    "AWS Certified Developer - Associate (target Q3 2025)",
  ],
};

function SectionHeader({ number, title, intro }) {
  return (
    <div className="section-header reveal">
      <div className="section-meta">
        <span className="section-num">{number}</span>
        <h2 className="section-title">{title}</h2>
      </div>
      <div className="section-line"></div>
      {intro ? <p className="section-intro">{intro}</p> : null}
    </div>
  );
}

function SkillIcon({ icon: IconComponent }) {
  return <IconComponent className="skill-icon" aria-hidden="true" />;
}

function App() {
  useEffect(() => {
    if (window.innerWidth <= 768) {
      return undefined;
    }

    const cursor = document.getElementById("cursor");
    const ring = document.getElementById("cursorRing");
    let mx = 0;
    let my = 0;
    let rx = 0;
    let ry = 0;
    let frame = 0;

    const onMove = (event) => {
      mx = event.clientX;
      my = event.clientY;
      cursor.style.left = `${mx - 5}px`;
      cursor.style.top = `${my - 5}px`;
    };

    const animateRing = () => {
      rx += (mx - rx - 18) * 0.12;
      ry += (my - ry - 18) * 0.12;
      ring.style.left = `${rx}px`;
      ring.style.top = `${ry}px`;
      frame = window.requestAnimationFrame(animateRing);
    };

    const interactive = document.querySelectorAll("a, .skill-item, .project-card, .stat-card");
    const onEnter = () => {
      cursor.style.transform = "scale(2)";
      ring.style.transform = "scale(1.4)";
      ring.style.borderColor = "var(--accent)";
    };
    const onLeave = () => {
      cursor.style.transform = "scale(1)";
      ring.style.transform = "scale(1)";
      ring.style.borderColor = "rgba(166,255,215,0.35)";
    };

    document.addEventListener("mousemove", onMove);
    interactive.forEach((node) => {
      node.addEventListener("mouseenter", onEnter);
      node.addEventListener("mouseleave", onLeave);
    });
    animateRing();

    return () => {
      document.removeEventListener("mousemove", onMove);
      interactive.forEach((node) => {
        node.removeEventListener("mouseenter", onEnter);
        node.removeEventListener("mouseleave", onLeave);
      });
      window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    const targets = document.querySelectorAll(".reveal, .exp-item, .project-card");
    targets.forEach((target) => observer.observe(target));

    return () => {
      targets.forEach((target) => observer.unobserve(target));
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className="cursor" id="cursor"></div>
      <div className="cursor-ring" id="cursorRing"></div>

      <nav>
        <div className="nav-logo">RS.</div>
        <ul className="nav-links">
          {portfolio.nav.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <div className="nav-status">
          <div className="status-dot"></div>
          Backend lead · open to work
        </div>
      </nav>

      <main>
        <section className="hero">
          <div className="hero-bg-glow"></div>
          <div className="hero-bg-glow2"></div>
          <div className="hero-bg-grid"></div>

          <div className="hero-tag">{portfolio.hero.role}</div>
          <h1 className="hero-name reveal">
            {portfolio.hero.name[0]}
            <br />
            <span className="accent-word">{portfolio.hero.name[1]}</span>
          </h1>
          <p className="hero-subtitle reveal">{portfolio.hero.subtitle}</p>

          <div className="hero-badges reveal">
            {portfolio.hero.badges.map((badge) => (
              <span className="hero-badge" key={badge}>
                {badge}
              </span>
            ))}
          </div>

          <div className="hero-cta reveal">
            <a href={`mailto:${portfolio.contact.email}`} className="btn btn-primary">
              <FiMail />
              Get in touch
            </a>
            <a href="#projects" className="btn btn-outline">
              <FiArrowRight />
              View projects
            </a>
            <a href={portfolio.contact.resume} target="_blank" rel="noreferrer" className="btn btn-outline">
              <FiDownload />
              Resume
            </a>
          </div>

          <div className="hero-metrics reveal">
            {portfolio.hero.metrics.map((metric, index) => (
              <div className="metric-card" key={metric.label} style={{ animationDelay: `${index * 0.08}s` }}>
                <div className="metric-value">{metric.value}</div>
                <div className="metric-label">{metric.label}</div>
              </div>
            ))}
          </div>

          <div className="scroll-hint">
            <div className="scroll-line"></div>
            Scroll to explore
          </div>
        </section>

        <section id="about">
          <SectionHeader
            number="01"
            title="About"
            intro="A resume-driven snapshot of where I create the most value: backend ownership, production integrations, and end-to-end product delivery."
          />
          <div className="about-grid">
            <div className="about-text reveal">
              {portfolio.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="about-stats">
              {portfolio.about.stats.map((stat, index) => (
                <div className="stat-card reveal" key={stat.label} style={{ animationDelay: `${index * 0.08}s` }}>
                  <div className="stat-num">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="full-bleed" id="skills">
          <div className="section-shell">
            <SectionHeader
              number="02"
              title="Skills"
              intro="Core technologies, integrations, and engineering practices pulled directly from the latest resume."
            />
            <div className="skills-grid enhanced">
              {portfolio.skillGroups.map((group, groupIndex) => (
                <div className="skill-group reveal" key={group.title} style={{ animationDelay: `${groupIndex * 0.06}s` }}>
                  <div className="skill-group-title">{group.title}</div>
                  <div className="skill-item-grid">
                    {group.items.map((item) => (
                      <div className="skill-item" key={item.name}>
                        <span className="skill-icon-wrap">
                          <SkillIcon icon={item.icon} />
                        </span>
                        <span className="skill-item-name">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience">
          <SectionHeader
            number="03"
            title="Experience"
            intro="The strongest theme across my recent work is ownership: designing systems, shipping them independently, and keeping them reliable under real usage."
          />
          <div className="exp-timeline">
            {portfolio.experience.map((item) => (
              <div className="exp-item" key={`${item.role}-${item.period}`}>
                <div className="exp-dot"></div>
                <div className="exp-period">{item.period}</div>
                <div className="exp-role">{item.role}</div>
                <div className="exp-company">{item.company}</div>
                <ul className="exp-bullets">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="full-bleed" id="projects">
          <div className="section-shell">
            <SectionHeader
              number="04"
              title="Projects"
              intro="Representative product work across services, commerce, operations, mentoring, and AI experimentation."
            />
            <div className="projects-grid expanded">
              {portfolio.projects.map((project, index) => (
                <div className="project-card" key={project.title} style={{ animationDelay: `${index * 0.08}s` }}>
                  <div className="project-num">{project.number}</div>
                  <div className="project-name">{project.title}</div>
                  <div className="project-subtitle">{project.subtitle}</div>
                  <ul className="project-desc">
                    {project.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                  <div className="project-chips">
                    {project.stack.map((item) => (
                      <span className="chip" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="education">
          <SectionHeader
            number="05"
            title="Education & Certifications"
            intro="Academic foundation plus ongoing upskilling around full-stack engineering and cloud development."
          />
          <div className="edu-grid reveal">
            {portfolio.education.map((item) => (
              <div className="edu-card" key={item.title}>
                <div className="edu-degree">{item.title}</div>
                <div className="edu-school">{item.school}</div>
                <div className="edu-meta">
                  <span className="edu-badge">{item.year}</span>
                  <span className="edu-badge highlight">{item.score}</span>
                </div>
              </div>
            ))}
            <div className="edu-card cert-card">
              <div className="edu-degree">Certifications</div>
              <div className="cert-list">
                {portfolio.certifications.map((item) => (
                  <div className="cert-item" key={item}>
                    <FiAward />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="full-bleed" id="contact">
          <div className="section-shell">
            <div className="contact-block reveal">
              <div className="contact-pre">Let's work together</div>
              <h2 className="contact-heading">Building product systems, APIs, and operations-ready platforms.</h2>
              <p className="contact-sub">
                I am looking for product teams and startups where strong backend thinking, practical execution,
                and full-stack ownership can create real momentum.
              </p>
              <div className="contact-links">
                <a href={`mailto:${portfolio.contact.email}`} className="contact-link">
                  <FiMail />
                  {portfolio.contact.email}
                </a>
                <a href={`tel:${portfolio.contact.phone.replace(/\s+/g, "")}`} className="contact-link">
                  <FiPhone />
                  {portfolio.contact.phone}
                </a>
                <a href={portfolio.contact.linkedin} target="_blank" rel="noreferrer" className="contact-link">
                  <FiLinkedin />
                  LinkedIn
                </a>
                <a href={portfolio.contact.github} target="_blank" rel="noreferrer" className="contact-link">
                  <FiGithub />
                  GitHub
                </a>
                <a href={portfolio.contact.resume} target="_blank" rel="noreferrer" className="contact-link">
                  <FiDownload />
                  Resume
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>Copyright 2026 Rishabh Sharma - All rights reserved.</span>
        <span className="footer-contact">
          <FiMapPin />
          {portfolio.contact.location}
        </span>
      </footer>
    </>
  );
}

export default App;
