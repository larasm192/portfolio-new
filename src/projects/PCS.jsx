import React, { useState, useEffect } from "react";
import { Navbar, Sidebar, Summary, Footer } from "../components/sections";
import { Button, Badge } from "../components/ui";
import StrideImage from "../assets/stride-render.svg";
import vehicleUrl from "../assets/vehicle2-render.svg";
import render from "../assets/pcs.svg";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "challenge", label: "TBC" },
];

const sectionComponents = [
  //StrideChallenge,
  //StrideInsights,
  //StrideIdeation,
  //StrideTesting,
  //StrideResult,
  //StrideReflection,
];

export default function PCS() {
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
                    Plane Crash Survivability
                  </h1>
                  <Summary text="Analysed historical aviation crash data (1918–2022) to predict survivability outcomes using machine learning. Applied Decision Trees, Logistic Regression, Support Vector Machines, and Random Forest models in Python to evaluate how flight phase, crash cause, aircraft type, and location influence survival likelihood."></Summary>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Badge
                      label="Tools"
                      value="Python, Pandas, scikit-learn, Google Colab"
                    />
                    <Badge label="Timeframe" value="May – Jun 2025" />
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Button
                      image="https://img.icons8.com/windows/32/external-link.png"
                      text="Full Report"
                      link="/pcs-report.pdf"
                    />
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE — FULL-HEIGHT IMAGE */}
              <div className="lg:w-2/5">
                <img
                  src={render}
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
      <Footer />
    </>
  );
}
