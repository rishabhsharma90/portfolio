import { useEffect } from "react";
import {
  FiArrowRight,
  FiAward,
  FiBriefcase,
  FiCloud,
  FiCode,
  FiCpu,
  FiDownload,
  FiGithub,
  FiGlobe,
  FiInbox,
  FiLayers,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiMonitor,
  FiPhone,
  FiSend,
  FiServer,
  FiStar,
  FiTrendingUp,
  FiZap,
} from "react-icons/fi";
import {
  SiBootstrap,
  SiExpress,
  SiFirebase,
  SiGit,
  SiGithub,
  SiGooglemaps,
  SiHtml5,
  SiJavascript,
  SiLangchain,
  SiMongodb,
  SiMongoose,
  SiNodedotjs,
  SiOpenai,
  SiPaypal,
  SiPython,
  SiReact,
  SiRedis,
  SiRazorpay,
  SiStripe,
  SiTailwindcss,
} from "react-icons/si";

const portfolio = {
  nav: [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ],
  hero: {
    role: "Full-Stack Software Engineer - Backend Lead - MERN Stack",
    name: ["Rishabh", "Sharma"],
    label: "Full-Stack Engineer",
    subtitle:
      "I build fast-moving digital products across backend architecture, payments, realtime systems, admin panels, and full-stack product experiences that feel production-ready from day one.",
    badges: [
      "Open to relocation / remote",
      "Backend-heavy full-stack",
      "Startup-friendly ownership",
    ],
    highlights: ["Node.js", "React.js", "Payments", "Realtime", "AI Workflows"],
    metrics: [
      { value: "5+", label: "Products shipped with backend ownership" },
      { value: "4", label: "Live products handled simultaneously" },
      { value: "100+", label: "Monthly payment transactions processed" },
      { value: "1,000+", label: "Notifications delivered daily" },
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
      "My recent work spans Stripe, Razorpay, PayPal, eWay, AWS services, Redis, BullMQ, Firebase, Google Maps APIs, and AI-oriented experimentation. I enjoy environments where ownership, speed, and engineering quality all matter together.",
    ],
    stats: [
      { value: "~2", label: "Years of focused full-stack experience" },
      { value: "35%", label: "API response improvement on optimized systems" },
      { value: "60%", label: "Ops reduction on admin-heavy products" },
      { value: "65%", label: "Catalog load improvement on e-commerce flows" },
    ],
    cards: [
      {
        icon: FiServer,
        title: "Backend first mindset",
        copy: "APIs, auth, queues, cloud integrations, caching, and scalable platform workflows.",
      },
      {
        icon: FiZap,
        title: "Product delivery speed",
        copy: "Comfortable owning large slices of the stack and shipping quickly under real constraints.",
      },
      {
        icon: FiTrendingUp,
        title: "Impact-focused engineering",
        copy: "I care about faster systems, cleaner operations, and products that feel smoother for users.",
      },
    ],
    quote:
      "I enjoy owning the hard middle between product ambition and engineering reality, then turning it into something stable, fast, and genuinely polished.",
  },
  skillGroups: [
    {
      title: "Languages",
      tone: "mint",
      items: [
        { name: "JavaScript (ES6+)", icon: SiJavascript },
        { name: "Python", icon: SiPython },
        { name: "Java", icon: FiCode },
      ],
    },
    {
      title: "Frontend",
      tone: "blue",
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
      tone: "pink",
      items: [
        { name: "Node.js", icon: SiNodedotjs },
        { name: "Express.js", icon: SiExpress },
        { name: "REST API Design", icon: FiServer },
        { name: "JWT Auth", icon: FiCpu },
        { name: "RBAC", icon: FiBriefcase },
      ],
    },
    {
      title: "Databases and Queueing",
      tone: "orange",
      items: [
        { name: "MongoDB", icon: SiMongodb },
        { name: "Mongoose", icon: SiMongoose },
        { name: "Redis", icon: SiRedis },
        { name: "BullMQ", icon: FiInbox },
      ],
    },
    {
      title: "Cloud and Realtime",
      tone: "violet",
      items: [
        { name: "AWS S3", icon: FiCloud },
        { name: "AWS SNS", icon: FiCloud },
        { name: "AWS Lambda", icon: FiCloud },
        { name: "Firebase", icon: SiFirebase },
      ],
    },
    {
      title: "Payments and Integrations",
      tone: "lime",
      items: [
        { name: "Stripe", icon: SiStripe },
        { name: "Razorpay", icon: SiRazorpay },
        { name: "PayPal", icon: SiPaypal },
        { name: "Google Maps API", icon: SiGooglemaps },
        { name: "Nodemailer", icon: FiMail },
      ],
    },
    {
      title: "AI and ML",
      tone: "cyan",
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
      tone: "rose",
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
      tone: "mint",
      bullets: [
        "Built two complete platform versions solo, including English and fully bilingual Arabic-English experiences with language-aware notifications, emails, chat, and data delivery.",
        "Engineered location-based job matching and subscription models across Pay-Per-Lead, Monthly, and Annual tiers, with Stripe webhook flows for upgrades, renewals, and cancellations.",
        "Built realtime chat using Firebase, AWS Lambda-powered chat translation, and a BullMQ plus Redis plus AWS SNS notification system delivering 1,000+ push and email notifications per day.",
        "Developed a comprehensive admin panel for users, providers, subscriptions, job listings, and analytics, reducing manual operations by around 60%.",
      ],
      stack: ["Node.js", "MongoDB", "Firebase", "Stripe", "AWS Lambda", "Redis"],
    },
    {
      number: "02",
      title: "Multi-Branch Food E-Commerce Platform",
      subtitle: "Italian restaurant chain",
      tone: "orange",
      bullets: [
        "Served as sole backend and admin panel engineer for a multi-branch delivery platform managing 6,000+ SKUs with ERP sync, location-based branch routing, and inter-city courier capability.",
        "Built slot-based delivery flows for Standard, Slot-Based, and Pre-Midnight delivery, with dynamic pricing and automated courier and agent assignment that reduced manual dispatch effort by around 70%.",
        "Implemented Redis caching for fast product availability checks across 6,000+ SKUs, cutting average catalog load time by about 65%.",
        "Built a granular 4-role admin panel with chat support, SMS, email workflows, and operational controls.",
      ],
      stack: ["Node.js", "React.js", "Redis", "BullMQ", "Razorpay", "Google Maps API"],
    },
    {
      number: "03",
      title: "Mentorship and Rehabilitation Management System",
      subtitle: "Role-based learning and milestone platform",
      tone: "blue",
      bullets: [
        "Built the complete backend and admin panel solo for a 4-tier role hierarchy covering Mentor, Instructor, User, and Student or Prisoner access.",
        "Implemented scoped JWT-secured permissions, location-based session management, attendance tracking, content access, and configurable journal visibility.",
        "Developed a certification and milestone engine that tracked 300+ student journeys with structured progress workflows.",
      ],
      stack: ["Node.js", "MongoDB", "Firebase", "JWT", "Google Maps API"],
    },
    {
      number: "04",
      title: "Agricultural AI Agent",
      subtitle: "Exploratory AI and ML project",
      tone: "violet",
      bullets: [
        "Built an AI agent around agricultural use cases while exploring RAG pipelines and vector embeddings.",
        "Focused on practical retrieval flows, prompt design, and agentic responses grounded in structured knowledge.",
      ],
      stack: ["Generative AI", "RAG", "Vector Embeddings", "LangChain"],
    },
  ],
  certifications: [
    "Full-Stack Web Development - Udemy",
    "Data Structures and Algorithms - Coursera",
    "AWS Certified Developer - Associate target Q3 2025",
  ],
};

function SectionHeader({ kicker, title, intro }) {
  return (
    <div className="section-header reveal">
      <div className="section-kicker">{kicker}</div>
      <div className="section-title-wrap">
        <h2 className="section-title">{title}</h2>
        <p className="section-intro">{intro}</p>
      </div>
    </div>
  );
}

function SkillIcon({ icon: IconComponent }) {
  return <IconComponent className="skill-icon" aria-hidden="true" />;
}

function App() {
  useEffect(() => {
    const cursor = document.getElementById("cursor");
    const ring = document.getElementById("cursorRing");

    if (!cursor || !ring || window.innerWidth <= 768) {
      return undefined;
    }

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

    const interactive = document.querySelectorAll("a, .skill-pill, .project-card, .glass-card");
    const onEnter = () => {
      cursor.style.transform = "scale(2)";
      ring.style.transform = "scale(1.35)";
      ring.style.borderColor = "var(--accent)";
    };
    const onLeave = () => {
      cursor.style.transform = "scale(1)";
      ring.style.transform = "scale(1)";
      ring.style.borderColor = "rgba(255,255,255,0.24)";
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

    const targets = document.querySelectorAll(".reveal, .timeline-card, .project-card");
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

      <nav className="topbar">
        <div className="nav-logo">
          <span className="nav-logo-mark">RS</span>
          <span className="nav-logo-text">Rishabh Sharma</span>
        </div>
        <ul className="nav-links">
          {portfolio.nav.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <div className="nav-status">
          <div className="status-dot"></div>
          Open to work
        </div>
      </nav>

      <main>
        <section className="hero">
          <div className="hero-noise"></div>
          <div className="hero-orb hero-orb-a"></div>
          <div className="hero-orb hero-orb-b"></div>
          <div className="hero-gridlines"></div>
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="hero-eyebrow reveal">
                <span>{portfolio.hero.label}</span>
                <span className="eyebrow-line"></span>
                <span>Backend, product, and platform systems</span>
              </div>
              <div className="hero-tag reveal">{portfolio.hero.role}</div>
              <h1 className="hero-name reveal">
                {portfolio.hero.name[0]}
                <br />
                <span>{portfolio.hero.name[1]}</span>
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
                  Hit me up
                </a>
                <a href="#projects" className="btn btn-secondary">
                  <FiArrowRight />
                  See the work
                </a>
                <a href={portfolio.contact.resume} target="_blank" rel="noreferrer" className="btn btn-ghost">
                  <FiDownload />
                  Resume
                </a>
              </div>

              <div className="hero-highlight-row reveal">
                {portfolio.hero.highlights.map((item) => (
                  <span className="hero-highlight" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="hero-side reveal">
              <div className="hero-premium-card glass-card">
                <div className="premium-card-top">
                  <div>
                    <div className="premium-label">Profile</div>
                    <div className="premium-name">Rishabh Sharma</div>
                  </div>
                  <div className="premium-badge">
                    <FiStar />
                  </div>
                </div>

                <div className="premium-role">Backend-led full-stack engineer for modern product teams.</div>

                <div className="premium-divider"></div>

                <div className="premium-meta">
                  <div>
                    <span>Base</span>
                    <strong>Lucknow, India</strong>
                  </div>
                  <div>
                    <span>Focus</span>
                    <strong>MERN, infra, product delivery</strong>
                  </div>
                </div>
              </div>

              <div className="hero-stack glass-card">
                <div className="stack-topline">
                  <span>Highlights</span>
                  <FiTrendingUp />
                </div>
                <div className="stack-headline">Engineering outcomes with product and ops impact</div>
                <div className="hero-mini-grid">
                  {portfolio.hero.metrics.map((metric) => (
                    <div className="mini-card" key={metric.label}>
                      <strong>{metric.value}</strong>
                      <span>{metric.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hero-links glass-card">
                <a href={portfolio.contact.linkedin} target="_blank" rel="noreferrer" className="social-pill">
                  <FiLinkedin />
                  LinkedIn
                </a>
                <a href={portfolio.contact.github} target="_blank" rel="noreferrer" className="social-pill">
                  <FiGithub />
                  GitHub
                </a>
                <a href={`tel:${portfolio.contact.phone.replace(/\s+/g, "")}`} className="social-pill">
                  <FiPhone />
                  Call
                </a>
                <div className="social-note">
                  <FiMapPin />
                  {portfolio.contact.location}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about">
          <SectionHeader
            kicker="About"
            title="Building full-stack products with backend ownership and startup speed."
            intro="I work best where architecture, shipping pace, and product thinking all need to move together."
          />
          <div className="about-layout">
            <div className="about-copy glass-card reveal">
              <div className="about-copy-top">
                <span>Profile narrative</span>
                <div className="about-copy-line"></div>
              </div>
              {portfolio.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <blockquote className="about-quote">{portfolio.about.quote}</blockquote>
            </div>
            <div className="about-side">
              <div className="stats-grid">
                {portfolio.about.stats.map((stat) => (
                  <div className="stat-card glass-card reveal" key={stat.label}>
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
              <div className="focus-grid">
                {portfolio.about.cards.map((card) => {
                  const Icon = card.icon;
                  return (
                    <div className="focus-card glass-card reveal" key={card.title}>
                      <div className="focus-icon">
                        <Icon />
                      </div>
                      <h3>{card.title}</h3>
                      <p>{card.copy}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section-tinted">
          <SectionHeader
            kicker="Stack"
            title="The tools I actually use to build, ship, and scale."
            intro="From APIs and queues to payments, cloud, and AI workflows."
          />
          <div className="skills-grid">
            {portfolio.skillGroups.map((group) => (
              <div className={`skill-group glass-card tone-${group.tone} reveal`} key={group.title}>
                <div className="skill-group-title">{group.title}</div>
                <div className="skill-pills">
                  {group.items.map((item) => (
                    <div className="skill-pill" key={item.name}>
                      <span className="skill-pill-icon">
                        <SkillIcon icon={item.icon} />
                      </span>
                      <span>{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="experience">
          <SectionHeader
            kicker="Experience"
            title="Independent ownership across products, infra, and delivery."
            intro="I like being the person who can take the messy middle of a product and turn it into stable shipping software."
          />
          <div className="timeline">
            {portfolio.experience.map((item) => (
              <article className="timeline-card glass-card" key={`${item.role}-${item.period}`}>
                <div className="timeline-top">
                  <div>
                    <div className="timeline-period">{item.period}</div>
                    <h3>{item.role}</h3>
                    <p>{item.company}</p>
                  </div>
                  <div className="timeline-badge">
                    <FiBriefcase />
                  </div>
                </div>
                <ul className="timeline-points">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section-tinted">
          <SectionHeader
            kicker="Projects"
            title="A mix of marketplaces, commerce, admin systems, and AI explorations."
            intro="The work below shows how I think about products, operations, infrastructure, and user-facing functionality together."
          />
          <div className="projects-grid">
            {portfolio.projects.map((project) => (
              <article className={`project-card glass-card tone-${project.tone}`} key={project.title}>
                <div className="project-top">
                  <div className="project-index">{project.number}</div>
                  <div className="project-copy">
                    <div className="project-subtitle">{project.subtitle}</div>
                    <h3>{project.title}</h3>
                  </div>
                </div>
                <ul className="project-points">
                  {project.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <div className="project-stack">
                  {project.stack.map((item) => (
                    <span className="project-chip" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact">
            <SectionHeader
              kicker="Contact"
              title="Let us build something ambitious, useful, and built to last."
              intro="Product teams, startups, freelance builds, backend-heavy roles, and collaborations are all welcome."
            />
          <div className="contact-layout">
            <div className="contact-card glass-card reveal">
              <div className="contact-heading">Available for product-driven roles and serious build work.</div>
              <p>
                If you need someone who can own backend logic, push a product across the finish line, and still care about the experience end to end, let us talk.
              </p>
              <div className="contact-actions">
                <a href={`mailto:${portfolio.contact.email}`} className="btn btn-primary">
                  <FiMail />
                  Email me
                </a>
                <a href={portfolio.contact.resume} target="_blank" rel="noreferrer" className="btn btn-ghost">
                  <FiDownload />
                  Resume
                </a>
              </div>
            </div>

            <div className="contact-side">
              <div className="contact-list glass-card reveal">
                <a href={`mailto:${portfolio.contact.email}`} className="contact-row">
                  <FiMail />
                  <span>{portfolio.contact.email}</span>
                </a>
                <a href={`tel:${portfolio.contact.phone.replace(/\s+/g, "")}`} className="contact-row">
                  <FiPhone />
                  <span>{portfolio.contact.phone}</span>
                </a>
                <a href={portfolio.contact.linkedin} target="_blank" rel="noreferrer" className="contact-row">
                  <FiLinkedin />
                  <span>linkedin.com/in/rishabhsharmaai</span>
                </a>
                <a href={portfolio.contact.github} target="_blank" rel="noreferrer" className="contact-row">
                  <FiGithub />
                  <span>github.com/rishabhsharmaai</span>
                </a>
                <div className="contact-row">
                  <FiMapPin />
                  <span>{portfolio.contact.location}</span>
                </div>
              </div>

              <div className="cert-box glass-card reveal">
                <div className="cert-title">Certifications and ongoing growth</div>
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
          </div>
        </section>
      </main>

      <footer>
        <span>Copyright 2026 Rishabh Sharma. Built with React.</span>
        <span className="footer-location">
          <FiMapPin />
          Lucknow, Uttar Pradesh, India
        </span>
      </footer>
    </>
  );
}

export default App;
