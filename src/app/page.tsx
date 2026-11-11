
"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import Navbar from "./Navbar";
import ScrollEffects from "./ScrollEffects";

/* ---------- data ---------- */

const si = (slug: string, color: string) =>
  `https://cdn.simpleicons.org/${slug}/${color}`;

const dev = (slug: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}/${slug}-original.svg`;

const toolkit: {
  number: string;
  title: string;
  items: [string, string][];
}[] = [
  {
    number: "01 / CODE",
    title: "Programming languages",
    items: [
      ["Python", si("python", "3776AB")],
      ["Java", dev("java")],
      ["C", si("c", "A8B9CC")],
      ["JavaScript", si("javascript", "F7DF1E")],
    ],
  },
  {
    number: "02 / WEB",
    title: "Web development",
    items: [
      ["HTML5", si("html5", "E34F26")],
      ["CSS3", si("css", "1572B6")],
      ["React", si("react", "61DAFB")],
      ["Next.js", si("nextdotjs", "F3F5EE")],
      ["Tailwind CSS", si("tailwindcss", "06B6D4")],
      ["PHP", si("php", "777BB4")],
      ["Node.js", si("nodedotjs", "5FA04E")],
    ],
  },
  {
    number: "03 / DATA",
    title: "Databases",
    items: [
      ["MySQL", si("mysql", "4479A1")],
      ["MongoDB", si("mongodb", "47A248")],
    ],
  },
  {
    number: "04 / BUILD",
    title: "Developer tools",
    items: [
      ["VS Code", dev("vscode")],
      ["Git", si("git", "F05032")],
      ["GitHub", si("github", "F3F5EE")],
      ["Postman", si("postman", "FF6C37")],
      ["Docker", si("docker", "2496ED")],
      ["Linux", si("linux", "FCC624")],
    ],
  },
  {
    number: "05 / DESIGN",
    title: "Design & creativity",
    items: [["Figma", si("figma", "F24E1E")]],
  },
];

const services = [
  {
    number: "01",
    tag: "WEBSITE",
    title: "A fast, mobile-first website",
    text: "Your sports, timings, photos, prices and location on one clean page that loads quickly on any phone.",
  },
  {
    number: "02",
    tag: "BOOKING",
    title: "Booking requests on WhatsApp",
    text: "Customers pick a slot and send the request to your WhatsApp in one tap. No more calls asking if the court is free.",
  },
  {
    number: "03",
    tag: "CONTACT",
    title: "Google Maps and one-tap contact",
    text: "Directions, call and WhatsApp buttons so customers can reach you without searching.",
  },
  {
    number: "04",
    tag: "SUPPORT",
    title: "Easy updates after launch",
    text: "Changed your timings or prices? Tell me and it's updated fast.",
  },
];

const termLines = [
  "$ compile curiosity.ts",
  "> reading ideas...",
  "> linking projects...",
  "> sharpening skills...",
  "✓ compiled successfully",
];

const marquee = [
  "DEVELOPMENT",
  "AI & ML",
  "PROBLEM SOLVING",
  "BUILDING PROJECTS",
];

const interests = [
  "AI & Machine Learning",
  "Software Development",
  "Creative Problem Solving",
  "Building Useful Projects",
];

/* ---------- project cards ---------- */

function Visual({
  cls,
  n,
  kind,
  footer,
  children,
}: {
  cls: string;
  n: string;
  kind: string;
  footer: string;
  children: ReactNode;
}) {
  return (
    <div className={`project-visual ${cls}`}>
      <div className="project-visual-top">
        <span>PROJECT / {n}</span>
        <span>{kind}</span>
      </div>

      {children}

      <div className="project-visual-bottom">
        <span>{footer}</span>
        <span>{n}</span>
      </div>
    </div>
  );
}

const projects = [
  {
    visual: (
      <Visual
        cls="findit-visual"
        n="01"
        kind="WEB DEVELOPMENT"
        footer="BUILT WITH CURIOSITY"
      >
        <div className="findit-art">
          <div className="findit-window">
            <div className="window-bar">
              <span></span>
              <span></span>
              <span></span>
              <small>findit / campus</small>
            </div>

            <div className="window-content">
              <span className="mock-label">CAMPUS LOST & FOUND</span>

              <h3>
                Lost something?
                <br />
                Find it here.
              </h3>

              <div className="mock-search">
                Search for an item... <span>↗</span>
              </div>

              <div className="mock-items">
                <span>📱 Electronics</span>
                <span>🎒 Accessories</span>
                <span>📚 Books</span>
              </div>
            </div>
          </div>

          <span className="visual-orbit orbit-one"></span>
          <span className="visual-orbit orbit-two"></span>
        </div>
      </Visual>
    ),
    type: "01 / WEB PROJECT",
    status: "IN DEVELOPMENT",
    concept: false,
    title: "FindIt — Campus Lost & Found",
    text: "A campus-focused lost-and-found platform where students can report missing items, browse listings and reconnect with their belongings.",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    href: "https://github.com/AyushSingh29-03/Findit-website-project-",
    cta: "View on GitHub",
  },
  {
    visual: (
      <Visual
        cls="cyclone-visual"
        n="02"
        kind="AI & DATA"
        footer="FORECASTING RISK. PROTECTING LIVES."
      >
        <div className="cyclone-art">
          <div className="cyclone-ring ring-one"></div>
          <div className="cyclone-ring ring-two"></div>
          <div className="cyclone-ring ring-three"></div>

          <div className="cyclone-center">
            <span>CYCLONE</span>
            <strong>SHIELD</strong>
            <small>RISK INTELLIGENCE</small>
          </div>

          <span className="cyclone-coordinate coordinate-one">
            18.52° N
          </span>

          <span className="cyclone-coordinate coordinate-two">
            72.87° E
          </span>
        </div>
      </Visual>
    ),
    type: "02 / AI CONCEPT",
    status: "CONCEPT",
    concept: true,
    title: "Cyclone Shield",
    text: "An AI-powered disaster preparedness concept exploring cyclone-impact forecasting, infrastructure vulnerability assessment and data-driven risk intelligence.",
    tags: ["AI / ML", "Data Analysis", "Weather Data", "Risk Mapping"],
    href: "https://lnkd.in/p/d5BP2AsN",
    cta: "Read project story",
  },
];

/* ---------- page ---------- */

export default function Home() {
  const socials = [
    {
      label: "GitHub",
      href: "https://github.com/AyushSingh29-03",
      external: true,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/visit-ayush-singh/",
      external: true,
    },
    {
      label: "Email",
      href: "mailto:ayush.connect09@gmail.com",
      external: false,
    },
  ];

  return (
    <main>
      <ScrollEffects />
      <div className="scroll-progress" aria-hidden="true" />
      <Navbar />

      {/* HERO */}
      <section className="hero" id="home">
        <div className="container hero-content">
          <h1 className="hero-title">
            <span className="word" style={{ animationDelay: "0.15s" }}>
              Curiosity,
            </span>
            <br />
            <span
              className="word accent"
              style={{ animationDelay: "0.45s" }}
            >
              compiled.
            </span>
          </h1>

          <div className="hero-actions">
            <a href="#work" className="button button-light">
              Explore my work <span>↗</span>
            </a>
          </div>

          <div className="hero-terminal" aria-hidden="true">
            <div className="term-window">
              <div className="term-bar">
                <span></span>
                <span></span>
                <span></span>
                <small>zsh — curiosity.ts</small>
              </div>

              <div className="term-body">
                {termLines.map((line, i) => (
                  <div className={`term-line t${i + 1}`} key={line}>
                    {line}
                  </div>
                ))}

                <div className="term-prompt">
                  $ <span className="term-cursor" />
                </div>
              </div>
            </div>
          </div>

          <div className="hero-bottom">
            <span>SCROLL TO EXPLORE</span>
            <span className="scroll-arrow">↓</span>
            <span>01 / 06</span>
          </div>
        </div>
      </section>

      {/* PERSONAL INTRO */}
      <section className="intro-reveal" id="intro">
        <div className="intro-sticky">
          <div className="intro-topline">
            <span>BEYOND THE CODE</span>
            <span>A LITTLE ABOUT ME</span>
          </div>

          <div className="intro-content">
            <div className="intro-copy">
              <p className="intro-small">NOT JUST A DEVELOPER.</p>

              <h2>
                Curious
                <br />
                by nature<span>.</span>
              </h2>

              <p className="intro-description">
                I&apos;m a Computer Engineering student exploring technology,
                creativity and everything in between.
              </p>
            </div>

            <div className="intro-image-wrap">
              <div className="intro-image-glow" />

              <Image
                src="/images/ayush-cutout.png"
                alt="Ayush"
                className="intro-image"
                width={640}
                height={760}
                priority
              />

              <span className="intro-image-caption">
                THE PERSON BEHIND THE PROJECTS ↗
              </span>
            </div>

            <div className="intro-side-text">
              <span>LEARN.</span>
              <span>BUILD.</span>
              <span>REPEAT.</span>
            </div>
          </div>

          <div className="intro-bottomline">
            <span>AI / DEVELOPMENT / CURIOSITY</span>
            <span>SCROLL TO EXPLORE ↓</span>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee" aria-label="Technologies and interests">
        <div className="marquee-track">
          {[0, 1].map((n) => (
            <div
              className="marquee-group"
              key={n}
              aria-hidden={n === 1}
            >
              {marquee.map((item) => (
                <span key={item}>
                  {item} <b>✳</b>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="about-topline">
            <p className="section-label">01 — A LITTLE ABOUT ME</p>
            <span className="about-index">
              THE PERSON BEHIND THE CODE
            </span>
          </div>

          <div className="about-layout">
            <div className="about-main">
              <h2>
                I build things
                <br />
                <span>people actually use.</span>
              </h2>

              <p className="about-intro">
                I&apos;m a Computer Engineering student who likes solving real
                problems, like helping students find lost belongings or
                helping a local business get its customers online.
              </p>

              <p className="about-copy">
                I&apos;m exploring the world of software development and
                artificial intelligence, learning by experimenting, solving
                problems and building projects along the way. I don&apos;t
                just want to learn how things work — I want to create them.
              </p>

              <a href="#work" className="about-link">
                See what I&apos;m building <span>↗</span>
              </a>
            </div>

            <div className="about-side">
              <div className="about-card">
                <span className="about-card-number">01 / INTERESTS</span>
                <h3>Things that keep me curious.</h3>

                <div className="interest-list">
                  {interests.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>

              <div className="about-note">
                <span className="note-symbol">✳</span>
                <p>
                  Learn something.
                  <br />
                  Build something.
                  <br />
                  Make it better.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* SELECTED WORK */}
      <section id="work" className="work-section">
        <div className="container">
          <div className="work-heading">
            <div>
              <p className="section-label">03 — SELECTED WORK</p>
              <h2>
                Ideas turned into <span>projects.</span>
              </h2>
            </div>

            <p className="work-description">
              A look at what I&apos;m building and the ideas I&apos;m working
              towards.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((p) => (
              <article className="project-card" key={p.title}>
                {p.visual}

                <div className="project-info">
                  <div className="project-meta">
                    <span>{p.type}</span>

                    <span
                      className={
                        p.concept
                          ? "project-status concept-status"
                          : "project-status"
                      }
                    >
                      {p.status}
                    </span>
                  </div>

                  <h3>{p.title}</h3>
                  <p>{p.text}</p>

                  <div className="project-tags">
                    {p.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <div className="project-actions">
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-github"
                    >
                      {p.cta} <span>↗</span>
                    </a>

                    <span className="project-year">2026</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="work-footer">
            <div className="work-footer-content">
              <span>ALWAYS BUILDING SOMETHING NEW</span>
              <h3>Ideas dont stop here,more to come.</h3>
              <p>
                Every project is a new opportunity to learn, experiment and
                create something meaningful. More work will find its place
                here as the journey continues.
              </p>
            </div>

            <span className="work-footer-symbol">✳</span>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="services-section">
        <div className="container">
          <div className="services-heading">
            <p className="section-label">SERVICES — FOR BUSINESSES</p>

            <h2>
              What I build <span>for your business.</span>
            </h2>

            <p className="services-description">
              Simple, clear and ready to use. No jargon, just a website that
              helps your customers find and reach you.
            </p>
          </div>

          <div className="services-stack">
            {services.map((s) => (
              <article className="service-item" key={s.number}>
                <div className="service-splash" />

                <div className="service-card">
                  <span className="service-number">
                    {s.number} / {s.tag}
                  </span>

                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="toolkit-section">
        <div className="container">
          <div className="toolkit-header">
            <p className="toolkit-eyebrow">04 — THE TOOLKIT</p>

            <h2>
              Things I work with<span>.</span>
            </h2>

            <p>
              A growing collection of technologies, tools and ideas I use to
              build, experiment and learn.
            </p>
          </div>

          <div className="toolkit-content">
            <div className="toolkit-section-heading">
              <span>01</span>
              <h3>My toolkit</h3>
              <p>Technologies & tools</p>
            </div>

            {toolkit.map((category) => (
              <div className="toolkit-category" key={category.number}>
                <div className="toolkit-category-title">
                  <span>{category.number}</span>
                  <h4>{category.title}</h4>
                </div>

                <div className="sticker-grid">
                  {category.items.map(([name, src]) => (
                    <div className="tech-sticker" key={name}>
                      <Image
                        src={src}
                        alt={`${name} logo`}
                        width={28}
                        height={28}
                        unoptimized
                        loading="lazy"
                      />
                      <span>{name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CURRENTLY EXPLORING */}
          <div className="developing-section">
            <div className="exploring-header">
              <div>
                <p className="toolkit-eyebrow">
                  05 — WHAT I&apos;M EXPLORING
                </p>

                <h3>
                  Building towards <span>AI.</span>
                </h3>

                <p className="exploring-description">
                  Exploring the foundations of intelligent systems and how
                  to build practical AI-powered applications.
                </p>
              </div>

              <span className="learning-indicator">
                <span></span> LEARNING IN PROGRESS
              </span>
            </div>

            <div className="exploring-tags">
              {[
                "Machine Learning",
                "Deep Learning",
                "RAG",
                "AI Engineering",
              ].map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="contact-top">
            <p className="contact-eyebrow">06 — CONTACT</p>

            <span className="contact-availability">
              <span className="availability-dot" />
              OPEN TO CONNECT
            </span>
          </div>

          <div className="contact-main">
            <h2>
              Have an idea?
              <br />
              <span>Let&apos;s build it.</span>
            </h2>

            <div className="contact-actions">
              <a
                href="mailto:ayush.connect09@gmail.com"
                className="contact-email-button contact-secondary"
              >
                Send an email <span>↗</span>
              </a>
            </div>
          </div>

          <div className="contact-bottom">
            <div className="contact-socials">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  {...(s.external
                    ? {
                        target: "_blank",
                        rel: "noopener noreferrer",
                      }
                    : {})}
                >
                  {s.label} <span>↗</span>
                </a>
              ))}
            </div>

            <p>DESIGNED & BUILT BY AYUSH SINGH © 2026</p>
          </div>
        </div>
      </section>
    </main>
  );
}
