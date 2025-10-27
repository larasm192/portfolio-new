// components/Prototyping.jsx
import React from "react";

/* ---------- Iteration Gallery ---------- */
export function IterationGallery({
  title,
  items = [], // [{label:'V1', img:'', alt:'', why:'', isFinal:false}],
  className = "",
}) {
  return (
    <section
      className={`rounded-2xl bg-neutral-50 p-5 ring-1 ring-neutral-200 md:p-6 ${className}`}
    >
      <h3 className="text-xl font-semibold text-neutral-900">{title}</h3>

      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
        {items.map((it, i) => (
          <figure
            key={i}
            className="rounded-xl bg-white p-3 shadow-sm ring-1 ring-neutral-200"
          >
            <div className="relative overflow-hidden rounded-lg bg-neutral-100">
              {it.img ? (
                <img
                  src={it.img}
                  alt={it.alt || `${title} ${it.label}`}
                  className="h-40 w-full object-cover"
                />
              ) : (
                <div className="flex h-40 items-center justify-center text-sm text-neutral-500">
                  (image)
                </div>
              )}
              {it.isFinal && (
                <span className="absolute top-2 right-2 rounded-md bg-emerald-600 px-2 py-0.5 text-xs font-medium text-white">
                  Final
                </span>
              )}
            </div>
            <figcaption className="mt-2 text-sm">
              <div className="flex items-center justify-between">
                <span className="font-medium text-neutral-900">{it.label}</span>
              </div>
              {it.why && (
                <p className="mt-1 text-neutral-700">
                  <span className="font-medium text-neutral-900">
                    Why improve:{" "}
                  </span>
                  {it.why}
                </p>
              )}
              {it.isFinal && it.finalWhy && (
                <p className="mt-1 text-neutral-800">
                  <span className="font-medium text-neutral-900">
                    Why final:{" "}
                  </span>
                  {it.finalWhy}
                </p>
              )}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

/* ---------- Electronics: Feature List ---------- */
export function FeatureList({
  title = "Electronics",
  fritzingImg,
  fritzingAlt = "Fritzing diagram",
  features = [], // [{name:'Extension', desc:'DC motor + DRV8833…'}]
  className = "",
}) {
  return (
    <section
      className={`rounded-2xl bg-neutral-50 p-5 ring-1 ring-neutral-200 md:p-6 ${className}`}
    >
      <h3 className="text-xl font-semibold text-neutral-900">{title}</h3>

      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* Diagram */}
        <div className="rounded-xl bg-white p-3 shadow-sm ring-1 ring-neutral-200">
          <div className="overflow-hidden rounded-lg bg-neutral-100">
            {fritzingImg ? (
              <img
                src={fritzingImg}
                alt={fritzingAlt}
                className="h-64 w-full object-cover"
              />
            ) : (
              <div className="flex h-64 items-center justify-center text-sm text-neutral-500">
                (Fritzing diagram)
              </div>
            )}
          </div>
          <p className="mt-2 text-xs text-neutral-500">{fritzingAlt}</p>
        </div>

        {/* Features */}
        <ul className="space-y-3">
          {features.map((f, i) => (
            <li
              key={i}
              className="rounded-xl bg-white p-3 shadow-sm ring-1 ring-neutral-200"
            >
              <div className="text-sm">
                <span className="font-semibold text-neutral-900">
                  {f.name}:{" "}
                </span>
                <span className="text-neutral-800">{f.desc}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- Optional Wrapper: PrototypingBlock ---------- */
export default function PrototypingBlock({
  sections = [],
  className = "mt-8",
}) {
  // sections can include both iteration galleries and the electronics block
  // e.g. [{type:'iteration', ...props}, {type:'electronics', ...props}]
  return (
    <div className={`space-y-6 ${className}`}>
      {sections.map((s, i) =>
        s.type === "electronics" ? (
          <FeatureList key={i} {...s} />
        ) : (
          <IterationGallery key={i} {...s} />
        ),
      )}
    </div>
  );
}
