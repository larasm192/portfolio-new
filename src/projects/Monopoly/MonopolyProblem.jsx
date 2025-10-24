import { SectionDivider, Paragraph } from "../../components/sections";

export default function MonopolyChallengeSection() {
  return (
    <section id="brief" className="bg-neutral-50 px-8 py-12 md:px-24">
      <div className="mx-auto max-w-6xl">
        <SectionDivider label="The Brief" />
        <Paragraph>
          Design and build a simplified, browser-based web-app game using HTML,
          CSS and JavaScript. There should be accessible user interaction and
          clean modular code. The project required translating a classic board
          game into an interactive digital experience, handling everything from
          UI design and gameplay logic to accessibility and testing.{" "}
        </Paragraph>
      </div>
    </section>
  );
}
