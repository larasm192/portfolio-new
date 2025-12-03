export default function ProjectCardv2({
  title,
  description,
  skills = [],
  link,
  image,
}) {
  return (
    <a
      className="flex flex-col overflow-hidden rounded-xl bg-white shadow-lg transition-transform duration-300 hover:scale-101 hover:shadow-2xl hover:shadow-neutral-400 md:h-100 md:flex-row"
      href={link}
      rel="noopener noreferrer"
    >
      {/* Image (mobile top, desktop right) */}
      <div className="h-48 w-full md:order-2 md:h-full md:flex-[0.65]">
        {image && (
          <img
            src={image}
            alt={title}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover md:rounded-r-xl"
          />
        )}
      </div>

      {/* Text content (mobile bottom, desktop left) */}
      <div className="flex w-full flex-[0.35] flex-col justify-between gap-2 p-4 md:order-1 md:gap-3 md:p-6">
        {/* Title + description */}
        <div className="text-left">
          <h3 className="mb-1 text-lg font-semibold sm:text-xl md:mb-2 md:text-2xl">
            {title}
          </h3>
          <p className="text-xs font-light sm:text-sm md:text-sm">
            {description}
          </p>
        </div>

        {/* Skill tags */}
        <div className="flex flex-wrap gap-1 md:gap-2">
          {skills.slice(0, 3).map(
            (skill, i) =>
              skill && (
                <div
                  key={i}
                  className="rounded-2xl bg-orange-500 px-2 py-0.5 text-xs whitespace-nowrap text-white md:rounded-3xl md:px-4 md:py-1.5"
                >
                  {skill}
                </div>
              ),
          )}
        </div>
      </div>
    </a>
  );
}
