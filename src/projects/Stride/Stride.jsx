import ProjectPage from "../../components/ProjectPage.jsx";
import monopolyUrl from "/mini-monopoly.jpg";
import StrideProblem from "./StrideProblem.jsx";

// Import custom sections

const sections = [
  { id: "overview", label: "Overview" },
  { id: "challenge", label: "Challenge" },
  { id: "insights", label: "Insights" },
  { id: "ideation", label: "Ideation" },
  { id: "testing", label: "Testing" },
  { id: "conclusion", label: "Conclusion" },
];

const sectionComponents = [StrideProblem];

export default function Stride() {
  return (
    <ProjectPage
      title="Stride"
      link="https://github.com/larasm192/mini-monopoly"
      role="COO & Electronics Lead"
      tools="Arduino Nano, clickUp, Figma, C++, Prototyping, User-Centred Design"
      timeframe="May 2025 - June 2025"
      description="Mini Monopoly is a fully playable, two‑player browser version I built from the ground up to deepen my front‑end development skills and share a customised board game with friends. Motivated to create my own Monopoly variant, I hand‑crafted personalised property cards, used responsive CSS techniques and implemented challenging mechanics, like multi‑turn jail logic and rent doubling for complete colour sets. With keyboard controls and accessibility best practices, it blends technical rigour and playful design."
      image={monopolyUrl}
      sections={sections}
      sectionComponents={sectionComponents}
    />
  );
}
