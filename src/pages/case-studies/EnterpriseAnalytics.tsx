import { useState } from "react";
import CaseStudyLayout, { Section, SectionLabel, SectionHeading, StatGrid, Blockquote } from "../../components/CaseStudyLayout";

export default function EnterpriseAnalytics() {
  return (
    <CaseStudyLayout
      tag="Case Study · SaaS Dashboard"
      title="Enterprise Analytics Platform — 0 to 1 Design"
      desc="Led end-to-end design of a B2B data platform used by 40+ enterprise clients. Built a design system that scaled to 200+ components across 4 product teams."
      accent="#4f8aff"
      heroImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&h=600&fit=crop&auto=format"
      role="Senior Product Designer"
      timeline="8 months (2023)"
      client="DataLens (B2B SaaS)"
      platform="Web (Desktop-first)"
      tools={["Figma", "Storybook", "UserTesting"]}
      outcomes={[
        { metric: "40+", label: "Enterprise clients onboarded", direction: "up" },
        { metric: "200+", label: "Design system components", direction: "up" },
        { metric: "4 teams", label: "Using the shared design system", direction: "up" },
        { metric: "NPS 72", label: "Net Promoter Score at 6 months", direction: "up" },
      ]}
      nextSlug="checkout-conversion"
      nextTitle="Checkout Conversion Uplift — A/B-Driven Redesign"
      nextTag="Case Study · E-Commerce"
      nextAccent="#a855f7"
      nextHeroImage="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1400&h=600&fit=crop&auto=format"
    >

      {/* Problem statement */}
      <Section alt>
        <SectionLabel label="The Problem" accent="#4f8aff" />
        <SectionHeading>Problem Statement</SectionHeading>
        <Blockquote text="DataLens had a powerful data engine but no native UI — clients were using raw API responses or third-party BI tools to visualise their data. The business needed a 0-to-1 product that enterprise analysts could use daily, flexible enough to serve 40+ industry verticals." />
      </Section>

      {/* How I worked */}
      <Section>
        <SectionLabel label="Approach" accent="#4f8aff" />
        <SectionHeading>How I worked on this project</SectionHeading>
        <p style={{ fontSize: "1.0625rem", lineHeight: 1.8, color: "var(--fg-muted)", margin: 0, maxWidth: "680px" }}>
          This wasn't a traditional research-then-design engagement. I was embedded inside a cross-functional squad from day one — sitting in client calls, reading support tickets, and shipping iterative prototypes every two weeks. Discovery and delivery ran in parallel throughout the 8 months, structured around 4 milestone releases each preceded by co-design sessions with 2–3 enterprise clients.
        </p>
      </Section>

      {/* Research stats */}
      <Section alt>
        <SectionLabel label="Discovery" accent="#4f8aff" />
        <SectionHeading>What we learned from clients</SectionHeading>
        <StatGrid items={[
          { stat: "6", label: "Enterprise clients embedded with during discovery" },
          { stat: "40+", label: "Industry verticals the platform needed to serve" },
          { stat: "4", label: "Primary user archetypes defined from research" },
          { stat: "60+", label: "Feature concepts generated in ideation workshops" },
        ]} />
      </Section>

      {/* Client quote */}
      <Section>
        <Blockquote
          text="We kept switching between three different BI tools depending on who was in the meeting. What we needed was one place that everyone could actually use."
          attribution="— Lead Data Analyst, enterprise client (finance sector)"
        />
      </Section>

      {/* Competitive analysis */}
      <Section alt>
        <SectionLabel label="Research" accent="#4f8aff" />
        <SectionHeading>Competitive Landscape</SectionHeading>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: "2px", minWidth: "560px" }}>
            <thead>
              <tr>
                <th style={{ padding: "1rem 1.25rem", textAlign: "left", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--fg-muted)", backgroundColor: "var(--table-head)" }}>Feature</th>
                <th style={{ padding: "1rem 1.25rem", textAlign: "center", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#4f8aff", backgroundColor: "#4f8aff18", border: "1px solid #4f8aff33" }}>DataLens</th>
                <th style={{ padding: "1rem 1.25rem", textAlign: "center", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--fg-muted)", backgroundColor: "var(--table-head)" }}>Tableau</th>
                <th style={{ padding: "1rem 1.25rem", textAlign: "center", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--fg-muted)", backgroundColor: "var(--table-head)" }}>Power BI</th>
                <th style={{ padding: "1rem 1.25rem", textAlign: "center", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--fg-muted)", backgroundColor: "var(--table-head)" }}>Looker</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Setup time to first insight", "< 1 hour", "2–3 days", "1–2 days", "4+ hours"],
                ["No-code chart builder", "Yes", "Partial", "Partial", "Yes"],
                ["Real-time data refresh", "Yes", "Paid add-on", "Yes", "Paid add-on"],
                ["White-labelling", "Full", "Partial", "None", "Partial"],
                ["Mobile responsive", "Yes", "No", "Partial", "No"],
              ].map((row, ri) => (
                <tr key={ri}>
                  <td style={{ padding: "0.875rem 1.25rem", fontSize: "0.875rem", fontWeight: 500, color: "var(--fg-soft)", backgroundColor: ri % 2 === 0 ? "var(--table-row-a)" : "var(--table-row-b)" }}>{row[0]}</td>
                  <td style={{ padding: "0.875rem 1.25rem", fontSize: "0.875rem", fontWeight: 600, color: "var(--fg)", backgroundColor: "#4f8aff10", textAlign: "center", border: "1px solid #4f8aff22" }}>{row[1]}</td>
                  {row.slice(2).map((cell, ci) => (
                    <td key={ci} style={{ padding: "0.875rem 1.25rem", fontSize: "0.875rem", color: "var(--fg-muted)", backgroundColor: ri % 2 === 0 ? "var(--table-row-a)" : "var(--table-row-b)", textAlign: "center" }}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* Screenshots */}
      <Section>
        <SectionLabel label="Visuals" accent="#4f8aff" />
        <SectionHeading>Project Screens</SectionHeading>
        <ImageCarousel accent="#4f8aff" images={[
          { url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=600&fit=crop&auto=format", caption: "Discovery — affinity mapping from 6 weeks of contextual inquiry" },
          { url: "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=900&h=600&fit=crop&auto=format", caption: "Information architecture — navigational structure for 4 archetypes" },
          { url: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=900&h=600&fit=crop&auto=format", caption: "Design system — component library in Figma and mirrored in Storybook" },
          { url: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=900&h=600&fit=crop&auto=format", caption: "Shipped dashboard — drag-and-drop chart canvas with real-time data" },
        ]} />
      </Section>

      {/* Key decisions */}
      <Section alt>
        <SectionLabel label="Decisions" accent="#4f8aff" />
        <SectionHeading>Key Decisions</SectionHeading>
        <AccordionList accent="#4f8aff" items={[
          { title: "Information architecture", content: "We designed a hub-and-spoke IA with a universal left nav for global context and a contextual right panel for filters. This pattern emerged from watching analysts switch rapidly between configuration and viewing states in Tableau." },
          { title: "Design system strategy", content: "Built a 3-tier token system: global tokens (primitives), semantic tokens (intent), and component tokens (local overrides). This allowed white-labelling at the semantic layer without breaking component styles." },
          { title: "Stakeholder management", content: "We ran monthly 'Design Previews' — structured sessions where 3–4 enterprise clients gave feedback on upcoming features. This kept clients engaged and gave us real-world validation before building." },
        ]} />
      </Section>

    </CaseStudyLayout>
  );
}

function ImageCarousel({ images, accent }: { images: { url: string; caption: string }[]; accent: string }) {
  const [active, setActive] = useState(0);
  return (
    <div>
      <div style={{ position: "relative", aspectRatio: "16/9", overflow: "hidden", backgroundColor: "var(--bg-card)", border: `1px solid ${accent}33` }}>
        <img key={active} src={images[active].url} alt={images[active].caption} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "1.25rem 1.5rem", background: "linear-gradient(to top, rgba(8,7,15,0.9) 0%, transparent 100%)" }}>
          <p style={{ fontSize: "0.875rem", color: "#c9bfff", margin: 0 }}>{images[active].caption}</p>
        </div>
        <button onClick={() => setActive((a) => (a - 1 + images.length) % images.length)} style={{ position: "absolute", top: "50%", left: "1rem", transform: "translateY(-50%)", width: "2.5rem", height: "2.5rem", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "rgba(8,7,15,0.8)", border: `1px solid ${accent}55`, borderRadius: "2px", color: "var(--fg)", cursor: "pointer" }}>←</button>
        <button onClick={() => setActive((a) => (a + 1) % images.length)} style={{ position: "absolute", top: "50%", right: "1rem", transform: "translateY(-50%)", width: "2.5rem", height: "2.5rem", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "rgba(8,7,15,0.8)", border: `1px solid ${accent}55`, borderRadius: "2px", color: "var(--fg)", cursor: "pointer" }}>→</button>
      </div>
      <div style={{ display: "flex", gap: "0.5rem", justifyContent: "center", marginTop: "1rem" }}>
        {images.map((_, i) => (
          <button key={i} onClick={() => setActive(i)} style={{ width: i === active ? "1.5rem" : "0.375rem", height: "0.375rem", borderRadius: "100px", backgroundColor: i === active ? accent : "var(--fg-dimmed)", border: "none", padding: 0, cursor: "pointer", transition: "all 0.25s" }} />
        ))}
      </div>
    </div>
  );
}

function AccordionList({ items, accent }: { items: { title: string; content: string }[]; accent: string }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
      {items.map((item, i) => (
        <div key={i} style={{ border: "1px solid", borderColor: open === i ? accent + "55" : "var(--border)", backgroundColor: open === i ? "var(--bg-card)" : "transparent", transition: "all 0.2s" }}>
          <button onClick={() => setOpen(open === i ? null : i)} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1.5rem 2rem", background: "none", border: "none", cursor: "pointer", textAlign: "left", gap: "1rem" }}>
            <span style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.125rem", fontWeight: 400, color: open === i ? "var(--fg)" : "var(--fg-soft)" }}>{item.title}</span>
            <span style={{ fontSize: "1.25rem", color: open === i ? accent : "var(--fg-dimmed)", transform: open === i ? "rotate(45deg)" : "rotate(0deg)", display: "inline-block", transition: "transform 0.25s", flexShrink: 0 }}>+</span>
          </button>
          <div style={{ maxHeight: open === i ? "400px" : "0", overflow: "hidden", transition: "max-height 0.35s ease" }}>
            <p style={{ fontSize: "0.9375rem", lineHeight: 1.75, color: "var(--fg-muted)", margin: 0, padding: "0 2rem 1.75rem" }}>{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
