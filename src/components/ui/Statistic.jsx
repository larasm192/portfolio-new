import React from "react";

export default function Statistic({
  prefix = "",
  value = "",
  caption = "",
  valueClass = "from-indigo-500 to-blue-600", // Tailwind gradient stop classes
  className = "mt-8",
}) {
  return (
    <div className={`text-center ${className}`}>
      {prefix && (
        <div className="text-sm text-neutral-500 italic">{prefix}</div>
      )}
      <div
        className={`my-2 bg-gradient-to-r bg-clip-text text-6xl font-semibold text-transparent ${valueClass}`}
      >
        {value}
      </div>
      {caption && <div className="text-base text-neutral-700">{caption}</div>}
    </div>
  );
}
