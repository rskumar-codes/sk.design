import { useState } from "react";
import CaseStudyLayout, { Section, SectionLabel, SectionHeading, StatGrid, Blockquote } from "../../components/CaseStudyLayout";

export default function CheckoutConversion() {
  return (
    <CaseStudyLayout
      tag="Case Study · E-Commerce"
      title="Checkout Conversion Uplift — A/B-Driven Redesign"
      desc="Identified friction through heatmaps and session recordings, then designed and A/B tested a single-page checkout that lifted conversion by 21%."
      accent="#a855f7"
      heroImage="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1400&h=600&fit=crop&auto=format"
      role="UX Designer (Solo)"
      timeline="3 months (Q3 2023)"
      client="RetailX (D2C E-commerce)"
      platform="Web (Responsive)"
      tools={["Figma", "Hotjar", "Optimizely"]}
      outcomes={[
        { metric: "+21%", label: "Checkout conversion rate", direction: "up" },
        { metric: "−34%", label: "Payment step abandonment", direction: "down" },
        { metric: "−18s", label: "Average checkout completion time", direction: "down" },
        { metric: "£1.2M", label: "Estimated annual revenue recovered", direction: "up" },
      ]}
      nextSlug="tokensync-plugin"
      nextTitle="TokenSync — Figma Plugin for Design Tokens"
      nextTag="Side Project · Design Tool"
      nextAccent="#06d6a0"
      nextHeroImage="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1400&h=600&fit=crop&auto=format"
    >

      {/* Problem statement */}
      <Section alt>
        <SectionLabel label="The Problem" accent="#a855f7" />
        <SectionHeading>Problem Statement</SectionHeading>
        <Blockquote text="RetailX's checkout had a 71% abandonment rate — 14 points above industry average. A 3-page flow with no guest checkout and a confusing payment section was causing anxiety at the most critical moment in the purchase journey." />
      </Section>

      {/* Approach */}
      <Section>
        <SectionLabel label="Approach" accent="#a855f7" />
        <SectionHeading>No research phase — the data already existed</SectionHeading>
        <p style={{ fontSize: "1.0625rem", lineHeight: 1.8, color: "var(--fg-muted)", margin: 0, maxWidth: "680px" }}>
          There was no time or budget for a discovery sprint. Instead, I mined 90 days of existing behavioural data — Hotjar heatmaps, scroll maps, session recordings, and funnel analytics. The data was rich enough to identify and rank 11 friction points without a single user interview. This let me move straight into ideation with high confidence, reserving the validation budget for an A/B test on the solution.
        </p>
      </Section>

      {/* Analytics stats */}
      <Section alt>
        <SectionLabel label="Analysis" accent="#a855f7" />
        <SectionHeading>What the analytics showed</SectionHeading>
        <StatGrid items={[
          { stat: "71%", label: "Checkout abandonment rate before redesign" },
          { stat: "11", label: "Friction points identified via heuristics + analytics" },
          { stat: "57%", label: "Users who abandoned specifically at the payment step" },
          { stat: "4 weeks", label: "A/B test duration to reach statistical significance" },
        ]} />
      </Section>

      {/* Benchmarks table */}
      <Section>
        <SectionLabel label="Benchmarking" accent="#a855f7" />
        <SectionHeading>Checkout Benchmarks</SectionHeading>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: "2px", minWidth: "560px" }}>
            <thead>
              <tr>
                <th style={{ padding: "1rem 1.25rem", textAlign: "left", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--fg-muted)", backgroundColor: "var(--table-head)" }}>Feature</th>
                <th style={{ padding: "1rem 1.25rem", textAlign: "center", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#a855f7", backgroundColor: "#a855f718", border: "1px solid #a855f733" }}>RetailX (Before)</th>
                <th style={{ padding: "1rem 1.25rem", textAlign: "center", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--fg-muted)", backgroundColor: "var(--table-head)" }}>Shopify</th>
                <th style={{ padding: "1rem 1.25rem", textAlign: "center", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--fg-muted)", backgroundColor: "var(--table-head)" }}>ASOS</th>
                <th style={{ padding: "1rem 1.25rem", textAlign: "center", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--fg-muted)", backgroundColor: "var(--table-head)" }}>Amazon</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Guest checkout", "No", "Yes", "Yes", "Yes"],
                ["Number of pages", "3 pages", "1 page", "2 pages", "1 page"],
                ["Address autocomplete", "No", "Yes", "Yes", "Yes"],
                ["Shipping cost shown early", "Step 3 only", "Cart page", "Step 1", "Cart page"],
                ["Payment security signals", "Minimal", "Strong", "Moderate", "Strong"],
              ].map((row, ri) => (
                <tr key={ri}>
                  <td style={{ padding: "0.875rem 1.25rem", fontSize: "0.875rem", fontWeight: 500, color: "var(--fg-soft)", backgroundColor: ri % 2 === 0 ? "var(--table-row-a)" : "var(--table-row-b)" }}>{row[0]}</td>
                  <td style={{ padding: "0.875rem 1.25rem", fontSize: "0.875rem", fontWeight: 600, color: "var(--fg)", backgroundColor: "#a855f710", textAlign: "center", border: "1px solid #a855f722" }}>{row[1]}</td>
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
      <Section alt>
        <SectionLabel label="Visuals" accent="#a855f7" />
        <SectionHeading>Before, During & After</SectionHeading>
        <ImageCarousel accent="#a855f7" images={[
          { url: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=900&h=600&fit=crop&auto=format", caption: "Hotjar heatmap — rage clicks and scroll drop-offs mapped across 3-page flow" },
          { url: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=900&h=600&fit=crop&auto=format", caption: "Before — original 3-page checkout with mandatory account creation" },
          { url: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=900&h=600&fit=crop&auto=format", caption: "After — single-page accordion with guest checkout and inline validation" },
          { url: "https://images.unsplash.com/photo-1559526324-593bc073d938?w=900&h=600&fit=crop&auto=format", caption: "A/B test results — Optimizely showing 21% conversion lift" },
        ]} />
      </Section>

      {/* Quote */}
      <Section>
        <Blockquote
          text="Killing mandatory registration alone accounted for roughly half the conversion uplift. The data was hiding in plain sight."
          attribution="— Retro note, post-launch team review"
        />
      </Section>

      {/* Learnings */}
      <Section alt>
        <SectionLabel label="Learnings" accent="#a855f7" />
        <SectionHeading>What worked, what didn't</SectionHeading>
        <AccordionList accent="#a855f7" items={[
          { title: "The biggest win: killing mandatory registration", content: "Analytics showed 43% of abandoners dropped off at the 'Create Account' gate. Removing it and offering post-purchase account creation (pre-filled from checkout data) contributed roughly 11 of the 21 percentage point lift." },
          { title: "Payment anxiety & trust signals", content: "Users were anxious about saving card data and unsure the site was secure. Adding a security badge strip, 'We never store your card details' line, and prominent padlock reduced payment-step abandonment by 34%." },
          { title: "Shipping cost transparency", content: "The original flow only revealed shipping cost on page 3. Surfacing estimated shipping on the cart page (based on geolocation) reduced 'surprise cost' abandonment significantly." },
          { title: "What didn't work", content: "The side-by-side cart+form layout performed worse than the control — users found the dual-scroll disorienting on mobile. The accordion approach won by 8 percentage points over the linear multi-step flow in A/B testing." },
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
