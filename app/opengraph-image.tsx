import { ImageResponse } from "next/og";
export const alt = "Prashant Kumar — Intelligent software. Grounded in the real.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(<div style={{ display: "flex", flexDirection: "column", width: "100%", height: "100%", background: "#08090a", color: "#f4efe4", padding: "68px 76px", fontFamily: "sans-serif" }}><div style={{ display: "flex", justifyContent: "space-between", fontSize: 23 }}><span style={{ color: "#d1a75f" }}>PK</span><span>PRASHANT KUMAR / PORTFOLIO</span></div><div style={{ display: "flex", flexDirection: "column", fontSize: 76, marginTop: 96, lineHeight: 1.12 }}><span>AI/ML and full-stack</span><span style={{ color: "#9f988d" }}>systems for real problems.</span></div><div style={{ display: "flex", marginTop: "auto", borderTop: "1px solid #2a2d2f", paddingTop: 27, fontSize: 22 }}>Finance · Decision support · Social impact · Adaptive ML</div></div>, size);
}
