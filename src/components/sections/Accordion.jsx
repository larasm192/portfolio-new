import React, { useState } from "react";

export default function Accordion({ items = [], allowMultiple = false }) {
  const [openItems, setOpenItems] = useState(() =>
    allowMultiple ? [] : items.length ? [items[0].title] : [],
  );

  const toggle = (title) => {
    setOpenItems((prev) => {
      if (allowMultiple) {
        return prev.includes(title)
          ? prev.filter((t) => t !== title)
          : [...prev, title];
      }
      return prev[0] === title ? [] : [title];
    });
  };

  const isOpen = (title) =>
    allowMultiple ? openItems.includes(title) : openItems[0] === title;

  return (
    <div className="mt-4 divide-y divide-neutral-200 overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-neutral-200">
      {items.map((item) => {
        const open = isOpen(item.title);
        return (
          <div key={item.title} className="group">
            <button
              onClick={() => toggle(item.title)}
              className="flex w-full items-center justify-between px-5 py-4 text-left transition hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
            >
              <span className="text-base font-semibold text-neutral-900">
                {item.title}
              </span>
              <span
                className={`ml-4 inline-flex h-7 w-7 items-center justify-center rounded-full border border-neutral-300 bg-white text-sm font-semibold text-neutral-700 transition ${
                  open ? "rotate-45 bg-orange-50 text-orange-600" : ""
                }`}
                aria-hidden
              >
                +
              </span>
            </button>
            <div
              className={`grid transition-[grid-template-rows] duration-200 ease-in-out ${
                open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-5 pb-5 text-sm leading-relaxed text-neutral-700">
                  {item.body}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
