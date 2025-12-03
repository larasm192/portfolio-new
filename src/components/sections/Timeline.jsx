import React from "react";

export default function Timeline({ items = [] }) {
  return (
    <div className="relative mt-4 pl-6">
      <div
        className="absolute top-0 left-2 h-full w-px bg-neutral-200"
        aria-hidden
      />
      <div className="space-y-6">
        {items.map((item, idx) => (
          <div key={idx} className="relative flex gap-4">
            <span
              className="absolute -left-[11px] mt-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-orange-400 bg-white text-xs font-semibold text-orange-600"
              aria-hidden
            >
              {idx + 1}
            </span>
            <div className="flex-1 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-neutral-200">
              <div className="flex items-center justify-between gap-2">
                <p className="text-sm font-semibold text-orange-600">
                  {item.date}
                </p>
                {item.meta && (
                  <span className="text-xs font-medium tracking-wide text-neutral-500 uppercase">
                    {item.meta}
                  </span>
                )}
              </div>
              <p className="mt-1 text-base font-semibold text-neutral-900">
                {item.title}
              </p>
              {item.text && (
                <p className="mt-1 text-sm leading-relaxed text-neutral-700">
                  {item.text}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
