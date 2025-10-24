import MonopolyProperties from "../../assets/monopoly-properties.png";
import {
  SectionDivider,
  Paragraph,
  ImageCard,
  IconBox,
} from "../../components/sections";

export default function MonopolyIdeationSection() {
  const items = [
    {
      img: "https://img.icons8.com/ios/100/circular-arrows--v1.png",
      alt: "Mini Monopoly Game",
      title: "Turn-Based State Management",
      text: "Ensures smooth alternation between two players, handling movement, property actions, and turn transitions automatically.",
    },
    {
      img: "https://img.icons8.com/ios/50/us-dollar-circled--v1.png",
      alt: "Mini Monopoly Game",
      title: "Property Ownership & Rent Payments",
      text: "Allows players to purchase properties, charge rent when others land on them, and earn double rent when owning a complete colour set.",
    },
    {
      img: "https://img.icons8.com/ios/100/fast-forward.png",
      alt: "Mini Monopoly Game",
      title: "Passing GO & Jail Mechanics",
      text: "Implements Monopoly’s event tiles — collecting £200 when passing GO, visiting jail, or being sent there with multi-turn escape logic and optional fines.",
    },
    {
      img: "https://img.icons8.com/ios/100/trophy--v1.png",
      alt: "Mini Monopoly Game",
      title: "Winning Conditions",
      text: "The game dynamically detects when a player’s money drops to zero or below, automatically declaring the other player as the winner and ending the session.",
    },
  ];

  return (
    <section id="ideation" className="px-8 py-12 md:px-24">
      <SectionDivider label="Ideation & Implementation" />
      <div className="mx-auto max-w-6xl">
        <Paragraph
          text="Motivated by a desire to deepen my JavaScript fundamentals and create a personal spin on a childhood favourite, I designed a two-player Mini Monopoly where every property was named after my friends (and cats!).
I developed the project with a modular architecture separating game logic (Monopoly.js) from UI (main.js) and asynchronous pop-up handling (popup.js)."
        />
        <ImageCard
          src={MonopolyProperties}
          alt="Monopoly properties named after friends"
          caption="Monopoly properties named after friends"
        />
        <Paragraph>
          <strong>Core logic included:</strong>
        </Paragraph>
        <IconBox items={items} columns={2} />
        <Paragraph text="Final Design Decision: Modular and functional architecture for maintainability, paired with a responsive and accessible UI to ensure a consistent and enjoyable user experience." />
      </div>
    </section>
  );
}
