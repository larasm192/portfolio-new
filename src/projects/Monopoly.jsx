import React, { useState, useEffect } from "react";
import { Navbar, Sidebar, Footer } from "../components/sections";
import {
  TextSection,
  IconListSection,
  IssueListSection,
  ProjectHero,
} from "../components/sections/ProjectSectionTemplates.jsx";
import MonopolyImage from "../assets/monopoly-render.png";
import MonopolyProperties from "../assets/monopoly-properties.png";
import codingUrl from "../assets/coding.png";
import logicUrl from "../assets/logic.png";
import accessibilityUrl from "../assets/accessibility.png";
import MonopolyPopup from "../assets/monopoly-popup.svg";
import MonopolyAccessibility from "../assets/monopoly-accessibility.jpg";
import MonopolyNoEnd from "../assets/monopoly-noend.png";

const sectionConfigs = [
  { id: "overview", label: "Overview", type: "overview" },
  {
    id: "brief",
    label: "The Brief",
    type: "text",
    bg: "muted",
    paragraphs: [
      "Design and build a simplified, browser-based web-app game using HTML, CSS and JavaScript. There should be accessible user interaction and clean modular code. The project required translating a classic board game into an interactive digital experience, handling everything from UI design and gameplay logic to accessibility and testing.",
    ],
  },
  {
    id: "ideation",
    label: "Ideation & Implementation",
    type: "text",
    paragraphs: [
      "Motivated by a desire to deepen my JavaScript fundamentals and create a personal spin on a childhood favourite, I designed a two-player Mini Monopoly where every property was named after my friends (and cats!). I developed the project with a modular architecture separating game logic (Monopoly.js) from UI (main.js) and asynchronous pop-up handling (popup.js).",
      "Final Design Decision: Modular and functional architecture for maintainability, paired with a responsive and accessible UI to ensure a consistent and enjoyable user experience.",
    ],
    images: [
      {
        src: MonopolyProperties,
        alt: "Monopoly properties named after friends",
        caption: "Monopoly properties named after friends",
      },
    ],
    iconItems: [
      {
        img: "https://img.icons8.com/ios/100/circular-arrows--v1.png",
        alt: "Turn-Based State Management",
        title: "Turn-Based State Management",
        text: "Ensures smooth alternation between two players, handling movement, property actions, and turn transitions automatically.",
      },
      {
        img: "https://img.icons8.com/ios/50/us-dollar-circled--v1.png",
        alt: "Property Ownership & Rent Payments",
        title: "Property Ownership & Rent Payments",
        text: "Allows players to purchase properties, charge rent when others land on them, and earn double rent when owning a complete colour set.",
      },
      {
        img: "https://img.icons8.com/ios/100/fast-forward.png",
        alt: "Passing GO & Jail Mechanics",
        title: "Passing GO & Jail Mechanics",
        text: "Implements Monopoly’s event tiles — collecting £200 when passing GO, visiting jail, or being sent there with multi-turn escape logic and optional fines.",
      },
      {
        img: "https://img.icons8.com/ios/100/trophy--v1.png",
        alt: "Winning Conditions",
        title: "Winning Conditions",
        text: "Detects when a player’s money drops to zero or below, declaring the other player as winner and ending the session.",
      },
    ],
    iconColumns: 2,
  },
  {
    id: "testing",
    label: "Prototyping & Testing",
    type: "issues",
    bg: "muted",
    paragraphs: [
      "To verify both functionality and user experience, I used the Mocha Testing Framework to validate code performance and conducted three rounds of user testing to refine the gameplay and interface.",
    ],
    items: [
      {
        img: MonopolyPopup,
        alt: "Pop-up design",
        issueTitle: "Issue #1",
        issueText:
          "Initially I had used the console confirm function to handle user decisions, which was jarring and disrupted the game flow.",
        resolutionTitle: "Resolution #1",
        resolutionText:
          "Designed a modular popup component with yes/no buttons and integrated it into gameplay.",
      },
      {
        img: MonopolyNoEnd,
        alt: "Money balancing",
        issueTitle: "Issue #2",
        issueText:
          "Users reached a stage where all properties were bought but they still had a large amount of money.",
        resolutionTitle: "Resolution #2",
        resolutionText:
          "Calculated an optimal starting balance based on property costs to ensure competitive gameplay; validated via another round of testing.",
      },
      {
        img: MonopolyAccessibility,
        alt: "Accessibility improvements",
        issueTitle: "Issue #3",
        issueText:
          "One user pointed out that the web app did not feel accessible for keyboard-only users.",
        resolutionTitle: "Resolution #3",
        resolutionText:
          "Added keyboard controls for all interactive elements, ensured focus states were visually clear, and tested navigation flow using only the keyboard.",
      },
    ],
  },
  {
    id: "result",
    label: "Result & Impact",
    type: "text",
    paragraphs: [
      "After several refinement cycles, Mini Monopoly transformed from a simple board-game prototype into a fully responsive, bug-free web app that captures the strategy and excitement of Monopoly in a browser. Every major mechanic — from turn-based state management and rent logic to multi-turn jail events and win detection — was modularised for clarity and maintainability. The final build achieved complete rule coverage, smooth performance, and consistent behaviour across screen sizes and input methods. Accessibility improvements made the game playable with keyboard-only navigation, while thoughtful visual feedback helped players follow turns effortlessly. What started as a personal coding challenge became a robust showcase of design-led engineering — balancing technical precision with playful user experience.",
    ],
  },
  {
    id: "reflection",
    label: "Reflections",
    type: "icons",
    bg: "muted",
    items: [
      {
        img: codingUrl,
        alt: "Learning HTML, CSS & JS",
        title: "Learning HTML, CSS & JS",
        text: "As my first fully coded web project, I learned to connect structure, style, and interactivity into one cohesive system.",
      },
      {
        img: logicUrl,
        alt: "Importance of User Testing",
        title: "Importance of User Testing",
        text: "Through their feedback, I learned how iterative testing directly improves both design and technical performance.",
      },
      {
        img: accessibilityUrl,
        alt: "Designing for Accessibility",
        title: "Designing for Accessibility",
        text: "Adding keyboard controls and focus states taught me that accessibility is fundamental to functional and inclusive design.",
      },
    ],
  },
];

const sidebarSections = sectionConfigs.map(({ id, label }) => ({ id, label }));

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
    switch (section.type) {
      case "text":
        return (
          <TextSection
            key={section.id}
            id={section.id}
            label={section.label}
            paragraphs={section.paragraphs}
            images={section.images}
            stats={section.stats}
            quote={section.quote}
            personas={section.personas}
            bg={section.bg}
            iconItems={section.iconItems}
            iconColumns={section.iconColumns}
          />
        );
      case "icons":
        return (
          <IconListSection
            key={section.id}
            id={section.id}
            label={section.label}
            items={section.items}
            bg={section.bg}
          />
        );
      case "issues":
        return (
          <IssueListSection
            key={section.id}
            id={section.id}
            label={section.label}
            items={section.items}
            paragraphs={section.paragraphs}
            bg={section.bg}
          />
        );
      default:
        return null;
    }
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
            title="Mini Monopoly"
            summary="Built a two-player browser-based Monopoly variant from scratch, achieving a fully responsive, accessible, and bug-free gameplay experience in under 6 weeks. Modular architecture and functional programming patterns ensure maintainability and easy extension."
            badges={[
              {
                label: "Tools",
                value: "HTML, CSS, JavaScript, JSDoc, Ramda.js, Figma, Mocha",
              },
              { label: "Timeframe", value: "May – Jun 2025" },
            ]}
            buttons={[
              {
                image: "https://img.icons8.com/windows/32/external-link.png",
                text: "GitHub Repo",
                link: "https://github.com/larasm192/mini-monopoly",
              },
            ]}
            extra={
              <span className="mt-3 inline-flex items-center rounded-2xl bg-emerald-600/10 px-3 py-1 text-sm font-semibold text-emerald-700 ring-1 ring-emerald-600/20">
                Key metric: 100% core rules covered
              </span>
            }
            image={{ src: MonopolyImage, alt: "Mini Monopoly Screenshot" }}
          />

          {sectionConfigs
            .filter((section) => section.type !== "overview")
            .map(renderSection)}
        </main>
      </div>
      <Footer />
    </>
  );
}
