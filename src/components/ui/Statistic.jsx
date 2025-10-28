export default function Statistic({
  prefix = "",
  value = "",
  caption = "",
  valueClass = "from-indigo-500 to-blue-600",
  className = "mt-8",
}) {
  return (
    <div className={`text-center ${className}`}>
      {prefix && (
        <div className="text-sm text-neutral-500 italic">{prefix}</div>
      )}

      <div
        className={`bg-gradient-to-r bg-clip-text text-transparent ${valueClass}`}
      >
        <span className="inline-block pb-1 text-6xl leading-[1.1] font-semibold">
          {value}
        </span>
      </div>

      {caption && <div className="text-base text-neutral-700">{caption}</div>}
    </div>
  );
}
