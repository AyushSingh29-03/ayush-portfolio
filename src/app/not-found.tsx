import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <div className="container">
        <span className="not-found-code">404</span>

        <p className="section-label">PAGE NOT FOUND</p>

        <h1>
          Looks like this
          <br />
          <span>page got lost.</span>
        </h1>

        <p className="not-found-description">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
        </p>

        <Link href="/" className="not-found-link">
          Back to homepage <span>↗</span>
        </Link>
      </div>
    </main>
  );
}
