export default function OverviewSection({
  title,
  link,
  description,
  role,
  tools,
  timeframe,
  image,
}) {
  return (
    <section className="pt-10" id="overview">
      <h1 className="text-4xl font-bold md:text-5xl">{title}</h1>
      <a
        className="mt-2 text-xs text-gray-500 underline"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        View on GitHub
      </a>
      <img className="mt-6 h-48 w-full rounded-lg md:h-60" src={image} />
      <div className="mt-10 flex gap-6">
        <div className="w-[calc(200%/3)] bg-white p-4 shadow">
          <h2 className="mb-2 text-2xl font-semibold">Overview</h2>
          <p className="text-base text-gray-700">{description}</p>
        </div>
        <div className="grid w-fit flex-1/2 grid-cols-1 gap-4">
          <div className="bg-white p-4 shadow">
            <h4 className="text-sm font-semibold">My Role</h4>
            <p className="text-xs text-gray-600">{role}</p>
          </div>
          <div className="bg-white p-4 shadow">
            <h4 className="text-sm font-semibold">Tools</h4>
            <p className="text-xs text-gray-600">{tools}</p>
          </div>
          <div className="bg-white p-4 shadow">
            <h4 className="text-sm font-semibold">Timeframe</h4>
            <p className="text-xs text-gray-600">{timeframe}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
