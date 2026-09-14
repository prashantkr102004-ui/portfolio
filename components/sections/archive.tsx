import Link from "next/link";
import { projects } from "@/data/projects";
import { Arrow } from "@/components/ui/arrow";
export function Archive() {
  return <section className="archive-section" id="more-projects" aria-labelledby="archive-title"><div className="section-heading"><div><span className="eyebrow mono">04 / Additional Projects</span><h2 id="archive-title">Experimental systems worth opening.</h2></div><p>Adaptive ML experimentation and structured AI interaction design, presented with clear limits.</p></div>{projects.slice(4).map(project => <article id={project.id} className="archive-project" key={project.id}><span className="mono archive-number">{project.number}</span><div><span className="eyebrow mono">{project.category}</span><h3><Link href={`/projects/${project.id}`}>{project.name}<Arrow diagonal /></Link></h3><p>{project.description}</p><div className="tech-list mono">{project.stack.map(item => <span key={item}>{item}</span>)}</div></div><a className="repository-link" href={project.repository} target="_blank" rel="noreferrer" aria-label={`${project.name} on GitHub`}>GitHub <Arrow diagonal /></a></article>)}</section>;
}
