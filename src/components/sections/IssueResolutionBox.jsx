import React from "react";

export default function IssueResolutionBox({ items }) {
  return (
    <div className="space-y-8 pt-8">
      {items.map((item, i) => (
        <div
          key={i}
          className="w-full rounded-[32px] bg-neutral-50 p-6 shadow-sm ring-1 ring-neutral-200 md:p-10"
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-0 md:divide-x-0">
            <div className="flex max-h-[120px] items-center justify-center overflow-hidden rounded-2xl bg-neutral-200 md:min-h-[240px]">
              <img
                src={item.img}
                alt={item.alt || ""}
                className="h-full w-full object-cover object-center"
              />
            </div>

            <section className="items-center pt-2 md:pt-0 md:pr-8 md:pl-8">
              <h3 className="mb-2 text-lg font-semibold md:text-xl">
                {item.issueTitle}
              </h3>
              <p className="text-base leading-relaxed text-neutral-800">
                {item.issueText}
              </p>
            </section>

            <section className="pt-2 md:border-l md:border-neutral-300 md:pt-0 md:pl-8">
              <h3 className="mb-2 text-lg font-semibold md:text-xl">
                {item.resolutionTitle}
              </h3>
              <p className="text-base leading-relaxed text-neutral-800">
                {item.resolutionText}
              </p>
            </section>
          </div>
        </div>
      ))}
    </div>
  );
}
