export default function MonopolyInsightsSection() {
  return (
    <section id="insights" className="pt-20">
      <h2 className="mb-6 text-center text-3xl font-medium md:text-left">
        Discovery &amp; Insights
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Insight 1 */}
        <div className="flex rounded-lg bg-white p-6 shadow">
          <div className="flex-shrink-0">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-xl font-bold text-green-600">
              1
            </div>
          </div>
          <div className="ml-4">
            <h3 className="mb-1 text-xl font-semibold">Friends’ Feedback</h3>
            <p className="leading-relaxed text-gray-600">
              Initial “infinite money” bug meant the game never ended. Tweaked
              starting balances and enhanced end‑game checks to ensure a
              satisfying finish.
            </p>
          </div>
        </div>

        {/* Insight 2 */}
        <div className="flex rounded-lg bg-white p-6 shadow">
          <div className="flex-shrink-0">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-xl font-bold text-green-600">
              2
            </div>
          </div>
          <div className="ml-4">
            <h3 className="mb-1 text-xl font-semibold">Jail Logic Deep‑Dive</h3>
            <p className="leading-relaxed text-gray-600">
              Balancing clarity vs. complexity on multi‑turn jail rules—players
              can pay, roll to exit, or serve time—drove iterative refinements
              to user prompts and state flow.
            </p>
          </div>
        </div>

        {/* Insight 3 */}
        <div className="flex rounded-lg bg-white p-6 shadow md:col-span-2">
          <div className="flex-shrink-0">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-xl font-bold text-green-600">
              3
            </div>
          </div>
          <div className="ml-4">
            <h3 className="mb-1 text-xl font-semibold">Accessibility Wins</h3>
            <p className="leading-relaxed text-gray-600">
              Keyboard shortcuts (R to roll, arrows to choose) and ARIA‑labeled
              popups boosted usability—friends praised swift navigation and
              clear focus states on every device.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
