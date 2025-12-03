import React, { useState, useEffect } from "react";
import { Navbar, Sidebar } from "../components/sections";
import {
  ProjectHero,
  TextSection,
} from "../components/sections/ProjectSectionTemplates.jsx";
import render from "../assets/reveng.svg";

const sectionConfigs = [
  { id: "overview", label: "Overview", type: "overview" },
  {
    id: "challenge",
    label: "Summary",
    type: "text",
    bg: "muted",
    paragraphs: [
      "Conducted a product teardown of a Braun shaver to analyse its materials, manufacturing processes, and component design. Reverse-engineered the product to propose alternative material selections aligned with the client’s performance goals.",
    ],
  },
];

const sidebarSections = sectionConfigs.map(({ id, label }) => ({ id, label }));

export default function REVENG() {
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

      for (let i = sidebarSections.length - 1; i >= 0; i--) {
        const sectionTop = getSectionOffset(sidebarSections[i].id);
        if (scrollY + 100 >= sectionTop) {
          setActiveSection(sidebarSections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderSection = (section) => {
    if (section.type === "text") {
      return (
        <TextSection
          key={section.id}
          id={section.id}
          label={section.label}
          paragraphs={section.paragraphs}
          bg={section.bg}
        />
      );
    }
    return null;
  };

  return (
    <>
      <Navbar />
      <div className="flex min-h-screen pt-16 text-neutral-900">
        <Sidebar
          sections={sidebarSections}
          activeSection={activeSection}
          scrollProgress={scrollProgress}
        />
        <main className="flex-1">
          <ProjectHero
            title="REVENG"
            summary="Conducted a product teardown of a Braun shaver to analyse its materials, manufacturing processes, and component design. Reverse-engineered the product to propose alternative material selections aligned with the client’s performance goals."
            badges={[
              {
                label: "Tools",
                value:
                  "Product Teardown, Ansys Granta Edupack, Market Research",
              },
              { label: "Timeframe", value: "Jan – Mar 2024" },
            ]}
            buttons={[
              {
                image: "https://img.icons8.com/windows/32/external-link.png",
                text: "Full Report",
                link: "/reveng-report.pdf",
              },
            ]}
            image={{ src: render, alt: "REVENG render" }}
          />

          {sectionConfigs
            .filter((section) => section.type !== "overview")
            .map(renderSection)}
        </main>
      </div>
    </>
  );
}
