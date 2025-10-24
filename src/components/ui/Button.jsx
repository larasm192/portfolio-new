import React from "react";

export default function Button({
  image,
  text = "View",
  link = "#",
  external = true,
  ...props
}) {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-3">
      <a
        href={link}
        target={external ? "_blank" : "_self"}
        rel={external ? "noopener noreferrer" : undefined}
        className="inline-flex items-center gap-2 rounded-2xl border border-neutral-300 bg-white px-4 py-2 text-sm font-medium shadow-sm transition hover:shadow-md"
        {...props}
      >
        {image && (
          <img src={image} alt="" className="h-5 w-5 rounded-sm object-cover" />
        )}
        <span>{text}</span>
      </a>
    </div>
  );
}
