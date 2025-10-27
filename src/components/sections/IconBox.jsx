import React from "react";

export default function IconBox({ items, columns = 3 }) {
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  }[columns];

  return (
    <div className={`mt-4 grid gap-8 ${gridCols}`}>
      {items.map((item, i) => (
        <div
          key={i}
          className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-neutral-200 transition hover:shadow-md"
        >
          <img
            src={item.img}
            alt={item.alt || ""}
            className="mb-4 h-12 w-12 object-contain"
          />
          <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
          <p className="text-sm text-neutral-700">{item.text}</p>
        </div>
      ))}
    </div>
  );
}
