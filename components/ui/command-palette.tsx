"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { projects } from "@/data/projects";
import { profile } from "@/data/profile";
import { Arrow } from "@/components/ui/arrow";

type CommandItem = {
  label: string;
  eyebrow: string;
  href: string;
  external?: boolean;
};

function isTypingTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) return false;
  const tagName = target.tagName.toLowerCase();
  return tagName === "input" || tagName === "textarea" || tagName === "select" || target.isContentEditable;
}

const projectCommands: CommandItem[] = projects.slice(0, 4).map(project => ({
  label: project.name,
  eyebrow: `${project.number} · ${project.subtitle}`,
  href: `/projects/${project.id}`,
}));

const commands: CommandItem[] = [
  ...projectCommands,
  { label: "Explore More Projects", eyebrow: "GitHub archive", href: profile.github, external: true },
  { label: "About", eyebrow: "Section", href: "/#about" },
  { label: "Skills", eyebrow: "Section", href: "/#skills" },
  { label: "Contact", eyebrow: "Section", href: "/#contact" },
  { label: "GitHub", eyebrow: "External", href: profile.github, external: true },
  { label: "LinkedIn", eyebrow: "External", href: profile.linkedin, external: true },
  { label: "Email", eyebrow: "mailto", href: `mailto:${profile.email}`, external: true },
];

export function CommandPalette() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const itemsRef = useRef<Array<HTMLButtonElement | null>>([]);

  const filteredCommands = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return commands;
    return commands.filter(command => `${command.label} ${command.eyebrow}`.toLowerCase().includes(normalized));
  }, [query]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      const isCommandShortcut = (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k";
      const isSlashShortcut = event.key === "/" && !isTypingTarget(event.target);

      if (isCommandShortcut || isSlashShortcut) {
        event.preventDefault();
        setOpen(current => {
          if (!current) {
            setQuery("");
            setActiveIndex(0);
          }
          return !current;
        });
        return;
      }

      if (event.key === "Escape") setOpen(false);
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (!open) return;

    const focusTimer = window.setTimeout(() => inputRef.current?.focus(), 30);
    return () => window.clearTimeout(focusTimer);
  }, [open]);

  function openPalette() {
    setQuery("");
    setActiveIndex(0);
    setOpen(true);
  }

  function closePalette() {
    setOpen(false);
  }

  function handleQueryChange(value: string) {
    setQuery(value);
    setActiveIndex(0);
  }

  function runCommand(command: CommandItem) {
    closePalette();
    if (command.external) {
      window.location.assign(command.href);
      return;
    }
    router.push(command.href);
  }

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex(current => Math.min(current + 1, filteredCommands.length - 1));
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex(current => Math.max(current - 1, 0));
      return;
    }

    if (event.key === "Enter") {
      event.preventDefault();
      const command = filteredCommands[activeIndex];
      if (command) runCommand(command);
    }
  }

  useEffect(() => {
    itemsRef.current[activeIndex]?.scrollIntoView({ block: "nearest" });
  }, [activeIndex]);

  return (
    <>
      <button className="command-trigger" type="button" onClick={openPalette} aria-haspopup="dialog" aria-expanded={open}>
        <span className="command-key">⌘ K</span>
      </button>
      {open ? (
        <div className="command-shell" role="dialog" aria-modal="true" aria-label="Command palette" onKeyDown={handleListKeyDown}>
          <button className="command-backdrop" aria-label="Close command palette" onClick={closePalette} />
          <div className="command-panel">
            <div className="command-search">
              <span className="mono">PK</span>
              <input ref={inputRef} value={query} onChange={event => handleQueryChange(event.target.value)} placeholder="Search work, sections, links" aria-label="Search commands" />
              <kbd>Esc</kbd>
            </div>
            <div className="command-list" role="listbox" aria-label="Available commands">
              {filteredCommands.length > 0 ? filteredCommands.map((command, index) => (
                <button
                  key={`${command.href}-${command.label}`}
                  ref={node => { itemsRef.current[index] = node; }}
                  type="button"
                  className={index === activeIndex ? "command-item is-active" : "command-item"}
                  role="option"
                  aria-selected={index === activeIndex}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => runCommand(command)}
                >
                  <span><span className="mono">{command.eyebrow}</span><strong>{command.label}</strong></span>
                  <Arrow diagonal />
                </button>
              )) : <p className="command-empty">No matching command.</p>}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
