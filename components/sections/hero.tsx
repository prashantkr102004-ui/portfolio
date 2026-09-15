import { Arrow } from "@/components/ui/arrow";
import { profile } from "@/data/profile";

const focusAreas = ["Financial intelligence", "Market analysis", "Social-impact platforms", "Payment systems"];

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-kicker mono">
        <span>AI/ML · Full-Stack Systems · Data</span>
      </div>

      <h1 id="hero-title">Prashant Kumar</h1>

      <div className="hero-grid">
        <p className="hero-statement">
          Building intelligent software for finance, decision-making, social impact, and real-world systems.
        </p>
        <div className="hero-panel" aria-label="Current technical focus">
          <span className="mono">Current focus</span>
          <strong>Practical AI systems with clear data flow, strong APIs, and interfaces people can actually use.</strong>
        </div>
      </div>

      <div className="hero-actions">
        <a className="button-primary" href="#work">
          Explore Work <Arrow />
        </a>
        <a className="text-link" href="#contact">
          Connect <Arrow />
        </a>
        <a className="text-link" href={profile.github} target="_blank" rel="noreferrer">
          GitHub <Arrow diagonal />
        </a>
      </div>

      <div className="hero-strip mono" aria-label="Portfolio focus areas">
        {focusAreas.map((area) => (
          <span key={area}>{area}</span>
        ))}
      </div>
    </section>
  );
}
