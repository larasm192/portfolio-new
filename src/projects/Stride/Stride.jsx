import ProjectPage from "../../components/ProjectPage.jsx";
import monopolyUrl from "/mini-monopoly.jpg";
import strideBanner from "/stride-banner.svg";
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
      description="Stride is a smart, boundary-detecting walking stick designed to support Parkinson’s patients experiencing Freezing of Gait (FoG)—a condition that disrupts walking and undermines independence. Motivated by real patient observations and clinical literature, our team developed a discreet, ergonomic stick that offers visual and haptic cues to help users resume movement. Over 10 weeks, we ideated, prototyped, and refined the design through rigorous testing, resulting in a functional proof-of-concept ready for further validation."
      image={strideBanner}
      sections={sections}
      sectionComponents={sectionComponents}
    />
  );
}
