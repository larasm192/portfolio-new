import React from "react";

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
