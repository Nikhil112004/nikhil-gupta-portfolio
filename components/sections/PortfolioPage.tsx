import type { ReactNode } from "react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  ExternalLink,
  Mail,
  MapPin,
} from "lucide-react";
import { CODING_PROFILES } from "@/data/codingProfiles";
import { EXPERIENCE } from "@/data/experience";
import { PROJECTS } from "@/data/projects";
import { SKILLS } from "@/data/skills";
import { SOCIAL_LINKS } from "@/data/socials";
import ThemeToggle from "@/components/layout/ThemeToggle";
import CodingProfiles from "@/components/sections/CodingProfiles";

type SectionProps = {
  id: string;
  title: string;
  meta?: string;
  children: ReactNode;
};

function FullWidthDivider() {
  return <div className="full-width-divider" aria-hidden="true" />;
}

function Section({ id, title, meta, children }: SectionProps) {
  return (
    <section id={id} className="portfolio-section">
      <div className="section-heading">
        <h2>{title}</h2>
        {meta && <span>{meta}</span>}
      </div>
      <FullWidthDivider />
        <div className="section-content">{children}</div>
        <FullWidthDivider />
    </section>
  );
}

function SocialCard({
  name,
  href,
  src,
}: {
  name: string;
  href: string;
  src: string;
}) {
  const handle = {
    GitHub: "Nikhil112004",
    LinkedIn: "nikhil-gupta",
    Twitter: "@NikhilGupta_11",
    LeetCode: "nikhil113016",
  }[name] ?? "Developer profile";
  const label = name === "Twitter" ? "X (formerly Twitter)" : name;

  return (
    <a className="social-card" href={href} target="_blank" rel="noreferrer">
      <img src={src} alt="" />
      <span>
        <strong>{label}</strong>
        <small>{handle}</small>
      </span>
      <ArrowUpRight size={15} aria-hidden="true" />
    </a>
  );
}

function ProfileHeader() {
  return (
    <>
      <header className="topbar">
        <a href="#home" className="wordmark">Portfolio</a>
        <nav aria-label="Quick links">
          <a href="https://github.com/Nikhil112004" aria-label="GitHub" target="_blank" rel="noreferrer">
            <img className="brand-icon" src="/icons/github.png" alt="" />
          </a>
          <ThemeToggle />
        </nav>
      </header>
      <div id="home" className="hero-banner">
        <span className="signature">Nikhil Gupta</span>
        <span className="hero-caption">FULL STACK ENGINEER · INDIA</span>
      </div>
      <FullWidthDivider />
      <div className="identity">
        <div className="avatar"><img src="/profile.png" alt="" /></div>
        <div className="identity-copy">
          <p className="eyebrow">FULL STACK ENGINEER · OPEN TO OPPORTUNITIES</p>
          <h1>Nikhil Gupta <span className="verified" aria-label="Verified profile">✓</span></h1>
          <p>Building thoughtful products for the web.</p>
        </div>
      </div>
    <FullWidthDivider />
      </>
  );
}

function ContactLinks() {
  return (
    <>
      <div className="contact-strip">
        <a href="mailto:nikhil113016@gmail.com"><Mail size={16} />nikhil113016@gmail.com</a>
        <span><MapPin size={16} />India</span>
      </div>
      <div className="social-grid">
        {SOCIAL_LINKS.filter((social) => social.name !== "Namaste-Dev").map((social) => <SocialCard key={social.name} {...social} />)}
      </div>
    <FullWidthDivider />
      </>
  );
}

function ExperienceList() {
  return EXPERIENCE.map((item) => (
    <article className="list-row experience-row" key={`${item.company}-${item.role}`}>
      <span className="row-icon"><BriefcaseBusiness size={15} /></span>
      <div>
        <h3>{item.company}</h3>
        <p>{item.role}</p>
        <small>{item.duration}</small>
        <p className="row-description">{item.description}</p>
      </div>
      <ArrowUpRight className="row-action" size={15} aria-hidden="true" />
    </article>
  ));
}

function ProjectList() {
  return PROJECTS.map((project) => (
    <article className="list-row project-row" key={project.title}>
      <span className="row-icon"><Code2 size={15} /></span>
      <div className="project-copy">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tag-list">
          {project.technologies.map((item) => <span key={item}>{item}</span>)}
        </div>
      </div>
      <a
        className="row-action"
        href={project.live || project.github}
        target="_blank"
        rel="noreferrer"
        aria-label={`Open ${project.title}`}
      >
        <ExternalLink size={15} />
      </a>
    </article>
  ));
}

function StackIcons() {
  const skills = SKILLS.flatMap((group) => group.skills);

  return (
    <div className="stack-icons">
      {skills.map((skill) => (
        <span className="stack-icon" key={skill.name} title={skill.name}>
          <img src={skill.icon} alt={skill.name} loading="lazy" />
        </span>
      ))}
    </div>
  );
}

export default function PortfolioPage() {
  return (
    <main className="portfolio-shell">
      <ProfileHeader />
      <ContactLinks />
      <Section id="about" title="About">
        <div className="prose">
          <p className="about-lede">
            Full stack developer who builds practical, user-focused web products across frontend and backend.
          </p>
          <ul className="about-highlights">
            <li>
              <strong>Product experience</strong>
              <span>Contributed to frontend and backend features during internships, including API integrations and responsive UI improvements.</span>
            </li>
            <li>
              <strong>Areas of interest</strong>
              <span>Frontend, Backend, Full-Stack, open source, and thoughtful user experiences.</span>
            </li>
          </ul>
        </div>
      </Section>
      <CodingProfiles />
      <Section id="stack" title="Stack"><StackIcons /></Section>
      <Section id="experience" title="Experience"><ExperienceList /></Section>
      <Section id="projects" title="Projects" meta={`${PROJECTS.length}`}><ProjectList /></Section>
      <Section id="brand" title="Brand">
        <div className="brand-preview"><span className="signature">Nikhil Gupta</span></div>
      </Section>
      <footer className="portfolio-footer">
        <span>Designed &amp; built by Nikhil Gupta</span>
        <span>
          <a href="https://github.com/Nikhil112004" aria-label="GitHub"><img className="brand-icon" src="/icons/github.png" alt="" /></a>
          <a href="https://linkedin.com/in/nikhil-gupta-28091a262" aria-label="LinkedIn"><img className="brand-icon" src="/icons/linkedin.png" alt="" /></a>
          <a href="mailto:nikhil113016@gmail.com" aria-label="Email"><Mail size={15} /></a>
        </span>
      </footer>
    </main>
  );
}













