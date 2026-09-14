"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navigation, profile } from "@/data/profile";
import { CommandPalette } from "@/components/ui/command-palette";

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    function close(event: KeyboardEvent) { if (event.key === "Escape") setMenuOpen(false); }
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  return <header className="site-header"><div className="header-inner">
    <Link href="/" className="brand" aria-label="Prashant Kumar, home"><span className="brand-mark">PK</span><span className="brand-name">Prashant Kumar</span></Link>
    <nav aria-label="Main navigation" id="main-navigation" className={menuOpen ? "main-nav is-open" : "main-nav"}>{navigation.map(item => <Link key={item.label} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</Link>)}</nav>
    <div className="nav-actions"><a className="nav-github" href={profile.github} target="_blank" rel="noreferrer">GitHub</a><CommandPalette /><button className="menu-button" aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? "Close" : "Menu"}</button></div>
  </div></header>;
}
