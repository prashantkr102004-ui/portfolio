"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { projects } from "@/data/projects";
import { profile } from "@/data/profile";
import { Arrow } from "./arrow";

const commands = [
  ...projects.map(project => ({ label: project.name, category: "Project", href: `/projects/${project.id}`, keywords: `${project.category} ${project.subtitle} ${project.stack.join(" ")} ${project.id === "self-healing-ml" ? "Self-Healing ML" : ""}` })),
  ...["About", "Skills", "Contact"].map(label => ({ label, category: "Section", href: `/#${label.toLowerCase()}`, keywords: "" })),
  { label: "GitHub", category: "Link", href: profile.github, keywords: "code repositories" },
  { label: "LinkedIn", category: "Link", href: profile.linkedin, keywords: "connect" },
  { label: "Email", category: "Link", href: `mailto:${profile.email}`, keywords: "contact" },
];
export function CommandPalette() {
  const dialog = useRef<HTMLDialogElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);
  const router = useRouter();
  const results = commands.filter(item => `${item.label} ${item.category} ${item.keywords}`.toLowerCase().includes(query.toLowerCase().trim()));
  function open() { setQuery(""); setSelected(0); dialog.current?.showModal(); input.current?.focus(); }
  function close() { dialog.current?.close(); trigger.current?.focus(); }
  function activate(href: string) { close(); if (href.startsWith("/")) router.push(href); else window.location.assign(href); }
  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      const target = event.target as HTMLElement;
      const editing = target.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName);
      if (((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") || (event.key === "/" && !editing)) {
        event.preventDefault();
        if (dialog.current?.open) dialog.current.close();
        else { setQuery(""); setSelected(0); dialog.current?.showModal(); input.current?.focus(); }
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  useEffect(() => { document.getElementById(`command-${selected}`)?.scrollIntoView({ block: "nearest" }); }, [selected]);
  return <>
    <button ref={trigger} className="command-trigger" onClick={open} aria-label="Open command palette" title="Open command palette"><span>Command</span></button>
    <dialog ref={dialog} className="command-dialog" aria-labelledby="command-title" onClose={() => trigger.current?.focus()} onClick={event => { if (event.target === dialog.current) close(); }} onKeyDown={event => {
      if (event.key === "ArrowDown") { event.preventDefault(); setSelected(value => results.length ? (value + 1) % results.length : 0); }
      if (event.key === "ArrowUp") { event.preventDefault(); setSelected(value => results.length ? (value - 1 + results.length) % results.length : 0); }
      if (event.key === "Enter" && event.target === input.current && results[selected]) { event.preventDefault(); activate(results[selected].href); }
    }}>
      <div className="command-top"><label id="command-title" htmlFor="command-search">Search portfolio</label><button onClick={close} aria-label="Close command palette">Close</button></div>
      <input ref={input} id="command-search" role="combobox" aria-autocomplete="list" aria-expanded="true" aria-controls="command-results" aria-activedescendant={results[selected] ? `command-${selected}` : undefined} placeholder="Projects, sections, links..." value={query} onChange={event => { setQuery(event.target.value); setSelected(0); }} autoComplete="off" />
      <div id="command-results" role="listbox" aria-label="Navigation results" className="command-results">{results.map((item, index) => <div key={item.href} role="option" id={`command-${index}`} aria-selected={index === selected} className={index === selected ? "command-result selected" : "command-result"} onMouseMove={() => setSelected(index)} onClick={() => activate(item.href)}><span><small>{item.category}</small>{item.label}</span><Arrow diagonal /></div>)}{results.length === 0 && <p className="empty-results" role="status">No matches. Try finance, React, or About.</p>}</div>
    </dialog>
  </>;
}
