import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Projects from "./Projects.jsx";
import Monopoly from "./projects/Monopoly.jsx";
import Stride from "./projects/Stride.jsx";
import Vehicle_1 from "./projects/Vehicle_1.jsx";
import Unfinished from "./Unfinished.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import Vehicle_2 from "./projects/Vehicle_2.jsx";
import Dancing_Segway from "./projects/Dancing_Segway.jsx";
import RESEAT from "./projects/RESEAT.jsx";
import REVOLVE from "./projects/REVOLVE.jsx";
import IFE from "./projects/IFE.jsx";
import FlexiCook from "./projects/FlexiCook.jsx";
import PCS from "./projects/PCS.jsx";
import Electronics_Car from "./projects/Electronics_Car.jsx";
import REVENG from "./projects/REVENG.jsx";
import Materialise from "./projects/Materialise.jsx";
import Portfolio from "./projects/Portfolio.jsx";

// Add console log for debugging
const DebugMonopoly = () => {
  console.log("Monopoly Route Rendered");
  return <Monopoly />;
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/mini-monopoly" element={<DebugMonopoly />} />
          <Route path="/stride" element={<Stride />} />
          <Route path="/unfinishedproject" element={<Unfinished />} />
          <Route
            path="/conceptual-vehicle-design-and-analysis"
            element={<Vehicle_1 />}
          />
          <Route
            path="/aerodynamic-and-thermal-systems-optimisation"
            element={<Vehicle_2 />}
          />
          <Route path="/dancing-segway" element={<Dancing_Segway />} />
          <Route path="/reseat" element={<RESEAT />} />
          <Route path="/revolve" element={<REVOLVE />} />
          <Route path="/improving-food-experiences" element={<IFE />} />
          <Route path="/flexicook" element={<FlexiCook />} />
          <Route path="/plane-crash-survivability" element={<PCS />} />
          <Route path="/electronics-car" element={<Electronics_Car />} />
          <Route path="/reveng" element={<REVENG />} />
          <Route path="/materialise" element={<Materialise />} />
          <Route path="/portfolio-v3" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>,
);
