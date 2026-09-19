import { useState } from "react";
import CaseStudyLayout, { Section, SectionLabel, SectionHeading, StatGrid, Blockquote } from "../../components/CaseStudyLayout";

export default function FintechOnboarding() {
  return (
    <CaseStudyLayout
      tag="Case Study · Mobile App"
      title="Redesigning Onboarding for a Fintech Super App"
      desc="Cut drop-off by 38% by replacing a 9-step form with a progressive, conversational flow — increasing activation rates and reducing support tickets."
      accent="#6c47ff"
      heroImage="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1400&h=600&fit=crop&auto=format"
      role="Lead Product Designer"
      timeline="4 months (Q1 2024)"
      client="FinFlow (Series B Fintech)"
      platform="iOS & Android"
      tools={["Figma", "Maze", "Lottie", "Hotjar"]}
      outcomes={[
        { metric: "38%", label: "Reduction in drop-off", direction: "down" },
        { metric: "2.1×", label: "Increase in activation rate", direction: "up" },
        { metric: "−29%", label: "Support tickets on onboarding", direction: "down" },
        { metric: "4.7★", label: "App Store rating after launch", direction: "up" },
      ]}
      nextSlug="enterprise-analytics"
      nextTitle="Enterprise Analytics Platform — 0 to 1 Design"
      nextTag="Case Study · SaaS Dashboard"
      nextAccent="#4f8aff"
      nextHeroImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&h=600&fit=crop&auto=format"
    >

      {/* Problem statement */}
      <Section alt>
        <SectionLabel label="The Problem" accent="#6c47ff" />
        <SectionHeading>Problem Statement</SectionHeading>
        <Blockquote text="FinFlow's onboarding funnel had a 62% drop-off rate between sign-up and first transaction. New users were abandoning mid-flow due to a dense 9-step KYC form presented upfront — before they'd experienced any product value." />
      </Section>

      {/* Research stats */}
      <Section>
        <SectionLabel label="Research" accent="#6c47ff" />
        <SectionHeading>What the data told us</SectionHeading>
        <StatGrid items={[
          { stat: "62%", label: "Drop-off rate on original 9-step KYC flow" },
          { stat: "18", label: "Users interviewed in discovery research" },
          { stat: "4.2 min", label: "Average time before abandoning onboarding" },
          { stat: "73%", label: "Users wanted to see the app before sharing documents" },
        ]} />
      </Section>

      {/* UX Process */}
      <Section alt>
        <SectionLabel label="Process" accent="#6c47ff" />
        <SectionHeading>UX Process</SectionHeading>
        <UXProcessTabs />
      </Section>

      {/* Competitive analysis */}
      <Section>
        <SectionLabel label="Research" accent="#6c47ff" />
        <SectionHeading>Competitive Analysis</SectionHeading>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: "2px", minWidth: "560px" }}>
            <thead>
              <tr>
                <Th>Feature</Th>
                <Th highlight accent="#6c47ff">FinFlow (Before)</Th>
                <Th>Revolut</Th>
                <Th>Monzo</Th>
                <Th>Wise</Th>
              </tr>
            </thead>
            <tbody>
              <Tr cells={["Steps to first transaction", "9 steps", "4 steps", "5 steps", "6 steps"]} highlight accent="#6c47ff" />
              <Tr cells={["Progressive disclosure", "None", "Yes", "Yes", "Partial"]} highlight accent="#6c47ff" alt />
              <Tr cells={["Social proof shown early", "No", "Yes", "No", "Yes"]} highlight accent="#6c47ff" />
              <Tr cells={["Document upload deferred", "No", "Yes", "Yes", "No"]} highlight accent="#6c47ff" alt />
              <Tr cells={["Animated micro-interactions", "None", "Rich", "Rich", "Minimal"]} highlight accent="#6c47ff" />
              <Tr cells={["Error recovery guidance", "Generic", "Contextual", "Contextual", "Generic"]} highlight accent="#6c47ff" alt />
            </tbody>
          </table>
        </div>
      </Section>

      {/* Screenshots */}
      <Section alt>
        <SectionLabel label="Visuals" accent="#6c47ff" />
        <SectionHeading>Project Screens</SectionHeading>
        <ImageCarousel accent="#6c47ff" images={[
          { url: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?w=900&h=600&fit=crop&auto=format", caption: "Current state mapping — exit points identified via session recordings" },
          { url: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=900&h=600&fit=crop&auto=format", caption: "Low-fidelity wireframes — conversational progressive disclosure concept" },
          { url: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&h=600&fit=crop&auto=format", caption: "High-fidelity prototype — new 4-step onboarding with deferred KYC" },
          { url: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=900&h=600&fit=crop&auto=format", caption: "Shipped product — animated step transitions and inline validation" },
        ]} />
      </Section>

      {/* Design decisions */}
      <Section>
        <SectionLabel label="Design Thinking" accent="#6c47ff" />
        <SectionHeading>Design Decisions</SectionHeading>
        <AccordionList items={[
          { title: "Value before friction", content: "We moved KYC document upload to step 4 — after the user completed their first simulated transaction. This 'value before friction' pattern directly addresses the primary JTBD and contributed the most to the 38% drop-off reduction." },
          { title: "Accessibility", content: "All form inputs were designed with visible focus states meeting WCAG 2.1 AA. Error messages used inline contextual guidance rather than generic strings. We ensured VoiceOver and TalkBack compatibility across all new screens." },
          { title: "Design system impact", content: "The onboarding redesign became the forcing function for FinFlow's first design system — 200+ components, a token library, and a shared Figma library used by 4 product squads." },
          { title: "Compliance trade-off", content: "Legal required document upload before real transactions. We negotiated a 'preview mode' with sample data so users could explore the full app before the one-time document step." },
        ]} accent="#6c47ff" />
      </Section>

    </CaseStudyLayout>
  );
}

// ── Local components (only used by this page) ─────────────────────────────

function UXProcessTabs() {
  const [active, setActive] = useState(0);
  const steps = [
    { phase: "Discover", icon: "◎", description: "Conducted 18 user interviews and 5 stakeholder sessions. Reviewed 3 months of session recordings in Hotjar to map exact exit points in the current flow." },
    { phase: "Define", icon: "◈", description: "Synthesised findings into a Jobs-to-be-Done framework. Primary JTBD: 'When I open a new finance app, I want to see value quickly so I trust it before giving my personal details.'" },
    { phase: "Ideate", icon: "◇", description: "Ran a 2-day design sprint generating 24 concepts across three directions: conversational progressive disclosure, social proof-led, and value-first." },
    { phase: "Prototype", icon: "◆", description: "Built high-fidelity Figma prototypes of the top 2 concepts. Used Lottie animations for micro-interactions to reduce perceived effort on data-entry steps." },
    { phase: "Test", icon: "◉", description: "Ran moderated usability tests on Maze with 24 participants. Measured task completion, time-on-task, and qualitative sentiment." },
    { phase: "Ship", icon: "●", description: "Iterated on findings, built a 200+ component design system, and worked closely with iOS/Android engineers to spec every micro-state." },
  ];

  return (
    <div>
      <div style={{ display: "flex", gap: "2px", marginBottom: "2rem", overflowX: "auto" }}>
        {steps.map((step, i) => (
          <button key={i} onClick={() => setActive(i)} style={{ flex: 1, minWidth: "80px", padding: "0.75rem 0.5rem", background: i === active ? "#6c47ff" : "transparent", border: `1px solid ${i === active ? "#6c47ff" : "var(--border)"}`, cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.375rem", transition: "all 0.2s" }}>
            <span style={{ fontSize: "1rem", color: i === active ? "#fff" : "var(--fg-muted)" }}>{step.icon}</span>
            <span style={{ fontSize: "0.625rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: i === active ? "#fff" : "var(--fg-muted)" }}>{step.phase}</span>
          </button>
        ))}
      </div>
      <div key={active} style={{ padding: "2rem", backgroundColor: "var(--bg-card)", border: "1px solid rgba(108,71,255,0.3)", animation: "fadeIn 0.25s ease" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
          <span style={{ fontSize: "1.5rem", color: "#6c47ff" }}>{steps[active].icon}</span>
          <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.25rem", fontWeight: 400, color: "var(--fg)", margin: 0 }}>{steps[active].phase}</h3>
          <span style={{ fontSize: "0.75rem", color: "#6c47ff", fontWeight: 600 }}>{active + 1} / {steps.length}</span>
        </div>
        <p style={{ fontSize: "0.9375rem", lineHeight: 1.75, color: "var(--fg-muted)", margin: 0 }}>{steps[active].description}</p>
        <div style={{ marginTop: "1.5rem", height: "2px", backgroundColor: "var(--border)", borderRadius: "100px", overflow: "hidden" }}>
          <div style={{ height: "100%", width: `${((active + 1) / steps.length) * 100}%`, backgroundColor: "#6c47ff", transition: "width 0.3s" }} />
        </div>
      </div>
      <style>{`@keyframes fadeIn { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: translateY(0); } }`}</style>
    </div>
  );
}

function Th({ children, highlight = false, accent }: { children: React.ReactNode; highlight?: boolean; accent?: string }) {
  return (
    <th style={{ padding: "1rem 1.25rem", textAlign: highlight ? "center" : "left", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: highlight ? accent : "var(--fg-muted)", backgroundColor: highlight ? (accent + "18") : "var(--table-head)", border: highlight ? `1px solid ${accent}33` : "none" }}>
      {children}
    </th>
  );
}

function Tr({ cells, highlight = false, alt = false, accent }: { cells: string[]; highlight?: boolean; alt?: boolean; accent?: string }) {
  const bg = alt ? "var(--table-row-a)" : "var(--table-row-b)";
  return (
    <tr>
      <td style={{ padding: "0.875rem 1.25rem", fontSize: "0.875rem", fontWeight: 500, color: "var(--fg-soft)", backgroundColor: bg }}>{cells[0]}</td>
      {cells.slice(1).map((cell, i) => (
        <td key={i} style={{ padding: "0.875rem 1.25rem", fontSize: "0.875rem", fontWeight: i === 0 && highlight ? 600 : 400, color: i === 0 && highlight ? "var(--fg)" : "var(--fg-muted)", backgroundColor: i === 0 && highlight ? (accent + "10") : bg, textAlign: "center", border: i === 0 && highlight ? `1px solid ${accent}22` : "none" }}>
          {cell}
        </td>
      ))}
    </tr>
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
