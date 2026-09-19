import { useState } from "react";
import { useNavigate } from "react-router";
import ThemeToggle from "../components/ThemeToggle";

const PROJECTS = [
  {
    id: 1,
    slug: "fintech-onboarding",
    tag: "Case Study · Mobile App",
    title: "Redesigning Onboarding for a Fintech Super App",
    desc: "Cut drop-off by 38% by replacing a 9-step form with a progressive, conversational flow — increasing activation rates and reducing support tickets.",
    tools: ["Figma", "Maze", "Lottie"],
    year: "2024",
    accent: "#6c47ff",
    bg: "#110f1f",
  },
  {
    id: 2,
    slug: "enterprise-analytics",
    tag: "Case Study · SaaS Dashboard",
    title: "Enterprise Analytics Platform — 0 to 1 Design",
    desc: "Led end-to-end design of a B2B data platform used by 40+ enterprise clients. Built a design system that scaled to 200+ components across 4 product teams.",
    tools: ["Figma", "Storybook", "UserTesting"],
    year: "2023",
    accent: "#4f8aff",
    bg: "#0d0c1e",
  },
  {
    id: 3,
    slug: "checkout-conversion",
    tag: "Case Study · E-Commerce",
    title: "Checkout Conversion Uplift — A/B-Driven Redesign",
    desc: "Identified friction through heatmaps and session recordings, then designed and A/B tested a single-page checkout that lifted conversion by 21%.",
    tools: ["Figma", "Hotjar", "Optimizely"],
    year: "2023",
    accent: "#a855f7",
    bg: "#120f1f",
  },
  {
    id: 4,
    slug: "tokensync-plugin",
    tag: "Side Project · Design Tool",
    title: "TokenSync — Figma Plugin for Design Tokens",
    desc: "A Figma plugin that exports design tokens as JSON, CSS, and Tailwind config — used by 2,000+ designers to sync tokens between design and code.",
    tools: ["Figma API", "TypeScript", "Node.js"],
    year: "2022",
    accent: "#06d6a0",
    bg: "#0b0f18",
  },
];

const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const SKILL_GROUPS = [
  {
    category: "Design",
    skills: [
      "Product Strategy",
      "UX Research",
      "Interaction Design",
      "Visual Design",
      "Design Systems",
      "Prototyping",
      "Information Architecture",
      "Accessibility (WCAG)",
    ],
  },
  {
    category: "Tools",
    skills: ["Figma", "FigJam", "Maze", "Hotjar", "Storybook", "Lottie", "Framer", "Miro"],
  },
  {
    category: "Methods",
    skills: [
      "Design Sprints",
      "Jobs-to-be-Done",
      "Usability Testing",
      "A/B Testing",
      "Heuristic Evaluation",
      "Journey Mapping",
      "Card Sorting",
      "Agile / Scrum",
    ],
  },
];

const EXPERIENCE = [
  { role: "Senior Product Designer", company: "Accenture", period: "2022 — Present", type: "Full-time" },
  { role: "UX Designer", company: "Wipro", period: "2020 — 2022", type: "Full-time" },
  { role: "UI/UX Designer", company: "Infosys", period: "2018 — 2020", type: "Full-time" },
];

function Nav() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1.25rem 2.5rem",
        borderBottom: "1px solid var(--border)",
        backdropFilter: "blur(16px)",
        backgroundColor: "var(--nav-bg)",
      }}
    >
      <a
        href="#"
        style={{
          fontFamily: "'DM Serif Display', serif",
          fontWeight: 700,
          fontSize: "1.25rem",
          color: "var(--fg)",
          textDecoration: "none",
          letterSpacing: "-0.02em",
        }}
      >
        SK.
      </a>

      <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        {NAV_LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            style={{
              color: "var(--fg-muted)",
              textDecoration: "none",
              fontSize: "0.875rem",
              fontWeight: 500,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--fg)")}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--fg-muted)")}
          >
            {l.label}
          </a>
        ))}

        <ThemeToggle />

        <a
          href="#contact"
          style={{
            background: "linear-gradient(135deg, var(--primary), var(--accent))",
            color: "#fff",
            padding: "0.5rem 1.25rem",
            borderRadius: "2px",
            textDecoration: "none",
            fontSize: "0.875rem",
            fontWeight: 600,
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) => ((e.target as HTMLElement).style.opacity = "0.85")}
          onMouseLeave={(e) => ((e.target as HTMLElement).style.opacity = "1")}
        >
          Hire Me
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "8rem 2.5rem 5rem",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "var(--bg)",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-40%)",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, var(--glow-a) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "40%",
          right: "10%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "radial-gradient(circle, var(--glow-b) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1100px", margin: "0 auto", width: "100%" }}>
        {/* Status badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            marginBottom: "2rem",
            padding: "0.375rem 0.875rem",
            border: "1px solid var(--border-strong)",
            borderRadius: "100px",
            backgroundColor: "var(--tag-bg)",
          }}
        >
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              backgroundColor: "#06d6a0",
              boxShadow: "0 0 8px #06d6a0",
              animation: "pulse 2s infinite",
            }}
          />
          <span
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--fg-soft)",
            }}
          >
            Open to full-time roles
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "clamp(3rem, 8vw, 7rem)",
            fontWeight: 900,
            lineHeight: 0.95,
            letterSpacing: "-0.03em",
            color: "var(--fg)",
            marginBottom: "1.5rem",
            maxWidth: "900px",
          }}
        >
          I design products
          <br />
          <span
            style={{
              fontStyle: "italic",
              background: "linear-gradient(135deg, var(--primary), var(--accent), #a855f7)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            people love
          </span>{" "}
          to use.
        </h1>

        <p
          style={{
            fontSize: "1.25rem",
            lineHeight: 1.6,
            color: "var(--fg-muted)",
            maxWidth: "560px",
            marginBottom: "3rem",
            fontWeight: 400,
          }}
        >
          Senthilkumar Rajendran — Senior Product Designer with 6+ years turning complex user
          problems into clear, elegant digital experiences.
        </p>

        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <a
            href="#work"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "linear-gradient(135deg, var(--primary), var(--accent))",
              color: "#fff",
              padding: "0.875rem 2rem",
              borderRadius: "2px",
              textDecoration: "none",
              fontSize: "1rem",
              fontWeight: 600,
              transition: "transform 0.2s",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
          >
            View my work <span style={{ fontSize: "1.1rem" }}>↓</span>
          </a>
          <a
            href="mailto:hello@skumardesigns.com"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              border: "1px solid var(--border-strong)",
              color: "var(--fg-soft)",
              padding: "0.875rem 2rem",
              borderRadius: "2px",
              textDecoration: "none",
              fontSize: "1rem",
              fontWeight: 500,
              transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--primary)";
              (e.currentTarget as HTMLElement).style.color = "var(--fg)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--border-strong)";
              (e.currentTarget as HTMLElement).style.color = "var(--fg-soft)";
            }}
          >
            Get in touch
          </a>
        </div>

        {/* Stats */}
        <div
          style={{
            display: "flex",
            gap: "3rem",
            marginTop: "5rem",
            paddingTop: "2.5rem",
            borderTop: "1px solid var(--border)",
            flexWrap: "wrap",
          }}
        >
          {[
            { num: "6+", label: "Years of experience" },
            { num: "40+", label: "Products shipped" },
            { num: "3", label: "Industries worked in" },
          ].map((stat) => (
            <div key={stat.label}>
              <div
                style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: "2.5rem",
                  fontWeight: 900,
                  color: "var(--primary)",
                  lineHeight: 1,
                  marginBottom: "0.25rem",
                }}
              >
                {stat.num}
              </div>
              <div style={{ fontSize: "0.875rem", color: "var(--fg-muted)", fontWeight: 500 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </section>
  );
}

function Work() {
  const [hovered, setHovered] = useState<number | null>(null);
  const navigate = useNavigate();

  return (
    <section id="work" style={{ padding: "6rem 2.5rem", backgroundColor: "var(--bg)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: "4rem",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--primary)",
                marginBottom: "0.75rem",
              }}
            >
              Selected work
            </p>
            <h2
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 900,
                letterSpacing: "-0.03em",
                color: "var(--fg)",
                lineHeight: 1,
              }}
            >
              Case Studies
            </h2>
          </div>
          <span style={{ fontSize: "0.875rem", color: "var(--fg-muted)", fontWeight: 500 }}>
            {PROJECTS.length} projects
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          {PROJECTS.map((p, i) => (
            <div
              key={p.id}
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => navigate(`/case-study/${p.slug}`)}
              style={{
                display: "grid",
                gridTemplateColumns: "3rem 1fr auto",
                alignItems: "start",
                gap: "2rem",
                padding: "2.5rem",
                backgroundColor: hovered === p.id ? "var(--bg-card)" : "transparent",
                border: "1px solid",
                borderColor: hovered === p.id ? "var(--border-strong)" : "var(--border)",
                transition: "all 0.25s ease",
                cursor: "pointer",
              }}
            >
              <span
                style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: "0.875rem",
                  color: hovered === p.id ? p.accent : "var(--fg-dimmed)",
                  fontWeight: 600,
                  paddingTop: "0.2rem",
                  transition: "color 0.25s",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <div>
                <p
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: hovered === p.id ? p.accent : "var(--fg-muted)",
                    marginBottom: "0.75rem",
                    transition: "color 0.25s",
                  }}
                >
                  {p.tag}
                </p>
                <h3
                  style={{
                    fontFamily: "'DM Serif Display', serif",
                    fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                    color: "var(--fg)",
                    marginBottom: "1rem",
                    lineHeight: 1.15,
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    lineHeight: 1.65,
                    color: "var(--fg-muted)",
                    maxWidth: "600px",
                    marginBottom: "1.25rem",
                  }}
                >
                  {p.desc}
                </p>
                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                  {p.tools.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        padding: "0.25rem 0.625rem",
                        border: "1px solid var(--tag-border)",
                        borderRadius: "2px",
                        color: "var(--fg-soft)",
                        letterSpacing: "0.04em",
                        backgroundColor: "var(--tag-bg)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "0.5rem" }}>
                <span style={{ fontSize: "0.75rem", color: "var(--fg-dimmed)", fontWeight: 600 }}>
                  {p.year}
                </span>
                <span
                  style={{
                    fontSize: "1.25rem",
                    color: hovered === p.id ? p.accent : "var(--fg-dimmed)",
                    transition: "color 0.25s, transform 0.25s",
                    transform: hovered === p.id ? "translate(2px, -2px)" : "translate(0,0)",
                    display: "inline-block",
                  }}
                >
                  ↗
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section
      style={{
        padding: "4rem 2.5rem",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        backgroundColor: "var(--bg-subtle)",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          gap: "4rem",
        }}
      >
        <div>
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--primary)",
              marginBottom: "0.75rem",
            }}
          >
            Career
          </p>
          <h2
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "2.5rem",
              fontWeight: 900,
              letterSpacing: "-0.03em",
              color: "var(--fg)",
              lineHeight: 1,
            }}
          >
            Where I've worked
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {EXPERIENCE.map((e, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "1.75rem 0",
                borderBottom: i < EXPERIENCE.length - 1 ? "1px solid var(--border)" : "none",
                flexWrap: "wrap",
                gap: "0.5rem",
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: "'DM Serif Display', serif",
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    color: "var(--fg)",
                    marginBottom: "0.25rem",
                  }}
                >
                  {e.role}
                </div>
                <div style={{ fontSize: "0.9375rem", color: "var(--fg-muted)" }}>{e.company}</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: "0.875rem", color: "var(--fg-soft)", fontWeight: 500 }}>
                  {e.period}
                </div>
                <div style={{ fontSize: "0.75rem", color: "var(--fg-dimmed)", marginTop: "0.25rem" }}>
                  {e.type}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" style={{ padding: "6rem 2.5rem", backgroundColor: "var(--bg)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <p
          style={{
            fontSize: "0.75rem",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--primary)",
            marginBottom: "0.75rem",
          }}
        >
          Capabilities
        </p>
        <h2
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            fontWeight: 900,
            letterSpacing: "-0.03em",
            color: "var(--fg)",
            lineHeight: 1,
            marginBottom: "4rem",
          }}
        >
          Skills & Tools
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2px",
          }}
        >
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.category}
              style={{
                padding: "2.5rem",
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--border)",
              }}
            >
              <h3
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--primary)",
                  marginBottom: "1.5rem",
                }}
              >
                {group.category}
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      fontSize: "0.875rem",
                      fontWeight: 500,
                      padding: "0.4rem 0.875rem",
                      backgroundColor: "var(--tag-bg)",
                      border: "1px solid var(--tag-border)",
                      borderRadius: "2px",
                      color: "var(--fg-soft)",
                      transition: "background-color 0.15s",
                      cursor: "default",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.backgroundColor = "var(--border-strong)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.backgroundColor = "var(--tag-bg)";
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "6rem 2.5rem",
        borderTop: "1px solid var(--border)",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "var(--bg-subtle)",
      }}
    >
      <div
        style={{
          position: "absolute",
          bottom: "-20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, var(--glow-a) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "center",
        }}
      >
        <div>
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--primary)",
              marginBottom: "0.75rem",
            }}
          >
            Let's talk
          </p>
          <h2
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              fontWeight: 900,
              letterSpacing: "-0.03em",
              color: "var(--fg)",
              lineHeight: 1,
              marginBottom: "1.5rem",
            }}
          >
            Open to the
            <br />
            <span style={{ fontStyle: "italic", color: "var(--primary)" }}>right role.</span>
          </h2>
          <p style={{ fontSize: "1.0625rem", lineHeight: 1.65, color: "var(--fg-muted)", maxWidth: "420px" }}>
            I'm actively looking for a Senior Product Designer or Lead UX Designer role. If
            you're building something meaningful, let's connect.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {[
            { label: "Email", value: "hello@skumardesigns.com", href: "mailto:hello@skumardesigns.com", icon: "✉" },
            { label: "LinkedIn", value: "linkedin.com/in/skumar-r", href: "https://www.linkedin.com/in/skumar-r", icon: "in" },
            { label: "Portfolio", value: "skumardesigns.notion.site", href: "https://skumardesigns.notion.site", icon: "↗" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1.25rem",
                padding: "1.5rem",
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--border)",
                textDecoration: "none",
                transition: "border-color 0.2s, background-color 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--primary)";
                (e.currentTarget as HTMLElement).style.backgroundColor = "var(--bg-card-hover)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                (e.currentTarget as HTMLElement).style.backgroundColor = "var(--bg-card)";
              }}
            >
              <span
                style={{
                  width: "2.5rem",
                  height: "2.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "var(--tag-bg)",
                  border: "1px solid var(--tag-border)",
                  borderRadius: "2px",
                  fontSize: "0.875rem",
                  color: "var(--primary)",
                  fontWeight: 700,
                  flexShrink: 0,
                }}
              >
                {item.icon}
              </span>
              <div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--fg-muted)",
                    marginBottom: "0.2rem",
                  }}
                >
                  {item.label}
                </div>
                <div style={{ fontSize: "0.9375rem", color: "var(--fg-soft)", fontWeight: 500 }}>
                  {item.value}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      style={{
        padding: "2rem 2.5rem",
        borderTop: "1px solid var(--border)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "1rem",
        backgroundColor: "var(--bg)",
      }}
    >
      <span style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 700, fontSize: "1rem", color: "var(--fg-dimmed)" }}>
        SK.
      </span>
      <span style={{ fontSize: "0.8125rem", color: "var(--fg-dimmed)" }}>
        © 2026 Senthilkumar Rajendran. Designed & built in Figma Make.
      </span>
      <a
        href="/sk-portfolio.tar.gz"
        download="sk-portfolio.tar.gz"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.375rem",
          fontSize: "0.8125rem",
          color: "var(--primary)",
          textDecoration: "none",
          border: "1px solid var(--border)",
          padding: "0.375rem 0.75rem",
          borderRadius: "2px",
          transition: "border-color 0.2s",
        }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--primary)")}
        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--border)")}
      >
        ↓ Download project
      </a>
      <a
        href="#"
        style={{ fontSize: "0.8125rem", color: "var(--fg-dimmed)", textDecoration: "none", transition: "color 0.2s" }}
        onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--fg-muted)")}
        onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--fg-dimmed)")}
      >
        Back to top ↑
      </a>
    </footer>
  );
}

export default function Home() {
  return (
    <div style={{ backgroundColor: "var(--bg)", minHeight: "100vh", color: "var(--fg)", fontFamily: "'DM Sans', sans-serif" }}>
      <Nav />
      <Hero />
      <Work />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
