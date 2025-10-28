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
      <div className="relative mx-auto w-full overflow-hidden rounded-3xl bg-white ring-1 ring-neutral-200">
        <AnimatePresence initial={false} mode="popLayout">
          <Motion.div
            key={safeIndex}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.45 }}
            className="p-3 sm:p-4"
          >
            <CardComponent {...items[safeIndex]} />
          </Motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-2">
          <button
            aria-label="Previous project"
            onClick={() => go(-1)}
            className="pointer-events-auto rounded-full bg-white/80 p-2 shadow ring-1 ring-neutral-200 backdrop-blur hover:bg-white"
          >
            ◀
          </button>
          <button
            aria-label="Next project"
            onClick={() => go(1)}
            className="pointer-events-auto rounded-full bg-white/80 p-2 shadow ring-1 ring-neutral-200 backdrop-blur hover:bg-white"
          >
            ▶
          </button>
        </div>

        {/* Dots */}
        <div className="absolute right-0 bottom-1 left-0 mt-8 flex justify-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 w-2 rounded-full transition ${
                i === safeIndex
                  ? "bg-orange-500"
                  : "bg-neutral-300 hover:bg-neutral-400"
              }`}
              aria-label={`Go to project ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
