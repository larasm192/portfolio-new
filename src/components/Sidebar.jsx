export default function Sidebar({ sections, activeSection, scrollProgress }) {
  return (
    <aside className="sticky top-16 z-10 hidden h-[calc(100vh-4rem)] w-40 flex-col items-start gap-6 bg-gray-100 px-7 py-8 text-sm font-medium md:flex">
      <div className="relative flex w-full flex-col gap-6">
        <div className="absolute top-0 left-1.5 h-full w-0.5 bg-gray-300">
          <div
            className="absolute top-0 left-0 h-0 w-0.5 bg-orange-500 transition-all duration-300"
            style={{ height: scrollProgress + "%" }}
          />
        </div>

        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={`relative pl-4 transition-colors hover:text-orange-500 ${
              activeSection === section.id ? "" : ""
            }`}
          >
            {section.label}
          </a>
        ))}
      </div>
    </aside>
  );
}
