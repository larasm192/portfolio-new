import React, { useState, useEffect } from "react";
import { Navbar, Sidebar, Summary } from "../components/sections";
import { Button, Badge } from "../components/ui";
import StrideImage from "../assets/stride-render.svg";
import vehicleUrl from "../assets/vehicle2-render.svg";
import segway from "../assets/dancingseg.svg";

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

export default function Dancing_Segway() {
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
                    Dancing Segway
                  </h1>
                  <Summary text="Developed a self-balancing two-wheeled robot capable of dancing in sync with music through real-time beat detection and PID control. Integrated sensors, microcontrollers, and signal processing algorithms to achieve stable motion and responsive choreography, demonstrating the intersection of control engineering and creative expression."></Summary>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Badge
                      label="Tools"
                      value="Python, Pybench Board, Audio Analysis, Embedded Systems"
                    />
                    <Badge label="Timeframe" value="Mar 2025" />
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Button
                      image="https://img.icons8.com/windows/32/external-link.png"
                      text="Full Portfolio"
                      link="/vehicle2-portfolio.pdf"
                    />
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE — FULL-HEIGHT IMAGE */}
              <div className="lg:w-2/5">
                <img
                  src={segway}
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
