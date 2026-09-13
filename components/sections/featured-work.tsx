import Link from "next/link";
import { projects } from "@/data/projects";
import { Arrow } from "@/components/ui/arrow";
import { ProjectVisual } from "@/components/projects/project-visual";

export function FeaturedWork() {
  return <section id="work" className="featured-section" aria-labelledby="work-title"><div className="section-heading"><div><span className="eyebrow mono">01 / SELECTED WORK</span><h2 id="work-title">Built to do something.</h2></div><p>Four projects. Different problems.<br /> A shared focus on useful systems.</p></div>
    <div className="featured-projects">{projects.slice(0, 4).map(project => <article key={project.id} id={project.id} className="project-article"><div className="project-copy"><div className="project-meta mono"><span>{project.number}</span><span>{project.category}</span></div><h3><Link href={`/projects/${project.id}`}>{project.name}<Arrow diagonal /></Link></h3><p className="project-subtitle">{project.subtitle}</p><p className="project-problem">{project.problem}</p><p className="project-description">{project.description}</p><ul className="project-highlights">{project.highlights.map(item => <li key={item}>{item}</li>)}</ul><div className="tech-list mono">{project.stack.map(item => <span key={item}>{item}</span>)}</div><div className="project-actions"><Link className="text-link" href={`/projects/${project.id}`}>Inside the project <Arrow /></Link><a className="repository-link" href={project.repository} target="_blank" rel="noreferrer" aria-label={`${project.name} on GitHub`}>GitHub <Arrow diagonal /></a></div></div><div className="project-media"><ProjectVisual project={project} /><div className="media-status mono"><span><i />{project.status}</span><span>{project.number} / 04</span></div></div></article>)}</div>
  </section>;
}
