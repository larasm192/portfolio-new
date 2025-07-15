export default function ProjectCard({ title, description, link, image }) {
  return (
    <div
      className="flex aspect-auto h-110 flex-col items-center justify-center rounded-xs bg-white bg-contain bg-center p-6 shadow-lg transition-transform hover:scale-101"
      style={image ? { backgroundImage: `url(${image})` } : {}}
    >
      <div className="flex h-full w-full flex-col items-center justify-between rounded-xl p-2">
        <div className="text-center">
          <h3 className="mb-2 text-4xl font-semibold">{title}</h3>
          <p className="mb-4 text-lg font-light">{description}</p>
        </div>
        <a
          href={link}
          className="font-medium text-orange-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          View More
        </a>
      </div>
    </div>
  );
}
