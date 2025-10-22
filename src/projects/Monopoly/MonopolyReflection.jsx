import codingUrl from "/coding.png";
import logicUrl from "/logic.png";
import accessibilityUrl from "/accessibility.png";
import { SectionDivider } from "../../components/sections/ProjectComponents.jsx";

export default function MonopolyReflectionSection() {
  const items = [
    {
      img: codingUrl,
      alt: "Mini Monopoly Game",
      title: "Mastering HTML & CSS",
      text: "Create a fully responsive board game that captures the essence of Monopoly in a compact format.",
    },
    {
      img: logicUrl,
      alt: "Mini Monopoly Game",
      title: "Game logic complexity",
      text: "Implement passing GO, multi-turn jail logic, property transactions, and rent doubling without over-engineering.",
    },
    {
      img: accessibilityUrl,
      alt: "Mini Monopoly Game",
      title: "Usability & accessibility",
      text: "Ensure playability across screen sizes, add keyboard controls, and keep turn order visually clear.",
    },
  ];

  return (
    <section id="reflection" className="bg-neutral-50 px-8 py-12 md:px-24">
      <div className="mx-auto max-w-6xl">
        <SectionDivider label="Reflections" />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {items.map((item, i) => (
            <div
              key={i}
              className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-neutral-200 transition hover:shadow-md"
            >
              <img
                src={item.img}
                alt={item.alt}
                className="mb-4 h-12 w-12 object-contain"
              />
              <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
              <p className="text-sm text-neutral-700">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
