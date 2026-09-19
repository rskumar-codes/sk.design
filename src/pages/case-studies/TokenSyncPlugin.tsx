import { useState } from "react";
import CaseStudyLayout, { Section, SectionLabel, SectionHeading, StatGrid, Blockquote } from "../../components/CaseStudyLayout";

export default function TokenSyncPlugin() {
  return (
    <CaseStudyLayout
      tag="Side Project · Design Tool"
      title="TokenSync — Figma Plugin for Design Tokens"
      desc="A Figma plugin that exports design tokens as JSON, CSS, and Tailwind config — used by 2,000+ designers to sync tokens between design and code."
      accent="#06d6a0"
      heroImage="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1400&h=600&fit=crop&auto=format"
      role="Designer + Developer"
      timeline="6 weeks (side project)"
      client="Open Source / Figma Community"
      platform="Figma Plugin"
      tools={["Figma API", "TypeScript", "Node.js"]}
      outcomes={[
        { metric: "2,000+", label: "Active plugin users", direction: "up" },
        { metric: "4.9★", label: "Community rating", direction: "up" },
        { metric: "12", label: "Open source contributors", direction: "up" },
        { metric: "v2", label: "Launched with Variables API support", direction: "up" },
      ]}
      nextSlug="fintech-onboarding"
      nextTitle="Redesigning Onboarding for a Fintech Super App"
      nextTag="Case Study · Mobile App"
      nextAccent="#6c47ff"
      nextHeroImage="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1400&h=600&fit=crop&auto=format"
    >

      {/* Problem statement */}
      <Section alt>
        <SectionLabel label="The Problem" accent="#06d6a0" />
        <SectionHeading>Problem Statement</SectionHeading>
        <Blockquote text="Every team I worked on had the same invisible problem: designers updated colour or spacing tokens in Figma, engineers had no reliable way to know, and the UI quietly drifted. Existing solutions required CLI setup that non-technical designers couldn't manage." />
      </Section>

      {/* Origin story */}
      <Section>
        <SectionLabel label="Origin" accent="#06d6a0" />
        <SectionHeading>Built out of frustration, not a brief</SectionHeading>
        <p style={{ fontSize: "1.0625rem", lineHeight: 1.8, color: "var(--fg-muted)", margin: 0, maxWidth: "680px" }}>
          This project had no client, no discovery phase, and no formal process. I had a problem I'd seen on every team I'd ever worked on and a free weekend. I surveyed 120 designers in the Figma Community Discord to confirm it wasn't just me, then spent 6 weeks building and iterating in public. The 'research' was the community's real-time feedback on each beta drop.
        </p>
      </Section>

      {/* Community stats */}
      <Section alt>
        <SectionLabel label="Validation" accent="#06d6a0" />
        <SectionHeading>Community signal</SectionHeading>
        <StatGrid items={[
          { stat: "120", label: "Designers & devs surveyed before building" },
          { stat: "89%", label: "Relied on manual copy-paste for token handoff" },
          { stat: "2,000+", label: "Figma Community users within 3 months" },
          { stat: "4.9★", label: "Rating in the Figma Community plugin store" },
        ]} />
      </Section>

      {/* Screenshots */}
      <Section>
        <SectionLabel label="Visuals" accent="#06d6a0" />
        <SectionHeading>Plugin UI & Output</SectionHeading>
        <ImageCarousel accent="#06d6a0" images={[
          { url: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=900&h=600&fit=crop&auto=format", caption: "Problem mapping — the broken token handoff workflow visualised" },
          { url: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=900&h=600&fit=crop&auto=format", caption: "Plugin UI — export format selector and token preview panel" },
          { url: "https://images.unsplash.com/photo-1580894912989-0bc892f4efd0?w=900&h=600&fit=crop&auto=format", caption: "Exported output — Tailwind config generated from Figma styles" },
          { url: "https://images.unsplash.com/photo-1618044619888-009e412ff12a?w=900&h=600&fit=crop&auto=format", caption: "Figma Community page — 2,000+ users and 4.9★ rating" },
        ]} />
      </Section>

      {/* Behind the build */}
      <Section alt>
        <SectionLabel label="Behind the build" accent="#06d6a0" />
        <SectionHeading>How it came together</SectionHeading>
        <AccordionList accent="#06d6a0" items={[
          { title: "Technical architecture", content: "The plugin uses the Figma Plugin API to traverse the document tree and extract local styles and variables. A TypeScript transformer maps Figma's colour, text, and effect styles to W3C Design Token format (JSON), CSS custom properties, and Tailwind v3/v4 config syntax." },
          { title: "v2: Figma Variables support", content: "After Figma released the Variables API in 2023, I shipped v2 with full variable collection support — including multi-mode export (e.g. light/dark token sets as separate CSS layers). This drove a 40% increase in installs in the month of launch." },
          { title: "Open source & community", content: "The plugin is open source on GitHub. I've received 12 pull requests adding new export formats (SCSS, Android XML). The community Discord has 300+ members including designers from Figma, Shopify, and Atlassian." },
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
