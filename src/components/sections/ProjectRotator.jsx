import React from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";

/**
 * Renders ONE project at a time and rotates through them.
 * Props:
 * - items: [{ title, description, link, image, skills }]
 * - CardComponent: your card component (e.g. ProjectCardv2)
 * - intervalMs: auto-rotate interval
 */
export default function ProjectRotator({
  items = [],
  CardComponent,
  intervalMs = 1500,
  className = "",
}) {
  const [index, setIndex] = React.useState(0);
  const [paused, setPaused] = React.useState(false);

  const safeIndex = ((index % items.length) + items.length) % items.length;

  React.useEffect(() => {
    if (paused || items.length <= 1) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % items.length),
      intervalMs,
    );
    return () => clearInterval(id);
  }, [paused, items.length, intervalMs]);

  const go = (dir) => setIndex((i) => (i + dir + items.length) % items.length);

  return (
    <section
      className={`mt-8 w-full max-w-6xl ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* The viewport */}
      <div className="relative mx-auto w-full overflow-hidden rounded-3xl">
        <AnimatePresence initial={false} mode="popLayout">
          <Motion.div
            key={safeIndex}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.45 }}
            className="w-full"
          >
            <CardComponent {...items[safeIndex]} />
          </Motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-4">
          <button
            aria-label="Previous project"
            onClick={() => go(-1)}
            className="pointer-events-auto flex h-8 w-8 items-center justify-center rounded-full bg-white/50 shadow ring-1 ring-neutral-200 backdrop-blur hover:bg-white"
          >
            ←
          </button>
          <button
            aria-label="Next project"
            onClick={() => go(1)}
            className="pointer-events-auto flex h-8 w-8 items-center justify-center rounded-full bg-white/50 shadow ring-1 ring-neutral-200 backdrop-blur hover:bg-white"
          >
            →
          </button>
        </div>
      </div>

      {/* Dots */}
      <div className="mt-8 flex justify-center gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full transition ${
              i === safeIndex
                ? "bg-white"
                : "bg-neutral-500 hover:bg-orange-500"
            }`}
            aria-label={`Go to project ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
