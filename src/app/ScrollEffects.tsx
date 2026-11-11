
"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function ScrollEffects() {
  useGSAP(() => {
    // Reduced motion wale users ke liye animations disable
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    /* 1. SMOOTH SCROLL */
    const lenis = new Lenis({ lerp: 0.085 });
    lenis.on("scroll", ScrollTrigger.update);

    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    // Navbar anchor links
    const onAnchorClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest('a[href^="#"]');
      if (!link) return;

      const href = link.getAttribute("href");
      if (!href) return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      lenis.scrollTo(target as HTMLElement, {
        offset: -68,
        duration: 1.4,
      });
    };

    document.addEventListener("click", onAnchorClick);

    /* 2. HERO */
    gsap.to(".hero-content", {
      y: -90,
      opacity: 0.2,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    /* 3. INTRO — EARLY SCROLL-LINKED PHOTO REVEAL */
    const mm = gsap.matchMedia();

    mm.add(
      {
        phone: "(max-width: 550px)",
        desktop: "(min-width: 551px)",
      },
      (ctx) => {
        const phone = ctx.conditions?.phone;

        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: ".intro-reveal",

            // Reveal starts as soon as intro enters the viewport
            start: "top bottom",

            // Complete before the sticky intro reaches its final position
            // Keep the reveal linked to the full intro scroll
            end: "bottom bottom",
            scrub: true,
            invalidateOnRefresh: true,
          },
        });

        tl.fromTo(
          ".intro-copy",
          {
            opacity: 0.35,
            y: 45,
          },
          {
            opacity: 1,
            y: 0,
          },
          0
        )
          .fromTo(
            ".intro-image",
            {
              x: phone ? 0 : "9vw",
              y: phone ? "8vh" : "22vh",
              scale: phone ? 1.12 : 1.35,
              opacity: 0.35,
              transformOrigin: "bottom center",
            },
            {
              x: 0,
              y: 0,
              scale: 1,
              opacity: 1,
            },
            0
          )
          .fromTo(
            ".intro-image-glow",
            { scale: 0.7 },
            { scale: 1 },
            0
          );
      }
    );

    /* 4. HEADINGS */
    gsap.utils
      .toArray<HTMLElement>(
        ".about-main h2, .work-heading h2, .services-heading h2, .toolkit-header h2, .developing-header h3, .contact-main h2"
      )
      .forEach((el) => {
        gsap.from(el, {
          y: 70,
          opacity: 0,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
          },
        });
      });

    /* 5. PROJECT CARDS */
    gsap.from(".project-visual, .project-info", {
      y: 80,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.12,
      scrollTrigger: {
        trigger: ".projects-grid",
        start: "top 80%",
      },
    });

    /* 6. TOOLKIT ROWS */
    gsap.utils.toArray<HTMLElement>(".toolkit-category").forEach((row) => {
      gsap.from(row, {
        y: 50,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: row,
          start: "top 90%",
        },
      });
    });

    /* 7. SERVICES */
    gsap.utils.toArray<HTMLElement>(".service-item").forEach((item) => {
      const splash = item.querySelector(".service-splash");
      const card = item.querySelector(".service-card");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(splash, {
        scaleY: 0.4,
        opacity: 0,
        transformOrigin: "bottom",
        duration: 0.7,
        ease: "power3.out",
      }).from(
        card,
        {
          y: 220,
          rotate: 8,
          opacity: 0,
          duration: 0.9,
          ease: "back.out(1.6)",
        },
        0.1
      );
    });

    /* CLEANUP */
    return () => {
      document.removeEventListener("click", onAnchorClick);
      gsap.ticker.remove(tick);
      lenis.destroy();
      mm.revert();
    };
  });

  return null;
}
