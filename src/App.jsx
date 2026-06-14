import { useEffect } from "react";

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
    role: "Full-Stack Software Engineer",
    name: ["Rishabh", "Sharma"],
    subtitle:
      "Building scalable web applications with React.js, Node.js, and cloud integrations while crafting reliable products that feel intuitive from first click to final deployment.",
  },
  contact: {
    email: "rixhabh01@gmail.com",
    phone: "+91 9084221949",
    location: "Lucknow, Uttar Pradesh, India",
    linkedin: "https://linkedin.com/in/rishabhsharmaai",
    linkedinLabel: "LinkedIn",
    resume: "/sharmarishabh_resume.pdf",
  },
  about: {
    paragraphs: [
      "I'm Rishabh Sharma, a Full-Stack Software Engineer based in Lucknow, Uttar Pradesh. With 1.5+ years of experience, I build end-to-end web products across frontend interfaces, backend services, authentication systems, cloud integrations, and production APIs.",
      "At Aayan Infotech, I work on scalable backend services using Node.js, Express.js, and MongoDB while also delivering responsive React.js interfaces that support real product workflows.",
      "My work includes REST API development, admin dashboards, real-time integrations, Stripe payment workflows, Firebase features, and AWS S3 storage. I enjoy solving practical product problems in Agile teams and shipping software that is both maintainable and user-friendly.",
    ],
    stats: [
      { value: "1.5+", label: "Years experience" },
      { value: "2", label: "Professional roles" },
      { value: "2+", label: "Featured projects" },
      { value: "10+", label: "Technologies used" },
    ],
  },
  highlights: [
    {
      title: "Languages",
      items: ["JavaScript", "Java", "Python"],
    },
    {
      title: "Frontend",
      items: ["React.js", "AngularJS", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS"],
    },
    {
      title: "Backend",
      items: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"],
    },
    {
      title: "Database & Cloud",
      items: ["MongoDB", "Firebase", "AWS S3"],
    },
    {
      title: "Workflow & Tools",
      items: ["Git", "GitHub", "Agile / Scrum", "Performance Optimization"],
    },
    {
      title: "Special Interests",
      items: ["Stripe Payments", "Admin Dashboards", "Generative AI"],
    },
  ],
  experience: [
    {
      period: "Dec 2024 - Present",
      role: "Full-Stack Developer",
      company: "Aayan Infotech, Lucknow",
      bullets: [
        "Develop scalable backend services using Node.js, Express.js, and MongoDB.",
        "Build responsive user interfaces using React.js, HTML, CSS, and Bootstrap.",
        "Design and maintain RESTful APIs for production applications.",
        "Integrate Firebase services and AWS S3 for real-time features and file storage.",
        "Collaborate with cross-functional teams in Agile and Scrum environments.",
      ],
    },
    {
      period: "Jun 2024 - Nov 2024",
      role: "Full-Stack Developer Trainee",
      company: "Kmitr, Remote",
      bullets: [
        "Developed responsive frontend interfaces using React.js and Bootstrap.",
        "Built backend APIs with Node.js and Express.js using JWT authentication.",
        "Integrated frontend with backend services using REST APIs.",
        "Debugged applications and improved performance across the stack.",
      ],
    },
  ],
  projects: [
    {
      number: "01",
      title: "Trade Hunters",
      bullets: [
        "Built the backend architecture and admin dashboard from scratch.",
        "Implemented role-based authentication and granular access control.",
        "Integrated Stripe for secure subscription payment flows.",
        "Developed real-time chat functionality using Firebase.",
      ],
      stack: ["Node.js", "React.js", "Firebase", "Stripe", "MongoDB"],
    },
    {
      number: "02",
      title: "Back In The Ring",
      bullets: [
        "Developed secure REST APIs using Node.js and MongoDB.",
        "Implemented JWT authentication for Mentor, Instructor, and User roles.",
        "Built a comprehensive admin dashboard for platform management.",
      ],
      stack: ["Node.js", "MongoDB", "JWT", "REST API"],
    },
  ],
  education: [
    {
      title: "B.Tech - Computer Science & Engineering",
      school: "GLA University, Mathura",
      year: "2024",
      score: "CGPA 7.5",
    },
    {
      title: "Intermediate (Class XII)",
      school: "RPM Senior Secondary School, Hathras",
      year: "2020",
      score: "72.8%",
    },
  ],
};

function SectionHeader({ number, title }) {
  return (
    <div className="section-header">
      <span className="section-num">{number}</span>
      <h2 className="section-title">{title}</h2>
      <div className="section-line"></div>
    </div>
  );
}

function Icon({ children }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      {children}
    </svg>
  );
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
      rx += (mx - rx - 18) * 0.15;
      ry += (my - ry - 18) * 0.15;
      ring.style.left = `${rx}px`;
      ring.style.top = `${ry}px`;
      frame = window.requestAnimationFrame(animateRing);
    };

    const interactive = document.querySelectorAll("a");
    const onEnter = () => {
      cursor.style.transform = "scale(2)";
      ring.style.transform = "scale(1.5)";
      ring.style.borderColor = "var(--accent)";
    };
    const onLeave = () => {
      cursor.style.transform = "scale(1)";
      ring.style.transform = "scale(1)";
      ring.style.borderColor = "rgba(0,229,255,0.4)";
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
      { threshold: 0.15 }
    );

    const targets = document.querySelectorAll(".exp-item, .project-card");
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
          Open to work
        </div>
      </nav>

      <main>
        <section className="hero">
          <div className="hero-bg-glow"></div>
          <div className="hero-bg-glow2"></div>
          <div className="hero-tag">{portfolio.hero.role}</div>
          <h1 className="hero-name">
            {portfolio.hero.name[0]}
            <br />
            <span className="accent-word">{portfolio.hero.name[1]}</span>
          </h1>
          <p className="hero-subtitle">{portfolio.hero.subtitle}</p>
          <div className="hero-cta">
            <a href={`mailto:${portfolio.contact.email}`} className="btn btn-primary">
              <Icon>
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </Icon>
              Get in touch
            </a>
            <a href="#projects" className="btn btn-outline">
              <Icon>
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </Icon>
              View projects
            </a>
            <a href={portfolio.contact.resume} target="_blank" rel="noreferrer" className="btn btn-outline">
              Resume
            </a>
          </div>
          <div className="scroll-hint">
            <div className="scroll-line"></div>
            Scroll to explore
          </div>
        </section>

        <section id="about">
          <SectionHeader number="01" title="About" />
          <div className="about-grid">
            <div className="about-text">
              {portfolio.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="about-stats">
              {portfolio.about.stats.map((stat) => (
                <div className="stat-card" key={stat.label}>
                  <div className="stat-num">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="full-bleed" id="skills">
          <div className="section-shell">
            <SectionHeader number="02" title="Skills" />
            <div className="skills-grid">
              {portfolio.highlights.map((group) => (
                <div className="skill-group" key={group.title}>
                  <div className="skill-group-title">{group.title}</div>
                  <div className="skill-tags">
                    {group.items.map((item) => (
                      <span className="skill-tag" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience">
          <SectionHeader number="03" title="Experience" />
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
            <SectionHeader number="04" title="Projects" />
            <div className="projects-grid">
              {portfolio.projects.map((project) => (
                <div className="project-card" key={project.title}>
                  <div className="project-num">{project.number}</div>
                  <div className="project-name">{project.title}</div>
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
          <SectionHeader number="05" title="Education" />
          <div className="edu-grid">
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
          </div>
        </section>

        <section className="full-bleed" id="contact">
          <div className="section-shell">
            <div className="contact-block">
              <div className="contact-pre">Let's work together</div>
              <h2 className="contact-heading">Got a project in mind?</h2>
              <p className="contact-sub">
                I'm always open to discussing new opportunities,
                <br />
                interesting projects, or just a good conversation about tech.
              </p>
              <div className="contact-links">
                <a href={`mailto:${portfolio.contact.email}`} className="contact-link">
                  <Icon>
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </Icon>
                  {portfolio.contact.email}
                </a>
                <a href={`tel:${portfolio.contact.phone.replace(/\s+/g, "")}`} className="contact-link">
                  <Icon>
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.5 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l.35-.35a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </Icon>
                  {portfolio.contact.phone}
                </a>
                <a href={portfolio.contact.linkedin} target="_blank" rel="noreferrer" className="contact-link">
                  <Icon>
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </Icon>
                  {portfolio.contact.linkedinLabel}
                </a>
                <a href={portfolio.contact.resume} target="_blank" rel="noreferrer" className="contact-link">
                  <Icon>
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </Icon>
                  Resume
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>Copyright 2026 Rishabh Sharma - All rights reserved.</span>
        <span>{portfolio.contact.location}</span>
      </footer>
    </>
  );
}

export default App;
