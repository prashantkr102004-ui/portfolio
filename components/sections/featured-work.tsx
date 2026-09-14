import Link from "next/link";
import { projects } from "@/data/projects";
import { Arrow } from "@/components/ui/arrow";
import { ProjectVisual } from "@/components/projects/project-visual";

export function FeaturedWork() {
  return <section id="work" className="featured-section" aria-labelledby="work-title"><div className="section-heading"><div><span className="eyebrow mono">01 / Featured Work</span><h2 id="work-title">Serious projects, built around real workflows.</h2></div><p>AI/ML, full-stack systems, data pipelines, and product thinking presented as substantial case studies.</p></div>
    <div className="featured-projects">{projects.slice(0, 4).map(project => {
      const visibleStack = project.stack.slice(0, 8);
      const hiddenCount = project.stack.length - visibleStack.length;
      return <article key={project.id} id={project.id} className="project-article"><div className="project-copy"><div className="project-meta mono"><span>{project.number}</span><span>{project.category}</span><span>{project.status}</span></div><p className="project-purpose">{project.subtitle}</p><h3><Link href={`/projects/${project.id}`}>{project.name}<Arrow diagonal /></Link></h3><p className="project-problem">{project.problem}</p><p className="project-description">{project.description}</p><ul className="project-highlights" aria-label={`${project.name} technical highlights`}>{project.highlights.map(item => <li key={item}>{item}</li>)}</ul><div className="tech-list mono">{visibleStack.map(item => <span key={item}>{item}</span>)}{hiddenCount > 0 && <span>+{hiddenCount}</span>}</div><div className="project-actions"><a className="repository-link" href={project.repository} target="_blank" rel="noreferrer" aria-label={`${project.name} on GitHub`}>GitHub <Arrow diagonal /></a></div></div><div className="project-media"><ProjectVisual project={project} /><div className="media-status mono"><span><i /> Architecture view</span><span>{project.number} / 04</span></div></div></article>;
    })}</div>
  </section>;
}
