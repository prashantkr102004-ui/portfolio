import { skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="skills-section" aria-labelledby="skills-title">
      <div className="section-heading">
        <div>
          <span className="eyebrow mono">03 / Skills</span>
          <h2 id="skills-title">The stack behind the work.</h2>
        </div>
        <p>Languages, frameworks, databases, model tooling, and delivery tools used across the portfolio.</p>
      </div>

      <div className="skill-table">
        {skillGroups.map((group, index) => (
          <div className="skill-row" key={group.title}>
            <span className="skill-index mono">0{index + 1}</span>
            <h3>{group.title}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
