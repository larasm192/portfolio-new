import { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Projects from "./Projects.jsx";
import Unfinished from "./Unfinished.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";

// Lazy-load project pages so the homepage bundle stays small.
const Monopoly = lazy(() => import("./projects/Monopoly.jsx"));
const Stride = lazy(() => import("./projects/Stride.jsx"));
const Vehicle_1 = lazy(() => import("./projects/Vehicle_1.jsx"));
const Vehicle_2 = lazy(() => import("./projects/Vehicle_2.jsx"));
const Dancing_Segway = lazy(() => import("./projects/Dancing_Segway.jsx"));
const RESEAT = lazy(() => import("./projects/RESEAT.jsx"));
const REVOLVE = lazy(() => import("./projects/REVOLVE.jsx"));
const IFE = lazy(() => import("./projects/IFE.jsx"));
const FlexiCook = lazy(() => import("./projects/FlexiCook.jsx"));
const PCS = lazy(() => import("./projects/PCS.jsx"));
const Electronics_Car = lazy(() => import("./projects/Electronics_Car.jsx"));
const REVENG = lazy(() => import("./projects/REVENG.jsx"));
const Materialise = lazy(() => import("./projects/Materialise.jsx"));
const Portfolio = lazy(() => import("./projects/Portfolio.jsx"));
const Ecodash = lazy(() => import("./projects/Ecodash.jsx"));

const fallback = (
  <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-orange-50 via-white to-orange-100 px-6">
    <div className="flex items-center gap-3 rounded-2xl bg-white/80 px-5 py-3 shadow-lg ring-1 ring-orange-200/60 backdrop-blur">
      <span className="h-5 w-5 animate-spin rounded-full border-2 border-orange-400 border-t-transparent" />
      <span className="text-sm font-medium text-orange-700">
        Loading your project…
      </span>
    </div>
  </div>
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <Suspense fallback={fallback}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-me" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/mini-monopoly" element={<Monopoly />} />
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
            <Route path="/ecodash" element={<Ecodash />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>,
);
