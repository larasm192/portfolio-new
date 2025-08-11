import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./Home.jsx";
import Projects from "./Projects.jsx";
import Monopoly from "./projects/Monopoly/Monopoly.jsx";
import Stride from "./projects/Stride/Stride.jsx";
import Reseat from "./projects/Reseat/Reseat.jsx";
import Unfinished from "./projects/Unfinished.jsx";
import Music from "./Music.jsx";
import Vehicle2 from "./projects/Vehicle2/Vehicle2.jsx";
import Dfp from "./projects/Dfp/Dfp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/monopoly" element={<Monopoly />} />
        <Route path="/music" element={<Music />} />
        <Route path="/stride" element={<Stride />} />
        <Route path="/reseat" element={<Reseat />} />
        <Route path="/unfinishedproject" element={<Unfinished />} />
        <Route path="/vehicle2" element={<Vehicle2 />} />
        <Route path="/dfp" element={<Dfp />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
