import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./Home.jsx";
import Projects from "./Projects.jsx";
import Monopoly from "./projects/Monopoly/Monopoly.jsx";
import Stride from "./projects/Stride/Stride.jsx";
import Unfinished from "./Unfinished.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";

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
          <Route path="/projects" element={<Projects />} />
          <Route path="/monopoly" element={<DebugMonopoly />} />
          <Route path="/stride" element={<Stride />} />
          <Route path="/unfinishedproject" element={<Unfinished />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>,
);
