export default function Loading() {
  return (
    <div className="container loading-page" role="status" aria-label="Loading page">
      <div className="skeleton skeleton-title" />
      <div className="skeleton skeleton-copy" />
      <div className="menu-grid">
        {[1, 2, 3, 4].map((key) => (
          <div key={key} className="skeleton skeleton-card" />
        ))}
      </div>
      <span className="sr-only">Preparing something good…</span>
    </div>
  );
}
