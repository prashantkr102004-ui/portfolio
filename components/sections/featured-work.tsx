"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { projects } from "@/data/projects";
import { profile } from "@/data/profile";
import { Arrow } from "@/components/ui/arrow";
import { ProjectVisual } from "@/components/projects/project-visual";

const featuredProjects = projects.slice(0, 4);

export function FeaturedWork() {
  const previewRef = useRef<HTMLDivElement>(null);
  const previewEnabledRef = useRef(false);
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);
  const activeProject = featuredProjects.find(project => project.id === activeProjectId);

  useEffect(() => {
    const pointerQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updatePreviewAvailability = () => {
      previewEnabledRef.current = pointerQuery.matches && !motionQuery.matches;
      if (!previewEnabledRef.current) setActiveProjectId(null);
    };

    updatePreviewAvailability();
    pointerQuery.addEventListener("change", updatePreviewAvailability);
    motionQuery.addEventListener("change", updatePreviewAvailability);

    return () => {
      pointerQuery.removeEventListener("change", updatePreviewAvailability);
      motionQuery.removeEventListener("change", updatePreviewAvailability);
    };
  }, []);

  function movePreview(event: React.PointerEvent<HTMLElement>) {
    if (!previewEnabledRef.current || !previewRef.current) return;
    const previewWidth = 360;
    const previewHeight = 260;
    const nextX = Math.min(window.innerWidth - previewWidth - 20, event.clientX + 30);
    const nextY = Math.min(window.innerHeight - previewHeight - 20, Math.max(92, event.clientY - 120));
    previewRef.current.style.setProperty("--preview-x", `${nextX}px`);
    previewRef.current.style.setProperty("--preview-y", `${nextY}px`);
  }

  function activatePreview(projectId: string) {
    if (previewEnabledRef.current) setActiveProjectId(projectId);
  }

  function clearPreview() {
    if (previewEnabledRef.current) setActiveProjectId(null);
  }

  return (
    <section id="work" className="featured-section" aria-labelledby="work-title">
      <div className="section-heading numbered-heading">
        <div>
          <span className="eyebrow mono"><span>01</span><i />/ WORK</span>
          <h2 id="work-title">Serious projects, built around real workflows.</h2>
        </div>
        <p>AI/ML, full-stack systems, data pipelines, and product thinking presented as substantial engineering work.</p>
      </div>
      <div className="featured-projects">
        {featuredProjects.map(project => {
          const visibleStack = project.stack.slice(0, 4);
          const extraStack = project.stack.slice(4, 10);
          const hiddenCount = project.stack.length - visibleStack.length - extraStack.length;
          return (
            <article
              key={project.id}
              id={project.id}
              className="project-article"
              onPointerEnter={() => activatePreview(project.id)}
              onPointerMove={movePreview}
              onPointerLeave={clearPreview}
            >
              <div className="project-copy">
                <div className="project-meta mono"><span>{project.number}</span><span>{project.category}</span><span>{project.status}</span></div>
                <p className="project-purpose">{project.subtitle}</p>
                <h3><Link href={`/projects/${project.id}`}>{project.name}<Arrow diagonal /></Link></h3>
                <p className="project-problem">{project.problem}</p>
                <p className="project-description">{project.description}</p>
                <ul className="project-highlights" aria-label={`${project.name} technical highlights`}>{project.highlights.map(item => <li key={item}>{item}</li>)}</ul>
                <div className="tech-list project-tech mono" aria-label={`${project.name} technology stack`}>
                  {visibleStack.map(item => <span key={item}>{item}</span>)}
                  {extraStack.map(item => <span className="tech-extra" key={item}>{item}</span>)}
                  {hiddenCount > 0 && <span className="tech-more-count">+{hiddenCount}</span>}
                </div>
                <div className="project-actions">
                  <Link className="repository-link magnetic-link" href={`/projects/${project.id}`}>View Project <Arrow diagonal /></Link>
                  <a className="repository-link magnetic-link" href={project.repository} target="_blank" rel="noreferrer" aria-label={`${project.name} on GitHub`}>GitHub <Arrow diagonal /></a>
                </div>
              </div>
              <div className="project-media">
                <ProjectVisual project={project} />
                <div className="media-status mono"><span><i /> Architecture view</span><span>{project.number} / 04</span></div>
              </div>
            </article>
          );
        })}
      </div>
      <div
        ref={previewRef}
        className={activeProject ? "cursor-preview is-visible" : "cursor-preview"}
        aria-hidden="true"
      >
        {activeProject ? <ProjectVisual project={activeProject} /> : null}
      </div>
      <div className="more-work" id="more-projects" aria-labelledby="more-work-title">
        <div><span className="eyebrow mono">Explore more projects</span><h3 id="more-work-title">Want to see more of my work?</h3></div>
        <a className="more-work-button magnetic-link" href={profile.github} target="_blank" rel="noreferrer" aria-label="Explore more projects on Prashant Kumar's GitHub">Explore more projects <Arrow diagonal /></a>
      </div>
    </section>
  );
}
