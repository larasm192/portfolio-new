import ProjectPage from "../../components/ProjectPage.jsx";
import vehicle2Banner from "/vehicle2-banner.svg";
import Vehicle2ProblemSection from "./Vehicle2Problem.jsx";

// Import custom sections

const sections = [
  { id: "overview", label: "Overview" },
  { id: "challenge", label: "Challenge" },
  { id: "insights", label: "Insights" },
  { id: "ideation", label: "Ideation" },
  { id: "testing", label: "Testing" },
  { id: "conclusion", label: "Conclusion" },
];

const sectionComponents = [Vehicle2ProblemSection];

export default function Vehicle2() {
  return (
    <ProjectPage
      title="Vehicle Design Portfolio 2"
      link="https://github.com/larasm192/mini-monopoly"
      role="COO & Electronics Lead"
      tools="Arduino Nano, clickUp, Figma, C++, Prototyping, User-Centred Design"
      timeframe="May 2025 - June 2025"
      description="Stride is a smart, boundary-detecting walking stick designed to support Parkinson’s patients experiencing Freezing of Gait (FoG)—a condition that disrupts walking and undermines independence. Motivated by real patient observations and clinical literature, our team developed a discreet, ergonomic stick that offers visual and haptic cues to help users resume movement. Over 10 weeks, we ideated, prototyped, and refined the design through rigorous testing, resulting in a functional proof-of-concept ready for further validation."
      image={vehicle2Banner}
      sections={sections}
      sectionComponents={sectionComponents}
    />
  );
}
