import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main-content" className="page-container not-found">
      <span className="eyebrow mono">404 / NOT FOUND</span>
      <h1>
        This page took
        <br />a different path.
      </h1>
      <p>The project or page you’re looking for isn’t here.</p>
      <Link className="button-primary" href="/">
        Back to the portfolio →
      </Link>
    </main>
  );
}
