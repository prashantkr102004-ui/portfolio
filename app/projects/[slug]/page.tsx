import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectVisual } from "@/components/projects/project-visual";
import { Arrow } from "@/components/ui/arrow";
import { projects } from "@/data/projects";
import { getSiteUrl } from "@/lib/site-url";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.id === slug);

  if (!project) return {};

  const url = getSiteUrl();
  const projectUrl = url ? new URL(`/projects/${slug}`, url) : undefined;

  return {
    title: project.name,
    description: project.description,
    ...(url ? { alternates: { canonical: `/projects/${slug}` } } : {}),
    openGraph: {
      title: `${project.name} — Prashant Kumar`,
      description: project.description,
      type: "article",
      ...(projectUrl ? { url: projectUrl } : {}),
    },
    twitter: {
      card: "summary",
      title: `${project.name} — Prashant Kumar`,
      description: project.description,
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.id === slug);

  if (!project) notFound();

  const next = projects[(projects.indexOf(project) + 1) % projects.length];

  return (
    <main id="main-content" className="page-container detail-page">
      <Link href="/#work" className="back-link mono">
        ← ALL WORK
      </Link>

      <div className="detail-eyebrow mono">
        <span>PROJECT / {project.number}</span>
        <span>{project.category}</span>
      </div>
      <h1>{project.name}</h1>
      <p className="detail-subtitle">{project.subtitle}</p>

      <div className="detail-intro">
        <p>{project.description}</p>
        <a className="button-primary" href={project.repository} target="_blank" rel="noreferrer">
          View on GitHub <Arrow diagonal />
        </a>
      </div>

      <div className="detail-status mono">
        <i />
        {project.status}
      </div>

      <ProjectVisual project={project} />

      <div className="detail-body">
        <aside>
          <span className="eyebrow mono">TECHNOLOGY</span>
          <div className="tech-list mono">
            {project.stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <a className="repository-link" href={project.repository} target="_blank" rel="noreferrer">
            Source on GitHub <Arrow diagonal />
          </a>
        </aside>

        <div className="detail-prose">
          <section>
            <span className="eyebrow mono">01 / THE PROBLEM</span>
            <h2>{project.problem}</h2>
          </section>
          <section>
            <span className="eyebrow mono">02 / THE APPROACH</span>
            <h2>How the pieces fit.</h2>
            <p>{project.approach}</p>
            <ol className="architecture-flow">
              {project.flow.map((step, index) => (
                <li key={step}>
                  <span className="mono">0{index + 1}</span>
                  {step}
                </li>
              ))}
            </ol>
          </section>
          <section>
            <span className="eyebrow mono">03 / ENGINEERING CONSIDERATIONS</span>
            <h2>Built with the context in mind.</h2>
            <p>{project.considerations}</p>
            <ul className="detail-highlights">
              {project.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      <Link className="next-project" href={`/projects/${next.id}`}>
        <span>
          <span className="eyebrow mono">NEXT PROJECT / {next.number}</span>
          <strong>{next.name}</strong>
        </span>
        <Arrow />
      </Link>
    </main>
  );
}
