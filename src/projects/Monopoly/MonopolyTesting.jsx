import { SectionDivider } from "../../components/sections/ProjectComponents.jsx";

export default function MonopolyTestingSection() {
  const tests = [
    {
      hypothesis: "Win condition triggers correctly",
      method: "Manual playtest with 2 players",
      result: "Game loop ended successfully when all opponents bankrupt",
      change: "Kept logic, added more descriptive end-game popup",
    },
    {
      hypothesis: "Jail logic is intuitive",
      method: "Observed players in 3 jail scenarios",
      result: "Players confused about options",
      change: "Added on-screen rule summary during jail turns",
    },
    {
      hypothesis: "Keyboard controls improve speed",
      method: "Timed turns with and without shortcuts",
      result: "Shortcuts reduced turn time by ~30%",
      change: "Highlighted shortcuts in UI tooltips",
    },
    {
      hypothesis: "Infinite money bug",
      result: "Players reported the game never ended",
      change: "Added starting balance cap + robust win checks",
    },
    {
      hypothesis: "Jail rule confusion",
      result: "Multi-turn options weren’t clear",
      change: "Rewrote prompts + added on-screen rule summary",
    },
    {
      hypothesis: "Accessibility wins",
      result: "Shortcuts + ARIA popups praised",
      change: "Kept keyboard path, improved focus states",
    },
  ];

  return (
    <section
      id="testing"
      className="bg-gradient-to-br from-amber-50 to-amber-100"
    >
      <SectionDivider label="Prototyping & Testing" />
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tests.map((t, i) => (
            <div
              key={i}
              className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-neutral-200 transition hover:shadow-md"
            >
              <h3 className="mb-2 text-lg font-bold">{t.hypothesis}</h3>
              <p className="mb-2 text-sm text-neutral-700">
                <span className="font-medium text-neutral-800">Method: </span>
                {t.method}
              </p>
              <p className="mb-2 text-sm text-neutral-700">
                <span className="font-medium text-neutral-800">Result: </span>
                {t.result}
              </p>
              <p className="text-sm text-neutral-700">
                <span className="font-medium text-neutral-800">Change: </span>
                {t.change}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
