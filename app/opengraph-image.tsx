import { ImageResponse } from "next/og";
export const alt = "Prashant Kumar — Intelligent software. Grounded in the real.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(<div style={{ display: "flex", flexDirection: "column", width: "100%", height: "100%", background: "#f6f5f0", color: "#242722", padding: "68px 76px", fontFamily: "sans-serif" }}><div style={{ display: "flex", justifyContent: "space-between", fontSize: 23 }}><span>pk ↗</span><span>PRASHANT KUMAR / PORTFOLIO</span></div><div style={{ display: "flex", flexDirection: "column", fontSize: 79, letterSpacing: "-4px", marginTop: 96, lineHeight: 1.1 }}><span>Intelligent software.</span><span style={{ color: "#58665b" }}>Grounded in the real.</span></div><div style={{ display: "flex", marginTop: "auto", borderTop: "1px solid #c9ccc3", paddingTop: 27, fontSize: 22 }}>AI/ML · FULL-STACK SYSTEMS · DATA</div></div>, size);
}
