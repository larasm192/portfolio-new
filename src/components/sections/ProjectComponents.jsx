import { motion as Motion } from "framer-motion";

export function Badge({ label, value }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-2xl bg-white/80 px-3 py-1 text-sm ring-1 ring-neutral-300 backdrop-blur">
      <span className="text-neutral-500">{label}:</span>
      <span className="font-medium">{value}</span>
    </span>
  );
}

export function MiniStat({ label, value, hint }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-3">
      <div className="text-neutral-500">{label}</div>
      <div className="text-lg font-bold">{value}</div>
      {hint && <div className="text-xs text-neutral-500">{hint}</div>}
    </div>
  );
}

export function SectionDivider({ label }) {
  return (
    <div className="mx-auto max-w-6xl pb-4">
      <div className="flex items-center gap-4">
        <div className="h-px w-8 bg-neutral-300" />
        <h2 className="text-2xl font-extrabold tracking-tight">{label}</h2>
        <div className="h-px flex-1 bg-neutral-300" />
      </div>
    </div>
  );
}

export function InsightCard({ title, evidence, implication, accent = "rose" }) {
  const accentClasses = {
    rose: "from-rose-50 to-rose-100 ring-rose-200",
    amber: "from-amber-50 to-amber-100 ring-amber-200",
    emerald: "from-emerald-50 to-emerald-100 ring-emerald-200",
  };
  const ring = accentClasses[accent] ?? accentClasses.rose;

  return (
    <Motion.article
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.35 }}
      className={`group h-full rounded-3xl bg-gradient-to-br ${ring} p-0.5`}
    >
      <div className="h-full rounded-3xl bg-white p-5 ring-1 ring-black/5 transition-shadow group-hover:shadow-lg">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="mt-2 text-sm text-neutral-600">
          <span className="font-medium text-neutral-800">Evidence: </span>
          {evidence}
        </p>
        <p className="mt-2 text-sm text-neutral-600">
          <span className="font-medium text-neutral-800">Implication: </span>
          {implication}
        </p>
      </div>
    </Motion.article>
  );
}

export function Paragraph({ text }) {
  return <p className="text-base leading-7 text-neutral-700">{text}</p>;
}

export function Summary({ text }) {
  return (
    <p className="mt-4 text-lg leading-relaxed text-neutral-700">{text}</p>
  );
}

export function Button({
  image,
  text = "View",
  link = "#",
  external = true,
  ...props
}) {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-3">
      <a
        href={link}
        target={external ? "_blank" : "_self"}
        rel={external ? "noopener noreferrer" : undefined}
        className="inline-flex items-center gap-2 rounded-2xl border border-neutral-300 bg-white px-4 py-2 text-sm font-medium shadow-sm transition hover:shadow-md"
        {...props}
      >
        {image && (
          <img src={image} alt="" className="h-5 w-5 rounded-sm object-cover" />
        )}
        <span>{text}</span>
      </a>
    </div>
  );
}
