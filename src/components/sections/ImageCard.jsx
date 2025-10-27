import React from "react";

export default function ImageCard({ src, alt, caption }) {
  return (
    <div className="mt-8">
      <img src={src} alt={alt} className="w-full rounded-lg object-cover" />
      {caption && (
        <p className="mt-4 mb-4 text-center text-sm text-neutral-500 italic">
          {caption}
        </p>
      )}
    </div>
  );
}
