import Link from "next/link";
import { ProjectVisual } from "@/components/projects/project-visual";
import { Arrow } from "@/components/ui/arrow";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";

export function FeaturedWork() {
  return (
    <section id="work" className="featured-section" aria-labelledby="work-title">
      <div className="section-heading">
        <div>
          <span className="eyebrow mono">01 / Featured Work</span>
          <h2 id="work-title">Serious projects, built around real workflows.</h2>
        </div>
        <p>AI/ML, full-stack systems, data pipelines, and product thinking presented as substantial case studies.</p>
      </div>

      <div className="featured-projects">
        {projects.map((project) => {
          const visibleStack = project.stack.slice(0, 8);
          const hiddenCount = project.stack.length - visibleStack.length;

          return (
            <article key={project.id} id={project.id} className="project-article">
              <div className="project-copy">
                <div className="project-meta mono">
                  <span>{project.number}</span>
                  <span>{project.category}</span>
                  <span>{project.status}</span>
                </div>
                <p className="project-purpose">{project.subtitle}</p>
                <h3>
                  <Link href={`/projects/${project.id}`}>
                    {project.name}
                    <Arrow diagonal />
                  </Link>
                </h3>
                <p className="project-problem">{project.problem}</p>
                <p className="project-description">{project.description}</p>
                <ul className="project-highlights" aria-label={`${project.name} technical highlights`}>
                  {project.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="tech-list mono">
                  {visibleStack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                  {hiddenCount > 0 && <span>+{hiddenCount}</span>}
                </div>
                <div className="project-actions">
                  <a
                    className="repository-link"
                    href={project.repository}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.name} on GitHub`}
                  >
                    GitHub <Arrow diagonal />
                  </a>
                </div>
              </div>

              <div className="project-media">
                <ProjectVisual project={project} />
                <div className="media-status mono">
                  <span>
                    <i /> Architecture view
                  </span>
                  <span>{project.number} / 04</span>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="more-work" id="more-projects" aria-labelledby="more-work-title">
        <div>
          <span className="eyebrow mono">Explore more projects</span>
          <h3 id="more-work-title">Want to see more of my work?</h3>
        </div>
        <a
          className="more-work-button"
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          aria-label="Explore more projects on Prashant Kumar's GitHub"
        >
          Explore more projects <Arrow diagonal />
        </a>
      </div>
    </section>
  );
}
