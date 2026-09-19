import { useNavigate, Link } from "react-router";
import ThemeToggle from "./ThemeToggle";

// ── Reusable section building blocks ─────────────────────────────────────
// Import and use these in each individual case study page.

export function SectionLabel({ label, accent }: { label: string; accent: string }) {
  return (
    <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: accent, margin: "0 0 0.75rem" }}>
      {label}
    </p>
  );
}

export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", fontWeight: 400, letterSpacing: "-0.02em", color: "var(--fg)", lineHeight: 1.1, margin: "0 0 2.5rem" }}>
      {children}
    </h2>
  );
}

export function Section({ children, alt = false }: { children: React.ReactNode; alt?: boolean }) {
  return (
    <section style={{ padding: "5rem 2.5rem", borderTop: "1px solid var(--border)", backgroundColor: alt ? "var(--bg-subtle)" : "var(--bg)" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        {children}
      </div>
    </section>
  );
}

export function StatGrid({ items }: { items: { stat: string; label: string }[] }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "2px" }}>
      {items.map((item, i) => (
        <div key={i} style={{ padding: "2rem", backgroundColor: "var(--bg-card)", border: "1px solid var(--border)", textAlign: "center" }}>
          <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: "2.5rem", fontWeight: 400, color: "var(--primary)", lineHeight: 1, marginBottom: "0.5rem" }}>
            {item.stat}
          </div>
          <div style={{ fontSize: "0.8125rem", color: "var(--fg-muted)", lineHeight: 1.45 }}>
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
}

export function Blockquote({ text, attribution }: { text: string; attribution?: string }) {
  return (
    <blockquote style={{ margin: 0, padding: "1.75rem 2rem", borderLeft: "3px solid var(--primary)", backgroundColor: "rgba(108,71,255,0.06)" }}>
      <p style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.25rem", fontStyle: "italic", lineHeight: 1.6, color: "var(--fg)", margin: 0, marginBottom: attribution ? "0.75rem" : 0 }}>
        "{text}"
      </p>
      {attribution && (
        <cite style={{ fontSize: "0.8125rem", color: "var(--fg-muted)", fontStyle: "normal", fontWeight: 500 }}>
          {attribution}
        </cite>
      )}
    </blockquote>
  );
}

export function ToolChips({ tools }: { tools: string[] }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" }}>
      <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--fg-dimmed)", flexShrink: 0 }}>
        Tools used
      </span>
      {tools.map((t) => (
        <span key={t} style={{ fontSize: "0.875rem", fontWeight: 600, padding: "0.375rem 0.875rem", border: "1px solid var(--border)", borderRadius: "2px", color: "var(--fg-soft)" }}>
          {t}
        </span>
      ))}
    </div>
  );
}

// ── Page shell ────────────────────────────────────────────────────────────

interface CaseStudyLayoutProps {
  // Hero
  tag: string;
  title: string;
  desc: string;
  accent: string;
  heroImage: string;
  role: string;
  timeline: string;
  client: string;
  platform: string;
  // Outcomes
  outcomes: { metric: string; label: string; direction: "up" | "down" }[];
  // Tools
  tools: string[];
  // Next project
  nextSlug: string;
  nextTitle: string;
  nextTag: string;
  nextAccent: string;
  nextHeroImage: string;
  // Middle sections
  children: React.ReactNode;
}

export default function CaseStudyLayout({
  tag, title, desc, accent, heroImage, role, timeline, client, platform,
  outcomes, tools, nextSlug, nextTitle, nextTag, nextAccent, nextHeroImage,
  children,
}: CaseStudyLayoutProps) {
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: "var(--bg)", minHeight: "100vh", color: "var(--fg)", fontFamily: "'DM Sans', sans-serif" }}>

      {/* Nav */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1.25rem 2.5rem", borderBottom: "1px solid var(--border)", backdropFilter: "blur(16px)", backgroundColor: "var(--nav-bg)" }}>
        <button onClick={() => navigate("/")} style={{ display: "flex", alignItems: "center", gap: "0.625rem", background: "none", border: "none", cursor: "pointer", color: "var(--fg-muted)", fontSize: "0.875rem", fontFamily: "'DM Sans', sans-serif", fontWeight: 500, padding: 0, transition: "color 0.2s" }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--fg)")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--fg-muted)")}
        >
          ← Back to portfolio
        </button>
        <span style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 400, fontSize: "1.25rem", color: accent }}>SK.</span>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <ThemeToggle />
          <a href="mailto:hello@skumardesigns.com" style={{ background: `linear-gradient(135deg, ${accent}, #4f8aff)`, color: "#fff", padding: "0.5rem 1.25rem", borderRadius: "2px", textDecoration: "none", fontSize: "0.875rem", fontWeight: 600 }}>
            Hire Me
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ paddingTop: "7rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: "30%", width: "600px", height: "400px", borderRadius: "50%", background: `radial-gradient(circle, ${accent}22 0%, transparent 70%)`, pointerEvents: "none" }} />

        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "3rem 2.5rem 0" }}>
          <p style={{ fontSize: "0.8125rem", color: "var(--fg-dimmed)", marginBottom: "2rem", display: "flex", gap: "0.5rem", alignItems: "center" }}>
            <Link to="/" style={{ color: "var(--fg-muted)", textDecoration: "none" }}>Portfolio</Link>
            <span>›</span>
            <span>Case Study</span>
          </p>

          <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: accent, marginBottom: "1.25rem" }}>
            {tag}
          </p>

          <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(2.25rem, 5vw, 4rem)", fontWeight: 400, letterSpacing: "-0.02em", color: "var(--fg)", lineHeight: 1.05, marginBottom: "1.5rem" }}>
            {title}
          </h1>

          <p style={{ fontSize: "1.125rem", lineHeight: 1.65, color: "var(--fg-muted)", marginBottom: "2.5rem", maxWidth: "640px" }}>
            {desc}
          </p>

          {/* Meta grid */}
          <div style={{ display: "flex", borderTop: "1px solid var(--border)", borderLeft: "1px solid var(--border)", marginBottom: "3rem", flexWrap: "wrap" }}>
            {[
              { label: "Role", value: role },
              { label: "Timeline", value: timeline },
              { label: "Client", value: client },
              { label: "Platform", value: platform },
            ].map((m) => (
              <div key={m.label} style={{ flex: "1 1 180px", padding: "1.25rem 1.5rem", borderRight: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
                <div style={{ fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--fg-dimmed)", marginBottom: "0.375rem" }}>
                  {m.label}
                </div>
                <div style={{ fontSize: "0.9375rem", color: "var(--fg)", fontWeight: 500 }}>{m.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero image */}
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2.5rem 5rem" }}>
          <div style={{ position: "relative", aspectRatio: "21/9", overflow: "hidden", backgroundColor: "var(--bg-card)", border: `1px solid ${accent}33` }}>
            <img src={heroImage} alt={title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            <div style={{ position: "absolute", inset: 0, background: `linear-gradient(135deg, ${accent}18 0%, transparent 60%)` }} />
          </div>
        </div>
      </section>

      {/* Middle sections — each case study provides its own */}
      {children}

      {/* Outcomes */}
      <section style={{ padding: "5rem 2.5rem", borderTop: "1px solid var(--border)", backgroundColor: "var(--bg-subtle)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <SectionLabel label="Impact" accent={accent} />
          <SectionHeading>Outcomes & Results</SectionHeading>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))", gap: "2px" }}>
            {outcomes.map((o, i) => (
              <div key={i} style={{ padding: "2rem", backgroundColor: accent + "10", border: `1px solid ${accent}33`, textAlign: "center", position: "relative" }}>
                <div style={{ position: "absolute", top: "0.75rem", right: "0.875rem", fontSize: "0.875rem", color: o.direction === "up" ? "#06d6a0" : "#ff6b6b" }}>
                  {o.direction === "up" ? "↑" : "↓"}
                </div>
                <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: "2.25rem", fontWeight: 400, color: accent, lineHeight: 1, marginBottom: "0.625rem" }}>
                  {o.metric}
                </div>
                <div style={{ fontSize: "0.8125rem", color: "var(--fg-soft)", lineHeight: 1.45 }}>{o.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section style={{ padding: "3rem 2.5rem", borderTop: "1px solid var(--border)", backgroundColor: "var(--bg)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <ToolChips tools={tools} />
        </div>
      </section>

      {/* Next case study */}
      <section style={{ borderTop: "1px solid var(--border)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${nextHeroImage})`, backgroundSize: "cover", backgroundPosition: "center", opacity: 0.06 }} />
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "5rem 2.5rem", position: "relative", textAlign: "center" }}>
          <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--fg-dimmed)", marginBottom: "1.5rem" }}>
            Next case study
          </p>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(1.75rem, 3.5vw, 3rem)", fontWeight: 400, color: "var(--fg)", lineHeight: 1.05, marginBottom: "0.75rem" }}>
            {nextTitle}
          </h2>
          <p style={{ fontSize: "0.9375rem", color: "var(--fg-muted)", marginBottom: "2rem" }}>{nextTag}</p>
          <button
            onClick={() => navigate(`/case-study/${nextSlug}`)}
            style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: `linear-gradient(135deg, ${nextAccent}, #4f8aff)`, color: "#fff", padding: "0.875rem 2rem", borderRadius: "2px", border: "none", fontSize: "1rem", fontWeight: 600, cursor: "pointer", fontFamily: "'DM Sans', sans-serif", transition: "transform 0.2s" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
          >
            View case study →
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: "2rem 2.5rem", borderTop: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem", backgroundColor: "var(--bg)" }}>
        <span style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 400, fontSize: "1rem", color: "var(--fg-dimmed)" }}>SK.</span>
        <span style={{ fontSize: "0.8125rem", color: "var(--fg-dimmed)" }}>© 2026 Senthilkumar Rajendran</span>
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ fontSize: "0.8125rem", color: "var(--fg-dimmed)", background: "none", border: "none", cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>
          Back to top ↑
        </button>
      </footer>
    </div>
  );
}
