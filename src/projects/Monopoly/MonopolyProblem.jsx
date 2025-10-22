import codingUrl from "/coding.png";
import logicUrl from "/logic.png";
import accessibilityUrl from "/accessibility.png";
import {
  SectionDivider,
  Paragraph,
} from "../../components/sections/ProjectComponents.jsx";

export default function MonopolyChallengeSection() {
  return (
    <section id="brief" className="bg-neutral-50 px-8 py-12 md:px-24">
      <div className="mx-auto max-w-6xl">
        <SectionDivider label="The Brief" />
        <Paragraph text="Produce a web app for a turn-based, board-based game of your choosing." />
      </div>
    </section>
  );
}
