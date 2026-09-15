import { Arrow } from "@/components/ui/arrow";
import { profile } from "@/data/profile";

const contactLinks = [
  {
    label: "Email Prashant Kumar",
    href: `mailto:${profile.email}`,
    tone: "email",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4.75 6.75h14.5v10.5H4.75z" />
        <path d="m5.25 7.25 6.75 5 6.75-5" />
      </svg>
    ),
  },
  {
    label: "Prashant Kumar on LinkedIn",
    href: profile.linkedin,
    tone: "linkedin",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.5 10.25v7.25" />
        <path d="M6.5 6.5v.01" />
        <path d="M10.5 17.5v-7.25" />
        <path d="M10.5 13.45c0-1.82 1.14-3.2 2.92-3.2 1.63 0 2.58 1.04 2.58 3.15v4.1" />
      </svg>
    ),
  },
  {
    label: "Prashant Kumar on GitHub",
    href: profile.github,
    tone: "github",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M9.25 19.25c-4 1.25-4-2-5.5-2.5" />
        <path d="M14.75 21v-3.25c0-.92.08-1.28-.45-1.8 2.5-.28 5.2-1.22 5.2-5.55 0-1.23-.43-2.23-1.15-3.02.12-.28.5-1.43-.1-2.98 0 0-.95-.3-3.1 1.15A10.65 10.65 0 0 0 12 5.15c-1.07 0-2.14.14-3.15.4C6.7 4.1 5.75 4.4 5.75 4.4c-.6 1.55-.22 2.7-.1 2.98A4.34 4.34 0 0 0 4.5 10.4c0 4.3 2.68 5.28 5.18 5.56-.35.3-.68.88-.78 1.72" />
      </svg>
    ),
  },
];

export function Contact() {
  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-title">
      <div className="contact-inner">
        <span className="eyebrow mono">04 / Contact</span>
        <div className="contact-heading">
          <h2 id="contact-title">Have an interesting problem to build?</h2>
          <a className="contact-arrow" href={`mailto:${profile.email}`} aria-label="Email Prashant Kumar">
            <Arrow diagonal />
          </a>
        </div>
        <p className="contact-copy">
          I am most interested in AI/ML products, data-heavy interfaces, full-stack systems, and practical software that
          has to work beyond the demo.
        </p>
        <div className="contact-bottom">
          <div className="contact-links" aria-label="Contact links">
            {contactLinks.map((link) => {
              const isExternal = link.href.startsWith("http");

              return (
                <a
                  className="contact-icon-link"
                  data-tone={link.tone}
                  href={link.href}
                  key={link.label}
                  aria-label={link.label}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noreferrer" : undefined}
                >
                  {link.icon}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
