import Link from "next/link";

export default function Education() {
  return (
    <main className="education-page">
      <div className="container">
        <Link href="/" className="education-back">
          ← Back to home
        </Link>

        <p className="education-eyebrow">ACADEMIC BACKGROUND</p>

        <h1>
          The foundation
          <br />
          <span>I&apos;m building on.</span>
        </h1>

        <div className="education-detail">
          <div>
            <span className="education-status">CURRENTLY PURSUING</span>
            <h2>Ganpat University</h2>
            <p>B.Tech — Computer Engineering (AI)</p>
          </div>

          <span className="education-date">2029</span>
        </div>
      </div>
    </main>
  );
}