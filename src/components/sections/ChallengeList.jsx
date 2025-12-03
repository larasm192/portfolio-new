import React from "react";

export default function ChallengeList({ items = [] }) {
  return (
    <div className="mt-4 space-y-6">
      {items.map((item, idx) => (
        <div
          key={idx}
          className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-neutral-200"
        >
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div className="md:w-1/3">
              <p className="text-xs font-semibold tracking-wide text-orange-500 uppercase">
                Problem
              </p>
              <h3 className="text-lg font-semibold text-neutral-900">
                {item.problem}
              </h3>
            </div>
            <div className="md:w-1/3">
              <p className="text-xs font-semibold tracking-wide text-orange-500 uppercase">
                Fix
              </p>
              <p className="text-sm leading-relaxed text-neutral-800">
                {item.fix}
              </p>
            </div>
            <div className="md:w-1/3">
              <p className="text-xs font-semibold tracking-wide text-orange-500 uppercase">
                Result
              </p>
              <p className="text-sm leading-relaxed text-neutral-800">
                {item.result}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
