import codingUrl from "../../assets/coding.png";
import logicUrl from "../../assets/logic.png";
import accessibilityUrl from "../../assets/accessibility.png";
import { SectionDivider, IconBox } from "../../components/sections";

export default function MonopolyReflectionSection() {
  const items = [
    {
      img: codingUrl,
      alt: "Mini Monopoly Game",
      title: "Learning HTML, CSS & JS",
      text: "As my first fully coded web project, I learned to connect structure, style, and interactivity into one cohesive system.",
    },
    {
      img: logicUrl,
      alt: "Mini Monopoly Game",
      title: "Importance of User Testing",
      text: "Through their feedback, I learned how iterative testing directly improves both design and technical performance.",
    },
    {
      img: accessibilityUrl,
      alt: "Mini Monopoly Game",
      title: "Designing for Accessibility",
      text: "Adding keyboard controls and focus states taught me that accessibility is fundamental to functional and inclusive design.",
    },
  ];

  return (
    <section id="reflection" className="bg-neutral-50 px-8 py-12 md:px-24">
      <div className="mx-auto max-w-6xl">
        <SectionDivider label="Reflections" />
        <IconBox items={items} columns={3} />
      </div>
    </section>
  );
}
