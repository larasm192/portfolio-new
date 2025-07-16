import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./Home.jsx";
import Projects from "./Projects.jsx";
import Monopoly from "./projects/Monopoly.jsx";
import Stride from "./projects/Stride.jsx";
import Reseat from "./projects/Reseat.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/Monopoly" element={<Monopoly />} />
        <Route path="/Stride" element={<Stride />} />
        <Route path="/reseat" element={<Reseat />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
