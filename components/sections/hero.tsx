"use client";

import { useEffect, useRef } from "react";
import { Arrow } from "@/components/ui/arrow";
import { profile } from "@/data/profile";

const focusAreas = ["Financial intelligence", "Decision support", "Social-impact platforms", "Payment infrastructure"];

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = heroRef.current;
    if (!element) return;

    const pointerQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!pointerQuery.matches || motionQuery.matches) return;

    let frame = 0;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const paint = () => {
      currentX += (targetX - currentX) * 0.16;
      currentY += (targetY - currentY) * 0.16;
      element.style.setProperty("--hero-x", `${currentX.toFixed(2)}px`);
      element.style.setProperty("--hero-y", `${currentY.toFixed(2)}px`);

      if (Math.abs(targetX - currentX) > 0.02 || Math.abs(targetY - currentY) > 0.02) {
        frame = window.requestAnimationFrame(paint);
        return;
      }

      frame = 0;
    };

    const requestPaint = () => {
      if (!frame) frame = window.requestAnimationFrame(paint);
    };

    const handlePointerMove = (event: PointerEvent) => {
      const rect = element.getBoundingClientRect();
      const relativeX = (event.clientX - rect.left) / rect.width;
      const relativeY = (event.clientY - rect.top) / rect.height;
      targetX = (relativeX - 0.5) * 6;
      targetY = (relativeY - 0.5) * 4;
      element.style.setProperty("--hero-light-x", `${Math.round(relativeX * 100)}%`);
      element.style.setProperty("--hero-light-y", `${Math.round(relativeY * 100)}%`);
      requestPaint();
    };

    const handlePointerLeave = () => {
      targetX = 0;
      targetY = 0;
      element.style.setProperty("--hero-light-x", "50%");
      element.style.setProperty("--hero-light-y", "38%");
      requestPaint();
    };

    element.addEventListener("pointermove", handlePointerMove, { passive: true });
    element.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      element.removeEventListener("pointermove", handlePointerMove);
      element.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return (
    <section ref={heroRef} className="hero hero-enhanced" aria-labelledby="hero-title">
      <div className="hero-light" aria-hidden="true" />
      <h1 id="hero-title" className="hero-name" aria-label="Prashant Kumar">
        <span className="hero-name-line hero-name-line-one"><span>PRASHANT</span></span>
        <span className="hero-name-line hero-name-line-two"><span>KUMAR</span></span>
      </h1>
      <p className="hero-discipline mono">AI/ML · FULL-STACK · DATA · SYSTEMS</p>
      <div className="hero-grid hero-copy-reveal">
        <p className="hero-statement">Building intelligent software for finance, decision-making, social impact, and real-world systems.</p>
        <div className="hero-panel" aria-label="Current technical focus"><span className="mono">Current focus</span><strong>Practical AI systems with clear data flow, strong APIs, and interfaces people can actually use.</strong></div>
      </div>
      <div className="hero-actions hero-copy-reveal">
        <a className="button-primary magnetic-link" href="#work">Explore Work <Arrow diagonal /></a>
        <a className="text-link magnetic-link" href={profile.github} target="_blank" rel="noreferrer">View GitHub <Arrow diagonal /></a>
        <a className="text-link magnetic-link" href="#contact">Contact <Arrow diagonal /></a>
      </div>
      <div className="hero-strip mono hero-copy-reveal" aria-label="Portfolio focus areas">{focusAreas.map(area => <span key={area}>{area}</span>)}</div>
    </section>
  );
}
