//import boardFinal from "/board-final.png";
//import jailPrompt from "/jail-prompt.png";
import { SectionDivider } from "../../components/sections/ProjectComponents.jsx";

export default function MonopolyResultSection() {
  return (
    <section id="result" className="bg-neutral-50">
      <SectionDivider label="Result & Impact" />
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-neutral-200">
          <div className="mb-6 space-y-2 text-sm text-neutral-700">
            <p>
              <strong>Before:</strong> Infinite-loop bug, unclear jail logic,
              inconsistent focus states.
            </p>
            <p>
              <strong>After:</strong> Fully functioning two-player game,
              responsive across devices, accessible to keyboard-only users, 100%
              core rule coverage.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <figure className="flex flex-col transition hover:scale-[1.02] hover:shadow-lg">
              <img
                //src={boardFinal}
                alt="Final responsive board layout with property popups"
                className="rounded-lg"
              />
              <figcaption className="mt-2 text-center text-xs text-neutral-600">
                Final responsive board layout with property popups
              </figcaption>
            </figure>
            <figure className="flex flex-col transition hover:scale-[1.02] hover:shadow-lg">
              <img
                //src={jailPrompt}
                alt="Improved jail decision popup with rules summary"
                className="rounded-lg"
              />
              <figcaption className="mt-2 text-center text-xs text-neutral-600">
                Improved jail decision popup with rules summary
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
