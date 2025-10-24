import React from "react";

export function Summary({ text, dark = false }) {
  const classes = `${dark ? "text-neutral-300" : "text-neutral-700"} mt-4 text-lg leading-relaxed`;
  return <p className={classes}>{text}</p>;
}
