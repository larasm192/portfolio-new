import laraUrl from "/lara-1.jpg";

export default function MonopolyIdeationSection() {
  const items = [
    {
      img: laraUrl,
      alt: "Modular Architecture",
      title: "Modular Architecture",
      bullets: [
        `<code>Monopoly.js</code> defines pure, documented state‑transition functions.`,
        `UI adapter cleanly bridges logic to DOM updates.`,
      ],
    },
    {
      img: laraUrl,
      alt: "Functional Patterns",
      title: "Functional Patterns",
      bullets: [
        `Leveraged <code>R.find</code>, <code>R.toPairs</code>, <code>R.modulo</code> for movement & win detection.`,
        `Kept logic declarative and side‑effect free whenever possible.`,
      ],
    },
    {
      img: laraUrl,
      alt: "Responsive & Accessible UI",
      title: "Responsive & Accessible UI",
      bullets: [
        `CSS variables and <code>vmin</code> units keep the board perfectly square.`,
        `Custom popups with delays, keyboard support, and ARIA labels for full accessibility.`,
      ],
    },
  ];

  return (
    <section id="ideation" className="px-4 pt-20 md:px-8">
      <h2 className="mb-6 text-center text-3xl font-medium md:text-left">
        Ideation &amp; Implementation
      </h2>

      <div className="space-y-8">
        {items.map((item, i) => (
          <div
            key={i}
            className="grid grid-cols-1 items-center gap-6 md:grid-cols-2"
          >
            <div className="flex justify-center rounded-xl bg-amber-300">
              <img src={item.img} alt={item.alt} className="h-16 w-16" />
            </div>

            <div>
              <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
              <ul className="list-inside list-disc space-y-1 text-sm text-gray-600">
                {item.bullets.map((b, idx) => (
                  <li key={idx} dangerouslySetInnerHTML={{ __html: b }} />
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
