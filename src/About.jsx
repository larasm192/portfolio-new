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
      className={`rounded-2xl border-2 bg-white px-5 py-3 text-base transition-all ${colorClasses[color]}`}
    >
      {label}
    </a>
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
                UI. I love building things that help people—then telling the
                story clearly through tests, data, and design.
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
                  Co-President — K-Pop Dance Society
                </h3>
                <p className="mt-1 text-sm text-neutral-600">
                  Imperial College London
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
                <h3 className="text-lg font-semibold">Selected Projects</h3>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-neutral-800">
                  <li>
                    <strong>Stride</strong> — Smart walking stick for
                    Parkinson’s FoG; visual/haptic cues; 10-week R&D.
                  </li>
                  <li>
                    <strong>RESEAT</strong> — Sustainable economy seat concept;
                    material choices & comfort.
                  </li>
                  <li>
                    <strong>Mini Monopoly</strong> — Fully responsive two-player
                    browser game (from scratch).
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Education & Interests */}
        <section className="px-8 pb-12 md:px-24">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-neutral-50 p-5 shadow-sm ring-1 ring-neutral-200">
              <h3 className="text-lg font-semibold">Education</h3>
              <p className="mt-1 text-sm text-neutral-600">
                Imperial College London
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-neutral-800">
                <li>MEng Design Engineering (Class of 2027)</li>
                <li>
                  Dean’s List; strong performance in Computing, Thermofluids,
                  and Materials
                </li>
                <li>
                  Coursework includes UI/UX, prototyping, electronics, and
                  product design
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-neutral-50 p-5 shadow-sm ring-1 ring-neutral-200">
              <h3 className="text-lg font-semibold">Beyond Engineering</h3>
              <Paragraph>
                I produce music as <strong>EKLSM</strong> — exploring sound,
                branding, and visual identity alongside engineering.
              </Paragraph>
              <div className="mt-3">
                <MusicCard
                  title="first love things"
                  artist="EKLSM"
                  link="https://album.link/eklsm-firstlovethings"
                  image={firstlovethingsUrl}
                  date="Released on 24th January 2025"
                />
              </div>
            </div>
          </div>
        </section>

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
              <ExternalLinkButton
                href="mailto:mericanlara@gmail.com"
                label="Email"
                color="blue"
              />
              <ExternalLinkButton
                href="https://www.linkedin.com/in/lara-merican/"
                label="LinkedIn"
                color="purple"
              />
              <a
                className="aspect-square h-10"
                href="https://www.linkedin.com/in/lara-merican/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <img
                  src={linkedinUrl}
                  alt="LinkedIn"
                  className="aspect-square h-full w-full rounded-xl object-cover"
                />
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
