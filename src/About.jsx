// src/About.jsx
import { motion as Motion } from "framer-motion";
import { SectionDivider, Paragraph, Quote } from "./components/sections"; // adjust path if needed
import Statistic from "./components/ui/Statistic";
import MusicCard from "./components/MusicCard.jsx";
import Navbar from "./components/sections/Navbar.jsx";

// Assets (swap to your own)
import lara1Url from "./assets/lara-1.jpg";
import linkedinUrl from "./assets/linkedin.png";
import firstlovethingsUrl from "./assets/first-love-things.jpg";

// Small local component for skill tags
function SkillPills({ title, items = [] }) {
  return (
    <section className="rounded-2xl bg-neutral-50 p-5 shadow-sm ring-1 ring-neutral-200 md:p-6">
      <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((s, i) => (
          <span
            key={i}
            className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-sm text-neutral-800"
          >
            {s}
          </span>
        ))}
      </div>
    </section>
  );
}

// Reusable button
function ExternalLinkButton({ href, label, color = "orange" }) {
  const colorClasses = {
    orange:
      "border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white",
    blue: "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white",
    purple:
      "border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white",
  };
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`rounded-4xl border-2 bg-white px-5 py-3 text-base transition-all ${colorClasses[color]}`}
    >
      {label}
    </a>
  );
}

// components/InterestsGallery.jsx
function InterestsGallery({ items = [], title = "Interests" }) {
  return (
    <section className="px-8 pb-12 md:px-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-xl font-semibold">{title}</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {items.map((it, i) => (
            <figure
              key={i}
              className="overflow-hidden rounded-2xl bg-neutral-50 shadow-sm ring-1 ring-neutral-200"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img
                  src={it.src}
                  alt={it.alt || it.caption || "Interest"}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              {(it.caption || it.tags?.length) && (
                <figcaption className="p-3">
                  {it.caption && (
                    <p className="text-sm text-neutral-800">{it.caption}</p>
                  )}
                  {!!it.tags?.length && (
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {it.tags.slice(0, 3).map((t, j) => (
                        <span
                          key={j}
                          className="rounded-full bg-neutral-100 px-2 py-0.5 text-xs text-neutral-700 ring-1 ring-neutral-200"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-white text-gray-800">
          <Motion.div
            className="flex w-full max-w-6xl items-center justify-between px-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            {/* Text */}
            <div className="flex-[0.65]">
              <h1 className="mb-4 text-6xl leading-[1.05] font-bold">
                Hi, I’m{" "}
                <span className="bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent">
                  Lara Merican
                </span>
                .
              </h1>
              <Paragraph>
                I’m an <strong>MEng Design Engineering</strong> student at{" "}
                <strong>Imperial College London</strong> (Dean’s List), blending
                human-centred design with prototyping, electronics, and clean
                UI. I love building things that help people and telling stories
                through tests, data, and design.
              </Paragraph>

              <div className="mt-6 flex flex-wrap gap-3">
                {/* If you host a CV in /public */}
                <ExternalLinkButton
                  href="/LaraMerican_CV.pdf"
                  label="Download CV"
                />
                <ExternalLinkButton
                  href="mailto:mericanlara@gmail.com"
                  label="Email Me"
                  color="blue"
                />
                <ExternalLinkButton
                  href="https://www.linkedin.com/in/lara-merican/"
                  label="LinkedIn"
                  color="purple"
                />
              </div>
            </div>
            {/* Portrait */}
            <div className="group relative flex flex-[0.35] justify-end">
              <img
                src={lara1Url}
                alt="Lara Merican"
                className="h-72 w-72 rounded-3xl object-cover shadow-lg transition-transform duration-300 hover:scale-[1.01] hover:shadow-2xl hover:shadow-orange-500"
              />
            </div>
          </Motion.div>
        </section>

        {/* Quick stats */}
        <section className="px-8 py-12 md:px-24">
          <div className="mx-auto max-w-6xl">
            <SectionDivider label="At a Glance" />
            <div className="mt-2 flex flex-wrap justify-center gap-x-16">
              <Statistic
                prefix="Degree"
                value="MEng"
                caption="Design Engineering @ Imperial"
                valueClass="from-blue-400 to-indigo-700"
              />
              <Statistic
                prefix="Award"
                value="Dean’s List"
                caption="23-24 Academic excellence"
                valueClass="from-emerald-400 to-emerald-700"
              />
              <Statistic
                prefix="Projects"
                value="15+"
                caption="Design • Electronics • Software"
                valueClass="from-orange-400 to-rose-600"
              />
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="px-8 pb-12 md:px-24">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-2">
            <SkillPills
              title="Design & UX"
              items={[
                "User Research",
                "Usability Testing",
                "Storytelling",
                "Wireframing",
                "Figma",
                "Accessibility",
              ]}
            />
            <SkillPills
              title="Engineering & Prototyping"
              items={[
                "Fusion 360",
                "3D Printing",
                "Arduino / ESP32",
                "Sensors & Haptics",
                "Rapid Prototyping",
                "DFM Basics",
              ]}
            />
            <SkillPills
              title="Web & Software"
              items={[
                "HTML/CSS/JS",
                "React + Vite",
                "Tailwind CSS",
                "JSDoc",
                "Mocha (testing)",
              ]}
            />
            <SkillPills
              title="Other"
              items={[
                "Project Leadership",
                "Public Speaking",
                "Music Production (EKLSM)",
              ]}
            />
          </div>
        </section>

        {/* Experience & Leadership */}
        <section className="px-8 pb-12 md:px-24">
          <div className="mx-auto max-w-6xl">
            <SectionDivider label="Experience & Leadership" />
            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
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
        <section className="px-8 pb-12 md:px-24">
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

        <InterestsGallery
          title="Beyond Engineering"
          items={[
            {
              src: "/images/eklsm-studio.jpg",
              caption: "Recording as EKLSM",
              tags: ["Music", "Production"],
            },
            {
              src: "/images/kpop-stage.jpg",
              caption: "K-Pop Showcase",
              tags: ["Dance"],
            },
            {
              src: "/images/hike.jpg",
              caption: "Weekend hike",
              tags: ["Outdoors"],
            },
            {
              src: "/images/sketches.jpg",
              caption: "Sketching ideas",
              tags: ["ID"],
            },
          ]}
        />

        {/* Contact */}
        <section className="flex items-center justify-center bg-white pb-16">
          <div className="flex w-full max-w-6xl flex-col items-center gap-4 px-8">
            <SectionDivider label="Let’s Connect" />
            <Paragraph>
              I’m open to internships in London or Malaysia across product
              design, UX, and design-engineering. If my work resonates, I’d love
              to chat.
            </Paragraph>

            <div className="mt-2 flex items-center gap-3">
              <a
                className="aspect-square h-10"
                href="https://www.linkedin.com/in/lara-merican/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={linkedinUrl}
                  alt="LinkedIn"
                  className="aspect-square h-full w-full rounded-xl object-cover"
                />
              </a>
              <a
                className="aspect-square h-10"
                href="mailto:mericanlara@gmail.com"
              >
                <img
                  width="50"
                  height="50"
                  src="https://img.icons8.com/material-rounded/50/mail.png"
                  alt="mail"
                />
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
