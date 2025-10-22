export default function Sidebar({ sections, activeSection, scrollProgress }) {
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  const handleClick = (e, id) => {
    const el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();

    const HEADER_OFFSET = 60; // tweak to match your top nav height
    const y =
      el.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET;
    window.scrollTo({
      top: y,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <aside className="sticky top-16 z-10 hidden h-[calc(100vh-4rem)] w-48 flex-col items-start bg-white/70 px-8 py-10 text-sm font-medium ring-1 ring-neutral-200 backdrop-blur md:flex">
      <div className="relative flex w-full flex-col gap-6">
        <div className="absolute top-0 left-2 h-full w-px bg-neutral-200">
          <div
            className="absolute top-0 left-0 w-px bg-gradient-to-b from-rose-500 via-amber-500 to-emerald-500 transition-all duration-300"
            style={{ height: `${Math.min(Math.max(scrollProgress, 0), 100)}%` }}
            aria-hidden="true"
          />
        </div>

        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            onClick={(e) => handleClick(e, section.id)}
            className={`relative rounded-lg pl-6 transition-colors focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:outline-none ${
              activeSection === section.id
                ? "text-neutral-900 before:absolute before:top-1/2 before:left-1 before:h-2 before:w-2 before:-translate-y-1/2 before:rounded-full before:bg-gradient-to-br before:from-rose-500 before:to-emerald-500"
                : "text-neutral-500 hover:text-neutral-900"
            }`}
          >
            {section.label}
          </a>
        ))}
      </div>
    </aside>
  );
}
