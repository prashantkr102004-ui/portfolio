interface ArrowProps {
  diagonal?: boolean;
  className?: string;
}

export function Arrow({ diagonal = false, className = "" }: ArrowProps) {
  const path = diagonal ? "M5 19 19 5M5 5h14v14" : "M4 12h15m-6-6 6 6-6 6";

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className={`arrow ${className}`}>
      <path d={path} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
