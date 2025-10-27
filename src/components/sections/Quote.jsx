import React from "react";

export default function Quote({
  text = "",
  author = "",
  role = "",
  accent = "from-indigo-500 to-blue-600",
  className = "my-8",
  children,
}) {
  return (
    <figure
      className={`relative rounded-l-xl rounded-r-3xl p-6 shadow-sm ring-1 ring-neutral-200 md:p-8 ${className}`}
    >
      {/* Decorative gradient bar */}
      <div
        className={`absolute top-0 left-0 h-full w-[6px] rounded-l-3xl bg-gradient-to-b ${accent}`}
        aria-hidden="true"
      />

      <blockquote className="pl-6 text-lg leading-relaxed text-neutral-800 italic md:pl-8">
        {text || children}
      </blockquote>

      {(author || role) && (
        <figcaption className="mt-4 pl-6 text-sm text-neutral-600 md:pl-8">
          — <span className="font-medium text-neutral-800">{author}</span>
          {role && (
            <>
              , <span className="italic">{role}</span>
            </>
          )}
        </figcaption>
      )}
    </figure>
  );
}
