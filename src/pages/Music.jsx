// src/About.jsx


import portrait from "@/assets/about-portrait.jpg";

export default function Music() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center bg-white text-gray-800">
          <Motion.div
            className="flex w-full max-w-6xl flex-col-reverse items-center gap-8 px-4 py-10 md:flex-row md:items-center md:justify-between md:px-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            {/* Text */}
            <div className="w-full flex-[0.65]">
              <h1 className="mb-4 text-4xl leading-[1.1] font-bold sm:text-5xl md:text-6xl md:leading-[1.05]">
                Hi, I’m{" "}
                <span className="bg-linear-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent">
                  EKLSM
                </span>
                .
              </h1>
              <Paragraph>
                I’m an <strong>MEng Design Engineering</strong> student at{" "}
                <strong>Imperial College London</strong>, blending human-centred
                design with prototyping, electronics, and clean UI. I love
                building things that help people and telling stories through
                tests, data, and design.
              </Paragraph>
            </div>

            {/* Portrait */}
            <div className="group relative flex w-full flex-[0.35] justify-center md:justify-end">
              <img
                src={portrait}
                alt="Lara Merican"
                className="h-56 w-56 rounded-3xl object-cover object-top shadow-lg transition-transform duration-300 hover:scale-[1.01] hover:shadow-2xl hover:shadow-orange-500 sm:h-64 sm:w-64 md:h-72 md:w-72"
              />
            </div>
          </Motion.div>

          {/* Scroll Arrow */}
          <Motion.div
            className="absolute bottom-6 left-1/2 -translate-x-1/2 cursor-pointer"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: [0.2, 1, 0.2], y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            onClick={() => {
              window.scrollTo({
                top: window.innerHeight,
                behavior: "smooth",
              });
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-8 w-8 text-orange-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </Motion.div>
        </section>


        {/* Experience & Leadership */}
        <section className="px-4 pb-12 md:px-24">
          <div className="mx-auto max-w-6xl">
            <SectionDivider label="Experience & Leadership" />
            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-neutral-50 p-5 shadow-sm ring-1 ring-neutral-200">
                <h3 className="text-lg font-semibold">
                  Frontend Software Developer Intern
                </h3>
                <p className="mt-1 text-sm text-neutral-600">
                  Tewke • Apr 2026 –
                  Present
                </p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-neutral-800">
                  <li>
                    Developed and tested new features for the Tewke mobile app using
                    Flutter/Dart, improving user experience and
                    code maintainability.
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl bg-neutral-50 p-5 shadow-sm ring-1 ring-neutral-200">
                <h3 className="text-lg font-semibold">
                  Co-President & Treasurer
                </h3>
                <p className="mt-1 text-sm text-neutral-600">
                  K-Pop Dance Society Imperial College London • Sep 2025 –
                  Present
                </p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-neutral-800">
                  <li>
                    Led events, budgets, and partnerships; increased attendance
                    & engagement.
                  </li>
                  <li>
                    Coordinated marketing, merch, and performances with a
                    cross-functional team.
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl bg-neutral-50 p-5 shadow-sm ring-1 ring-neutral-200">
                <h3 className="text-lg font-semibold">
                  Brand & Product Designer
                </h3>
                <p className="mt-1 text-sm text-neutral-600">
                  Eidolon Therapeutics • Oct 2025 – Present
                </p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-neutral-800">
                  <li>
                    Built the company’s brand presence through website design,
                    business cards, and merchandise aligned with the existing
                    visual identity.
                  </li>
                  <li>
                    Translated complex biotech concepts into a clear, engaging
                    online experience for investors and collaborators.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Education & Interests */}
        <section className="px-4 pb-12 md:px-24">
          <div className="mx-auto max-w-6xl">
            <SectionDivider label="Education" />

            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
              {/* Imperial */}
              <div className="rounded-2xl bg-neutral-50 p-5 shadow-sm ring-1 ring-neutral-200">
                <h3 className="text-lg font-semibold">
                  Imperial College London
                </h3>
                <p className="mt-1 text-sm text-neutral-600">
                  MEng Design Engineering • Sep 2023 – Jun 2027
                </p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-neutral-800">
                  <li>
                    On track for <strong>First Class Honours</strong>
                  </li>
                  <li>
                    Core modules include{" "}
                    <strong>
                      Computing Applications, Sustainable Design Engineering,
                      Electronics, Finite Element Analysis,
                    </strong>{" "}
                    and <strong>Thermofluids</strong>
                  </li>
                  <li>
                    Member of the <strong>Design Engineering Society</strong>{" "}
                    and <strong>K-Pop Dance Team</strong>
                  </li>
                </ul>
              </div>

              {/* Concord College */}
              <div className="rounded-2xl bg-neutral-50 p-5 shadow-sm ring-1 ring-neutral-200">
                <h3 className="text-lg font-semibold">Concord College, UK</h3>
                <p className="mt-1 text-sm text-neutral-600">
                  A-Levels & AEA • Sep 2021 – Jun 2023
                </p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-neutral-800">
                  <li>
                    A-Levels: Maths, Further Maths, Chemistry, Physics (
                    <strong>A*A*A*A*</strong>)
                  </li>
                  <li>
                    AEA: Mathematics (<strong>Distinction</strong>)
                  </li>
                  <li>
                    Member of the <strong>Engineering Society</strong> and{" "}
                    <strong>Pop Dance Society</strong>
                  </li>
                </ul>
              </div>

              {/* BISKL */}
              <div className="rounded-2xl bg-neutral-50 p-5 shadow-sm ring-1 ring-neutral-200 md:col-span-2">
                <h3 className="text-lg font-semibold">
                  The British International School of Kuala Lumpur
                </h3>
                <p className="mt-1 text-sm text-neutral-600">
                  IGCSE • Sep 2014 – Jun 2021
                </p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-neutral-800">
                  <li>
                    Achieved <strong>13 A* grades</strong> across STEM and
                    languages, including{" "}
                    <strong>
                      Maths, Further Maths, Biology, Chemistry, Physics
                    </strong>
                  </li>
                  <li>Multilingual: English, Malay, Mandarin, and French</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

    
      </main>
      <Footer />
    </>
  );
}
