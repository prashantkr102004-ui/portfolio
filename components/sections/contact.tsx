import { profile } from "@/data/profile";
import { Arrow } from "@/components/ui/arrow";
export function Contact() {
  return <section id="contact" className="contact-section" aria-labelledby="contact-title"><div className="contact-inner"><span className="eyebrow mono">06 / LET’S CONNECT</span><div className="contact-heading"><h2 id="contact-title">An interesting problem?<br /><span>Let’s talk about it.</span></h2><a className="contact-arrow" href={`mailto:${profile.email}`} aria-label="Email Prashant Kumar"><Arrow diagonal /></a></div><div className="contact-bottom"><a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}<Arrow diagonal /></a><div><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <Arrow diagonal /></a><a href={profile.github} target="_blank" rel="noreferrer">GitHub <Arrow diagonal /></a></div></div></div></section>;
}
