import { Arrow } from "@/components/ui/arrow";
import { profile } from "@/data/profile";

export function Hero() {
  return <section className="hero" aria-labelledby="hero-title"><div className="hero-eyebrow mono"><span><i /> A DEVELOPER’S FIELD NOTES</span><span>PORTFOLIO / 2026</span></div>
    <h1 id="hero-title">Intelligent software.<br /><span>Grounded in the real.</span></h1>
    <div className="hero-bottom"><div className="hero-identity"><strong>Prashant Kumar</strong><span className="mono">AI/ML · FULL-STACK SYSTEMS · DATA</span></div><div className="hero-intro"><p>I build data-driven applications for finance, decision-making, and social impact — with care for the system behind the interface.</p><div className="hero-links"><a className="button-primary" href="#work">Explore my work <Arrow /></a><a className="text-link" href={profile.github} target="_blank" rel="noreferrer">GitHub <Arrow diagonal /></a></div></div></div>
    <div className="hero-foot mono"><span>FROM DATA TO DECISIONS. FROM IDEA TO SYSTEM.</span><a href="#work" aria-label="Scroll to selected work">SCROLL TO EXPLORE <span>↓</span></a></div>
  </section>;
}
