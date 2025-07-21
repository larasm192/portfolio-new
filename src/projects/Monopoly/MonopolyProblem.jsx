import codingUrl from "/coding.png";
import logicUrl from "/logic.png";
import accessibilityUrl from "/accessibility.png";

export default function MonopolyChallengeSection() {
  return (
    <section className="pt-20" id="challenge">
      <h2 className="mb-4 text-3xl font-medium">The Challenge</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="min-h-fit rounded-lg bg-white p-5 shadow">
          <img
            src={codingUrl}
            alt="Mini Monopoly Game"
            className="mb-4 aspect-square h-10 object-cover"
          />
          <h3 className="mb-2 text-xl font-semibold">Mastering HTML & CSS</h3>
          <p className="text-sm text-gray-600">
            Create a fully responsive board game that captures the essence of
            Monopoly in a compact format.
          </p>
        </div>
        <div className="min-h-fit rounded-lg bg-white p-5 shadow">
          <img
            src={logicUrl}
            alt="Mini Monopoly Game"
            className="mb-4 aspect-square h-10 object-cover"
          />
          <h3 className="mb-2 text-xl font-semibold">Game logic complexity</h3>
          <p className="text-sm text-gray-600">
            Implementing Monopoly rules for passing GO, jail mechanics, property
            transactions, rent doubling for full sets, without over‑engineering.
          </p>
        </div>
        <div className="min-h-fit rounded-lg bg-white p-5 shadow">
          <img
            src={accessibilityUrl}
            alt="Mini Monopoly Game"
            className="mb-4 aspect-square h-10 object-cover"
          />
          <h3 className="mb-2 text-xl font-semibold">
            Usability & accessibility
          </h3>
          <p className="text-sm text-gray-600">
            Ensuring the game works across screen sizes, implementing keyboard
            controls, and that turn order is clear for all players.
          </p>
        </div>
      </div>
    </section>
  );
}
