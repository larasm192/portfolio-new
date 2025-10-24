//import boardFinal from "/board-final.png";
//import jailPrompt from "/jail-prompt.png";
import { SectionDivider, Paragraph } from "../../components/sections";

export default function MonopolyResultSection() {
  return (
    <section id="result" className="px-8 py-12 md:px-24">
      <div className="mx-auto max-w-6xl">
        <SectionDivider label="Result & Impact" />
        <Paragraph>
          After several refinement cycles, Mini Monopoly transformed from a
          simple board-game prototype into a fully responsive, bug-free web app
          that captures the strategy and excitement of Monopoly in a browser.
          Every major mechanic — from turn-based state management and rent logic
          to multi-turn jail events and win detection — was modularised for
          clarity and maintainability. The final build achieved complete rule
          coverage, smooth performance, and consistent behaviour across screen
          sizes and input methods. Accessibility improvements made the game
          playable with keyboard-only navigation, while thoughtful visual
          feedback helped players follow turns effortlessly. What started as a
          personal coding challenge became a robust showcase of design-led
          engineering — balancing technical precision with playful user
          experience.
        </Paragraph>
      </div>
    </section>
  );
}
