import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { useState, useEffect } from "react";
import {
  Badge,
  MiniStat,
  Summary,
  Button,
} from "../../components/sections/ProjectComponents.jsx";

import MonopolyProblem from "./MonopolyProblem.jsx";
import MonopolyIdeation from "./MonopolyIdeation.jsx";
import MonopolyTesting from "./MonopolyTesting.jsx";
import MonopolyResult from "./MonopolyResult.jsx";
import MonopolyReflection from "./MonopolyReflection.jsx";
import MonopolyImage from "/monopoly-render.png";
import { a } from "framer-motion/client";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "brief", label: "The Brief" },
  { id: "ideation", label: "Ideation" },
  { id: "testing", label: "Prototyping & Testing" },
  { id: "result", label: "Result & Impact" },
  { id: "reflection", label: "Reflection" },
];

const sectionComponents = [
  MonopolyProblem,
  MonopolyIdeation,
  MonopolyTesting,
  MonopolyResult,
  MonopolyReflection,
];

export default function Monopoly() {
  const [activeSection, setActiveSection] = useState("overview");
  const [scrollProgress, setScrollProgress] = useState(0);

  const getSectionOffset = (id) => {
    const el = document.getElementById(id);
    return el ? el.offsetTop : 0;
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.scrollHeight - windowHeight;
      const progress = (scrollY / fullHeight) * 100;
      setScrollProgress(progress);

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionTop = getSectionOffset(sections[i].id);
        if (scrollY + 100 >= sectionTop) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex min-h-screen pt-16 text-neutral-900">
        <Sidebar
          sections={sections}
          activeSection={activeSection}
          scrollProgress={scrollProgress}
        />
        <main className="flex-1">
          {/* Summary Strip */}
          <section id="overview" className="relative overflow-hidden">
            <div className="relative flex flex-col lg:flex-row">
              {/* LEFT SIDE — TEXT */}
              <div className="flex items-center px-24 py-16 lg:w-3/5">
                <div className="max-w-4xl">
                  <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                    Mini Monopoly
                  </h1>
                  <Summary
                    text="Built a two-player browser-based Monopoly variant from
                    scratch, achieving a fully responsive, accessible, and
                    bug-free gameplay experience in under 6 weeks. Modular
                    architecture and functional programming patterns ensure
                    maintainability and easy extension."
                  ></Summary>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Badge label="Role" value="Sole Designer & Developer" />
                    <Badge
                      label="Tools"
                      value="HTML, CSS, JavaScript, JSDoc, Ramda.js, Figma, Mocha"
                    />
                    <Badge label="Timeframe" value="May – Jun 2025" />
                    <span className="inline-flex items-center rounded-2xl bg-emerald-600/10 px-3 py-1 text-sm font-semibold text-emerald-700 ring-1 ring-emerald-600/20">
                      Key metric: 100% core rules covered
                    </span>
                  </div>

                  <Button
                    image={MonopolyImage}
                    text="GitHub Repo"
                    link="https://github.com/larasm192/mini-monopoly"
                  />
                </div>
              </div>

              {/* RIGHT SIDE — FULL-HEIGHT IMAGE */}
              <div className="lg:w-2/5">
                <img
                  src={MonopolyImage}
                  alt="Mini Monopoly Screenshot"
                  className="h-full w-auto object-cover object-center"
                />
              </div>
            </div>
          </section>

          {/* Render custom sections */}
          {sectionComponents.map((SectionComponent, idx) => (
            <SectionComponent key={idx} />
          ))}
        </main>
      </div>
    </>
  );
}
