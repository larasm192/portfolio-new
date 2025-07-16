export default function ProjectCardv2({
  title,
  description,
  skills = [],
  link,
  image,
}) {
  return (
    <a
      className="flex rounded-xl bg-white shadow-lg transition-transform duration-300 hover:scale-101 hover:shadow-2xl hover:shadow-orange-300"
      href={link}
      rel="noopener noreferrer"
    >
      <div className="aspect-auto h-110 flex-[0.35] flex-col p-8">
        <div className="flex h-full w-full flex-col justify-between">
          <div className="text-left">
            <h3 className="mb-3 text-3xl font-semibold">{title}</h3>
            <p className="text-base font-light">{description}</p>
            <div className="mb-2 flex gap-2"></div>
          </div>
          <div className="flex flex-wrap gap-2">
            <div className="flex size-fit items-center justify-between rounded-3xl bg-orange-500 pt-2 pr-5 pb-2 pl-5 text-xs text-white">
              {skills[0]}
            </div>
            <div className="flex size-fit items-center justify-between rounded-3xl bg-orange-500 pt-2 pr-5 pb-2 pl-5 text-xs text-white">
              {skills[1]}
            </div>
            <div className="flex size-fit items-center justify-between rounded-3xl bg-orange-500 pt-2 pr-5 pb-2 pl-5 text-xs text-white">
              {skills[2]}
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-full w-full flex-[0.65] items-center justify-between p-2">
        {image && (
          <img
            src={image}
            alt={title}
            className="h-full w-full rounded-xl object-cover"
          />
        )}
      </div>
    </a>
  );
}
