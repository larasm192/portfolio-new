import laraUrl from "/lara-1.jpg";
import { SectionDivider } from "../../components/sections/ProjectComponents.jsx";

export default function MonopolyIdeationSection() {
  const items = [
    {
      img: laraUrl,
      alt: "Modular Architecture",
      title: "Modular Architecture",
      bullets: [
        <>
          <code>Monopoly.js</code> defines pure, documented state-transition
          functions.
        </>,
        <>UI adapter cleanly bridges logic to DOM updates.</>,
      ],
    },
    {
      img: laraUrl,
      alt: "Functional Patterns",
      title: "Functional Patterns",
      bullets: [
        <>
          Leveraged <code>R.find</code>, <code>R.toPairs</code>,{" "}
          <code>R.modulo</code> for movement &amp; win detection.
        </>,
        <>Kept logic declarative and side-effect free whenever possible.</>,
      ],
    },
    {
      img: laraUrl,
      alt: "Responsive & Accessible UI",
      title: "Responsive & Accessible UI",
      bullets: [
        <>
          CSS variables and <code>vmin</code> units keep the board perfectly
          square.
        </>,
        <>
          Custom popups with delays, keyboard support, and ARIA labels for full
          accessibility.
        </>,
      ],
    },
  ];

  return (
    <section id="ideation" className="px-8 py-12 md:px-24">
      <SectionDivider label="Ideation & Implementation" />
      <div className="mx-auto max-w-6xl">
        <div className="space-y-8">
          {items.map((item, i) => (
            <div
              key={i}
              className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-neutral-200 transition hover:shadow-md"
            >
              <div className="flex flex-col items-center gap-6 md:flex-row">
                <img
                  src={item.img}
                  alt={item.alt}
                  className="h-16 w-16 rounded-md object-cover"
                />
                <div>
                  <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                  <ul className="list-inside list-disc space-y-1 text-sm text-neutral-700">
                    {item.bullets.map((b, idx) => (
                      <li key={idx}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-base text-neutral-700">
          Final choice: Modular + functional approach for maintainability,
          paired with responsive, accessible UI for consistent user experience.
        </p>
      </div>
    </section>
  );
}
