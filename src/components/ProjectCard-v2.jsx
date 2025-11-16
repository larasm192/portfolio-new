export default function ProjectCardv2({
  title,
  description,
  skills = [],
  link,
  image,
}) {
  return (
    <a
      className="
        flex flex-col overflow-hidden rounded-xl bg-white shadow-lg transition-transform
        duration-300 hover:scale-101 hover:shadow-2xl hover:shadow-orange-300
        md:flex-row
      "
      href={link}
      rel="noopener noreferrer"
    >
      {/* Image (mobile top, desktop right) */}
      <div className="w-full md:flex-[0.65] md:order-2">
        {image && (
          <img
            src={image}
            alt={title}
            className="
              h-48 w-full object-cover md:h-full md:rounded-r-xl
            "
          />
        )}
      </div>

      {/* Text content (mobile bottom, desktop left) */}
      <div
        className="
          flex w-full flex-[0.35] flex-col justify-between gap-4 p-6
          md:p-8 md:order-1
        "
      >
        {/* Title + description */}
        <div className="text-left">
          <h3 className="mb-3 text-2xl font-semibold md:text-3xl">
            {title}
          </h3>
          <p className="text-sm font-light md:text-base">
            {description}
          </p>
        </div>

        {/* Skill tags */}
        <div className="flex flex-wrap gap-2">
          {skills.slice(0, 3).map(
            (skill, i) =>
              skill && (
                <div
                  key={i}
                  className="
                    rounded-3xl bg-orange-500 px-5 py-2 text-xs text-white
                  "
                >
                  {skill}
                </div>
              )
          )}
        </div>
      </div>
    </a>
  );
}
