import React from "react";

export function Paragraph({ children }) {
  return (
    <p className="mb-4 text-base leading-relaxed text-neutral-800 last:mb-0">
      {children}
    </p>
  );
}
