"use client";

import React, { useEffect, useRef, useState } from "react";

interface EventsAnimatedViewProps {
  children: React.ReactNode;
}

export default function EventsAnimatedView({ children }: EventsAnimatedViewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [heroMounted, setHeroMounted] = useState(false);

  useEffect(() => {
    // Check user preference for reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Trigger hero entrance after slight mount delay
    const heroTimer = setTimeout(() => {
      setHeroMounted(true);
    }, 60);

    if (prefersReducedMotion) {
      // In reduced motion mode, reveal all elements immediately without translation
      if (containerRef.current) {
        const revealElements = containerRef.current.querySelectorAll<HTMLElement>(
          "[data-events-reveal], [data-events-card], [data-events-step]"
        );
        revealElements.forEach((el) => {
          el.style.opacity = "1";
          el.style.transform = "none";
          el.classList.add("events-revealed");
        });
      }
      return () => clearTimeout(heroTimer);
    }

    // IntersectionObserver for scroll-triggered reveals
    const observerCallback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          target.classList.add("events-revealed");
          observer.unobserve(target); // Reveal once
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "0px 0px -60px 0px",
      threshold: 0.12,
    });

    if (containerRef.current) {
      const revealElements = containerRef.current.querySelectorAll<HTMLElement>(
        "[data-events-reveal], [data-events-card], [data-events-step]"
      );
      revealElements.forEach((el) => observer.observe(el));
    }

    return () => {
      clearTimeout(heroTimer);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`events-page-root ${heroMounted ? "hero-animated" : ""}`}
    >
      {children}
    </div>
  );
}

