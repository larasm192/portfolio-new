import { motion as Motion } from "framer-motion";

export function MiniStat({ label, value, hint }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-3">
      <div className="text-neutral-500">{label}</div>
      <div className="text-lg font-bold">{value}</div>
      {hint && <div className="text-xs text-neutral-500">{hint}</div>}
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

export function BulletBox({ items }) {
  return (
    <div className="space-y-8 pt-12">
      {items.map((item, i) => (
        <div
          key={i}
          className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-neutral-200 transition hover:shadow-md"
        >
          <div className="flex flex-col items-center gap-6 md:flex-row">
            <img
              src={item.img}
              alt={item.alt}
              className="h-16 w-16 rounded-md object-cover"
            />
            <div>
              <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
              <ul className="list-inside list-disc space-y-1 text-sm text-neutral-700">
                {item.bullets.map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
