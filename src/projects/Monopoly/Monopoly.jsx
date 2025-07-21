import ProjectPage from "../../components/ProjectPage";
import monopolyUrl from "/mini-monopoly.jpg";

// Import custom sections
import MonopolyProblem from "./MonopolyProblem.jsx";
import MonopolyInsights from "./MonopolyInsights.jsx";
import MonopolyIdeation from "./MonopolyIdeation.jsx";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "challenge", label: "Challenge" },
  { id: "insights", label: "Insights" },
  { id: "ideation", label: "Ideation" },
  { id: "testing", label: "Testing" },
  { id: "conclusion", label: "Conclusion" },
];

const sectionComponents = [MonopolyProblem, MonopolyInsights, MonopolyIdeation];

export default function Monopoly() {
  return (
    <ProjectPage
      title="Mini Monopoly"
      link="https://github.com/larasm192/mini-monopoly"
      role="Sole Designer & Developer"
      tools="HTML, CSS, JavaScript, JSDocs, Ramda.js, Figma, Mocha"
      timeframe="May 2025 - June 2025"
      description="Mini Monopoly is a fully playable, two‑player browser version I built from the ground up to deepen my front‑end development skills and share a customised board game with friends. Motivated to create my own Monopoly variant, I hand‑crafted personalised property cards, used responsive CSS techniques and implemented challenging mechanics, like multi‑turn jail logic and rent doubling for complete colour sets. With keyboard controls and accessibility best practices, it blends technical rigour and playful design."
      image={monopolyUrl}
      sections={sections}
      sectionComponents={sectionComponents}
    />
  );
}
