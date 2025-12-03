import {
  SectionDivider,
  Paragraph,
  ImageCard,
  Quote,
  PersonasGrid,
  PrototypingBlock,
  IconBox,
  IssueResolutionBox,
  Summary,
} from ".";
import { Badge, Button } from "../ui";
import Statistic from "../ui/Statistic";

const SectionWrapper = ({ id, bg = "white", children }) => {
  const bgClass = bg === "muted" ? "bg-neutral-50" : "bg-white";
  return (
    <section id={id} className={`${bgClass} px-8 py-12 md:px-24`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
};

export function TextSection({
  id,
  label,
  paragraphs = [],
  stats = [],
  quote,
  images = [],
  personas,
  bg,
  iconItems,
  iconColumns = 3,
}) {
  return (
    <SectionWrapper id={id} bg={bg}>
      <SectionDivider label={label} />
      {paragraphs.map((text, idx) => (
        <Paragraph key={idx}>{text}</Paragraph>
      ))}

      {stats.length > 0 && (
        <div className="flex flex-wrap justify-center gap-x-16">
          {stats.map((stat, idx) => (
            <Statistic
              key={idx}
              prefix={stat.prefix}
              value={stat.value}
              caption={stat.caption}
              valueClass={stat.valueClass || "from-blue-300 to-blue-800"}
            />
          ))}
        </div>
      )}

      {quote && (
        <Quote author={quote.author} role={quote.role}>
          {quote.text}
        </Quote>
      )}

      {images.map((img, idx) => (
        <ImageCard
          key={idx}
          src={img.src}
          alt={img.alt}
          caption={img.caption}
        />
      ))}

      {personas && <PersonasGrid personas={personas} />}

      {iconItems && <IconBox items={iconItems} columns={iconColumns} />}
    </SectionWrapper>
  );
}

export function PrototypingSection({ id, label, intro, blocks, bg }) {
  return (
    <SectionWrapper id={id} bg={bg}>
      <SectionDivider label={label} />
      {intro && <Paragraph>{intro}</Paragraph>}
      <PrototypingBlock sections={blocks} />
    </SectionWrapper>
  );
}

export function ImagesSection({ id, label, images = [], bg }) {
  return (
    <SectionWrapper id={id} bg={bg}>
      <SectionDivider label={label} />
      {images.map((img, idx) => (
        <ImageCard key={idx} src={img.src} alt={img.alt} caption={img.caption} />
      ))}
    </SectionWrapper>
  );
}

export function IconListSection({ id, label, items = [], bg, columns = 3 }) {
  return (
    <SectionWrapper id={id} bg={bg}>
      <SectionDivider label={label} />
      <IconBox items={items} columns={columns} />
    </SectionWrapper>
  );
}

export function IssueListSection({ id, label, items = [], bg, paragraphs = [] }) {
  return (
    <SectionWrapper id={id} bg={bg}>
      <SectionDivider label={label} />
      {paragraphs.map((text, idx) => (
        <Paragraph key={idx}>{text}</Paragraph>
      ))}
      <IssueResolutionBox items={items} />
    </SectionWrapper>
  );
}

export function ProjectHero({
  title,
  summary,
  badges = [],
  buttons = [],
  image,
  extra,
}) {
  return (
    <section id="overview" className="relative overflow-hidden">
      <div className="relative flex flex-col lg:flex-row">
        <div className="flex items-center px-24 py-16 lg:w-3/5">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              {title}
            </h1>
            {summary && <Summary text={summary} />}

            {badges.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-3">
                {badges.map((badge, idx) => (
                  <Badge key={idx} label={badge.label} value={badge.value} />
                ))}
              </div>
            )}

            {extra}

            {buttons.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-3">
                {buttons.map((btn, idx) => (
                  <Button
                    key={idx}
                    image={btn.image}
                    text={btn.text}
                    link={btn.link}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {image && (
          <div className="lg:w-2/5">
            <img
              src={image.src}
              alt={image.alt}
              className="h-full w-auto object-cover object-center"
            />
          </div>
        )}
      </div>
    </section>
  );
}

export { SectionWrapper };
