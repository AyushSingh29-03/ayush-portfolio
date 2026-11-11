
"use client";

import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";
const navLinks = [
  { label: "About", href: "#about" },
  { label: "Education", href: "/education" },
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const PHASES = ["name", "arrow", "travel", "morph", "reveal", "done"] as const;
type Phase = (typeof PHASES)[number];

// Full intro duration: 3 seconds
const STEPS: [number, Phase][] = [
  [650, "arrow"],
  [1100, "travel"],
  [2900, "morph"],
  [3500, "reveal"],
];

const INTRO_END = 4000;

const idx = (n: number) => ({ "--i": n }) as CSSProperties;

function shouldSkipIntro() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const [phase, setPhase] = useState<Phase>(() =>
    typeof window !== "undefined" && shouldSkipIntro() ? "done" : "name"
  );

  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const endSplash = useCallback(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];

    document.body.style.overflow = "";
    setPhase("done");


  }, []);

  useEffect(() => {
    if (phase === "done") return;

    document.body.style.overflow = "hidden";
    window.scrollTo(0, 0);

    timers.current = [
      ...STEPS.map(([ms, next]) => setTimeout(() => setPhase(next), ms)),
      setTimeout(endSplash, INTRO_END),
    ];

    return () => {
      timers.current.forEach(clearTimeout);
      document.body.style.overflow = "";
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endSplash]);

  const p = PHASES.indexOf(phase);
  const navState = phase === "done" || phase === "reveal" ? phase : "running";

  return (
    <>
      {phase !== "done" && (
        <div
          className={`splash ${phase === "reveal" ? "is-out" : ""}`}
          aria-hidden="true"
        >
          <h1 className={`splash-name ${p >= 1 ? "is-gone" : ""}`}>
            AYUSH SINGH<span>.</span>
          </h1>

          <div
            className={[
              "splash-orb",
              p >= 1 && "is-arrow",
              p >= 2 && "is-travel",
              p >= 3 && "is-morph",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M7 17L17 7M9 7h8v8"
                stroke="#2456E8"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <button
            type="button"
            className="splash-skip"
            onClick={endSplash}
          >
            Skip
          </button>
        </div>
      )}

      <nav className="navbar" data-intro={navState}>
        <div className="container nav-inner">
          <a
            href="#home"
            className="brand"
            style={idx(0)}
            onClick={() => setOpen(false)}
          >
            AYUSH SINGH <span>.</span>
          </a>

          <div className="nav-links">
            {navLinks.map((link, i) => (
              <a key={link.label} href={link.href} style={idx(i + 1)}>
                <small>{String(i + 1).padStart(2, "0")}</small>{" "}
                {link.label}
              </a>
            ))}
          </div>

          <div className="nav-right">
            <a href="#contact" className="nav-cta" style={idx(6)}>
              connect <span>↗</span>
            </a>

            <button
              type="button"
              className={`menu-toggle ${open ? "is-open" : ""}`}
              style={idx(7)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>

        <div
          id="mobile-menu"
          className={`mobile-menu ${open ? "show" : ""}`}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
}
