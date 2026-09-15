import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="footer mono">
      <span>© 2026 PRASHANT KUMAR</span>
      <span>THOUGHTFULLY BUILT. ALWAYS EVOLVING.</span>
      <a href={`mailto:${profile.email}`}>EMAIL ↗</a>
    </footer>
  );
}
