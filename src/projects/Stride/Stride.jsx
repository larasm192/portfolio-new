import React, { useState, useEffect } from "react";
import { Navbar, Sidebar, Summary } from "../../components/sections";
import { Button, Badge } from "../../components/ui";
import StrideChallenge from "./StrideChallenge";
import StrideImage from "../../assets/stride-render.svg";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "challenge", label: "The Challenge" },
  { id: "insights", label: "Insights" },
  { id: "ideation", label: "Ideation" },
  { id: "testing", label: "Prototyping & Testing" },
  { id: "result", label: "Result & Impact" },
  { id: "reflection", label: "Reflection" },
];

const sectionComponents = [
  StrideChallenge,
  // StrideInsights,
  // StrideIdeation,
  // StrideTesting,
  // StrideResult,
  // StrideReflection,
];

export default function Stride() {
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
                    Stride
                  </h1>
                  <Summary text="Stride is a smart walking stick that aids Parkinson’s patients experiencing Freezing of Gait (FoG). Developed from patient insights and clinical research, it delivers visual and haptic cues to help users resume movement. Over 10 weeks, the team designed, prototyped, and tested a discreet, ergonomic proof of concept."></Summary>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Badge
                      label="Role"
                      value="Electronics Lead & Project Coordinator"
                    />
                    <Badge
                      label="Tools"
                      value="Arduino (C++), User-Centred Design, Iterative Prototyping, Agile-Gantt"
                    />
                    <Badge label="Timeframe" value="May – Jun 2025" />
                    <span className="inline-flex items-center rounded-2xl bg-blue-600/10 px-3 py-1 text-sm font-semibold text-blue-700 ring-1 ring-emerald-600/20">
                      Key metric: 100% core rules covered
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Button
                      image="https://img.icons8.com/windows/32/external-link.png"
                      text="Full Portfolio"
                      link="https://github.com/larasm192/mini-monopoly"
                    />
                    <Button
                      image="https://img.icons8.com/windows/32/external-link.png"
                      text="Full Report"
                      link="https://github.com/larasm192/mini-monopoly"
                    />
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE — FULL-HEIGHT IMAGE */}
              <div className="lg:w-2/5">
                <img
                  src={StrideImage}
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
