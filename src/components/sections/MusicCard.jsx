export default function MusicCard({ title, artist, image, link, date }) {
  return (
    <a
      className="hover:shadow-2x flex flex-col rounded-xl bg-white shadow-lg transition-transform duration-300 hover:scale-101 hover:shadow-orange-500"
      href={link}
      rel="noopener noreferrer"
      target="_blank"
    >
      <div className="flex aspect-square w-full items-center justify-between p-5">
        {image && (
          <img
            src={image}
            alt={title}
            className="h-full w-full rounded-xl object-cover"
          />
        )}
      </div>
      <div className="aspect-auto pr-8 pb-5 pl-8">
        <div className="flex h-full w-full flex-col justify-between">
          <div className="text-left">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="text-base font-light">{artist}</p>
          </div>
          <p className="text-base font-light">{date}</p>
        </div>
      </div>
    </a>
  );
}
