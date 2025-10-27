// PersonaCard.jsx
export function PersonaCard({
  name,
  age,
  stage,
  yearsSinceDx,
  avatar,
  bio,
  needs,
  because,
  however,
  accent = "from-amber-400 to-orange-500",
  className = "mt-8",
}) {
  return (
    <div
      className={`rounded-2xl bg-neutral-50 p-5 shadow-sm ring-1 ring-neutral-200 ${className}`}
    >
      {/* Header */}
      <div className="flex items-center gap-3">
        {avatar ? (
          <img
            src={avatar}
            alt={name}
            className="h-18 w-18 rounded-lg object-cover ring-1 ring-neutral-200"
          />
        ) : (
          <div className="h-18 w-18 rounded-lg bg-neutral-200" />
        )}
        <div className="min-w-0">
          <h3 className="truncate text-lg font-semibold text-neutral-900">
            {name}
          </h3>
          <p className="text-sm text-neutral-600">
            Age {age} • {stage} • {yearsSinceDx} yrs since Dx
          </p>
        </div>
      </div>

      {/* Bio */}
      <p className="mt-3 text-sm text-neutral-800">{bio}</p>

      {/* 3 bullets */}
      <ul className="mt-3 space-y-1.5 text-sm">
        <li>
          <span
            className={`inline-flex items-center rounded-md bg-gradient-to-r ${accent} px-2 py-0.5 text-white`}
          >
            Needs
          </span>{" "}
          <span className="text-neutral-800">{needs}</span>
        </li>
        <li>
          <span className="inline-flex items-center rounded-md bg-neutral-900 px-2 py-0.5 text-white">
            Because
          </span>{" "}
          <span className="text-neutral-800">{because}</span>
        </li>
        <li>
          <span className="inline-flex items-center rounded-md bg-neutral-200 px-2 py-0.5 text-neutral-800">
            However
          </span>{" "}
          <span className="text-neutral-800">{however}</span>
        </li>
      </ul>
    </div>
  );
}

// PersonasGrid.jsx
export function PersonasGrid({ personas }) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {personas.map((p, i) => (
        <PersonaCard key={i} {...p} />
      ))}
    </div>
  );
}
