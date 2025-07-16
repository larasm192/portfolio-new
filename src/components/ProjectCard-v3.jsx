export default function ProjectCardv3({
  title,
  description,
  skill1,
  skill2,
  skill3,
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
            <div className="flex size-fit items-center justify-between rounded-3xl bg-orange-500 pt-3 pr-5 pb-3 pl-5 text-xs text-white">
              {skill1}
            </div>
            <div className="flex size-fit items-center justify-between rounded-3xl bg-orange-500 pt-3 pr-5 pb-3 pl-5 text-xs text-white">
              {skill2}
            </div>
            <div className="flex size-fit items-center justify-between rounded-3xl bg-orange-500 pt-3 pr-5 pb-3 pl-5 text-xs text-white">
              {skill3}
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex h-full w-full flex-[0.65] items-center rounded-xl bg-cover bg-center p-2"
        style={image ? { backgroundImage: `url(${image})` } : {}}
      ></div>
    </a>
  );
}
