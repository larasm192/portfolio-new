import React from "react";
import { motion as Motion } from "framer-motion";

export default function ProjectCardv4({
  title,
  description,
  image, // src URL
  link = "#",
  skills = [],
  className = "",
  imageAlt = "",
}) {
  return (
    <a
      href={link}
      className={`group relative block aspect-[16/9] overflow-hidden rounded-3xl shadow-sm ring-1 ring-neutral-200 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 ${className}`}
    >
      {/* Full-bleed image */}
      <img
        src={image}
        alt={imageAlt || title}
        className="h-full w-full object-cover object-center"
      />

      {/* Subtle gradient at bottom (always on) */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent"
        aria-hidden="true"
      />

      {/* Hover/focus overlay with content */}
      <Motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        whileFocus={{ opacity: 1 }}
        className="absolute inset-0 flex flex-col justify-end bg-black/55 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus:opacity-100"
      >
        <div className="p-4 md:p-5">
          <h3 className="text-3xl font-semibold text-white">{title}</h3>
          {description && (
            <p className="mt-1 line-clamp-2 text-base text-neutral-200">
              {description}
            </p>
          )}

          {!!skills.length && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {skills.map((s, i) => (
                <span
                  key={i}
                  className="rounded-full bg-white/15 px-2 py-0.5 text-xs text-white ring-1 ring-white/20"
                >
                  {s}
                </span>
              ))}
            </div>
          )}

          <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-white/90">
            View Project <span aria-hidden>→</span>
          </span>
        </div>
      </Motion.div>
    </a>
  );
}
