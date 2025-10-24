export function Badge({ label, value }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-2xl bg-white/60 px-3 py-1 text-sm ring-1 ring-neutral-300 backdrop-blur">
      <span className="text-neutral-500">{label}:</span>
      <span className="font-medium">{value}</span>
    </span>
  );
}
