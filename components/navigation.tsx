"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navigation } from "@/data/profile";
import { CommandPalette } from "@/components/ui/command-palette";

const trackedSections = [
  { id: "work", nav: "work" },
  { id: "about", nav: "about" },
  { id: "skills", nav: "skills" },
  { id: "more-projects", nav: "work" },
  { id: "contact", nav: "contact" },
];

function sectionFromHref(href: string) {
  return href.split("#")[1] ?? "";
}

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function close(event: KeyboardEvent) { if (event.key === "Escape") setMenuOpen(false); }
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  useEffect(() => {
    let frame = 0;
    function updateActiveSection() {
      frame = 0;
      setIsScrolled(window.scrollY > 12);
      const marker = Math.min(window.innerHeight * 0.38, 320);
      const current = trackedSections.reduce<{ nav: string; top: number } | null>((active, section) => {
        const element = document.getElementById(section.id);
        if (!element) return active;
        const top = element.getBoundingClientRect().top;
        if (top > marker) return active;
        if (!active || top > active.top) return { nav: section.nav, top };
        return active;
      }, null);
      const atPageEnd = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      setActiveSection(atPageEnd ? "contact" : current?.nav ?? "");
    }
    function requestUpdate() {
      if (frame) return;
      frame = window.requestAnimationFrame(updateActiveSection);
    }
    updateActiveSection();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    window.addEventListener("hashchange", requestUpdate);
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      window.removeEventListener("hashchange", requestUpdate);
    };
  }, []);

  return <header className={isScrolled ? "site-header is-scrolled" : "site-header"}><div className="header-inner">
    <Link href="/" className="brand" aria-label="Prashant Kumar, home"><span className="brand-mark">PK</span><span className="brand-name">Prashant Kumar</span></Link>
    <nav aria-label="Main navigation" id="main-navigation" className={menuOpen ? "main-nav is-open" : "main-nav"}>{navigation.map(item => {
      const section = sectionFromHref(item.href);
      const isActive = section === activeSection;
      return <Link key={item.label} href={item.href} aria-current={isActive ? "location" : undefined} onClick={() => { setActiveSection(section); setMenuOpen(false); }}>{item.label}</Link>;
    })}</nav>
    <div className="nav-actions"><CommandPalette /><button className="menu-button" aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? "Close" : "Menu"}</button></div>
  </div></header>;
}
