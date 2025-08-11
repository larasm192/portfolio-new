import Navbar from "./components/Navbar.jsx";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCardv2 from "./components/ProjectCard-v2.jsx";
import monopolyUrl from "/mini-monopoly.jpg";
import strideUrl from "/stride.svg";
import reseatUrl from "/reseat.svg";
import lara1Url from "/lara-1.jpg";
import { useState } from "react";
import vehicle2Url from "/vehicle2.svg";
import dfpUrl from "/dfp.svg";
import vehicleUrl from "/vehicle.svg";
import watertightUrl from "/watertight.svg";
import materialiseUrl from "/materialise.svg";
import bouncerUrl from "/bouncer.svg";
import revengUrl from "/reveng.svg";
import ifeUrl from "/ife.svg";
import pcsUrl from "/pcs.svg";
import revolveUrl from "/revolve.svg";
import electricarUrl from "/electricar.svg";
import dancingsegUrl from "/dancingseg.svg";
import flexicookUrl from "/flexicook.svg";
import hnmUrl from "/h&m.svg";

const allProjects = [
  {
    title: "Portfolio v3",
    description:
      "My personal portfolio website (this one!), showcasing my projects and skills.",
    link: "/portfolio-v3",
    image: monopolyUrl,
    skills: ["React", "Vite", "Tailwind CSS"],
    tags: ["software"],
  },
  {
    title: "Mini Monopoly",
    description:
      "A fully interactive Monopoly game, personalised with custom properties named after my friends.",
    link: "/monopoly",
    image: monopolyUrl,
    skills: ["HTML & CSS", "Figma", "JavaScript"],
    tags: ["software"],
  },
  {
    title: "Stride.",
    description:
      "A boundary-detection walking stick, designed to promote confidence and independence in Parkinson's patients.",
    link: "/stride",
    image: strideUrl,
    skills: ["Arduino (C++)", "User-Centred Design", "Prototyping"],
    tags: ["product-design", "electronics"],
  },
  {
    title: "Vehicle Design Portfolio 2",
    description:
      "Optimised the aerodynamics of a vehicle using thermofluid simulations to improve performance.",
    link: "/vehicle2",
    image: vehicle2Url,
    skills: ["Fusion 360", "Thermofluids", "CFD"],
    tags: ["engineering"],
  },
  {
    title: "Dancing Segway",
    description:
      "Programmed a mini-Segway robot to dance in sync with music using beat detection and PID balance control.",
    link: "/unfinishedproject",
    image: dancingsegUrl,
    skills: ["Python", "Audio Analysis", "Embedded Systems"],
    tags: ["electronics"],
  },
  {
    title: "Devices for Parkinson’s",
    description:
      "Designed assistive mobility devices to improve safety and independence for Parkinson’s patients.",
    link: "/dfp",
    image: dfpUrl,
    skills: ["User-Centred Design", "Fusion 360", "User Research"],
    tags: ["product-design", "electronics"],
  },
  {
    title: "Vehicle Design Portfolio",
    description:
      "Designed and analysed vehicle components to optimise structural performance and cooling efficiency.",
    link: "/vehicle",
    image: vehicleUrl,
    skills: ["Fusion 360", "SolidWorks", "Thermofluids"],
    tags: ["engineering"],
  },
  {
    title: "RESEAT",
    description:
      "Rethinking economy class seats through a lens of sustainability, comfort, and smarter material use.",
    link: "/reseat",
    image: reseatUrl,
    skills: ["Sustainability", "Fusion", "Product Teardown"],
    tags: ["product-design", "sustainability"],
  },
  {
    title: "REVOLVE",
    description:
      "Built a physical computing system using sensors and motors to perform a rotating action triggered by light.",
    link: "/unfinishedproject",
    image: revolveUrl,
    skills: ["Arduino (C++)", "Sensors", "Physical Computing"],
    tags: ["electronics", "sustainability"],
  },
  {
    title: "FlexiCook",
    description:
      "Created a flexible cooking product concept for students living in shared kitchen environments.",
    link: "/unfinishedproject",
    image: flexicookUrl,
    skills: ["Prototyping", "User-Centred Design", "Sketch Modelling"],
    tags: ["product-design"],
  },
  {
    title: "Plane Crash Survivability",
    description:
      "Predicted crash survivability using machine learning on aviation datasets.",
    link: "/unfinishedproject",
    image: pcsUrl,
    skills: ["Python", "pandas", "scikit-learn"],
    tags: ["software"],
  },
  {
    title: "Electronics Car",
    description:
      "Designed and programmed an autonomous car using sensors and control logic.",
    link: "/unfinishedproject",
    image: electricarUrl,
    skills: ["ESP32", "Python", "Bluetooth"],
    tags: ["electronics"],
  },
  {
    title: "Improving Food Experiences",
    description:
      "Designed solutions to improve food experiences for university athletes through HCD processes.",
    link: "/unfinishedproject",
    image: ifeUrl,
    skills: ["Design Research", "User-Centred Design", "Prototyping"],
    tags: ["product-design"],
  },
  {
    title: "REVENG",
    description:
      "Reverse engineered a consumer product to understand manufacturing processes and material choices.",
    link: "/unfinishedproject",
    image: revengUrl,
    skills: ["CAD", "Product Teardown", "Manufacturing Analysis"],
    tags: ["engineering"],
  },
  {
    title: "Bouncer Challenge",
    description:
      "Designed and simulated a device to launch a ping pong ball to a target using solid mechanics principles.",
    link: "/unfinishedproject",
    image: bouncerUrl,
    skills: ["Solid Mechanics", "MATLAB", "Simulation"],
    tags: ["engineering"],
  },
  {
    title: "H&M Net Zero Critique",
    description:
      "Analysed and critiqued H&M’s approach to achieving net zero carbon emissions.",
    link: "/unfinishedproject",
    image: hnmUrl,
    skills: ["Sustainability", "Critical Thinking", "Research"],
    tags: ["sustainability"],
  },
  {
    title: "Materialise",
    description:
      "Explored materials used in consumer products and their impact on performance and sustainability.",
    link: "/unfinishedproject",
    image: materialiseUrl,
    skills: ["Materials", "Manufacturing", "Design for Environment"],
    tags: ["engineering"],
  },
  {
    title: "Watertight",
    description:
      "Designed a solution to help users identify water usage habits and reduce waste.",
    link: "/unfinishedproject",
    image: watertightUrl,
    skills: ["Design Thinking", "Human-Centred Design", "Prototyping"],
    tags: ["product-design"],
  },
];

const categories = [
  "all",
  "product-design",
  "electronics",
  "software",
  "engineering",
  "sustainability",
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? allProjects
      : allProjects.filter((project) => project.tags.includes(activeFilter));

  return (
    <>
      <Navbar />

      <main className="pt-16">
        <section className="flex">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Title */}
            <div className="flex h-full w-screen items-center justify-between pt-10 pr-20 pb-10 pl-20">
              <h1 className="min-h-16 bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-6xl font-bold text-transparent">
                Projects
              </h1>

              <div className="flex size-fit gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className={`flex size-fit items-center justify-between rounded-3xl pt-2 pr-5 pb-2 pl-5 text-xs ${
                      activeFilter === cat
                        ? "bg-orange-500 text-white outline-2 outline-orange-500"
                        : "bg-white text-orange-500 outline-2 outline-orange-500 hover:bg-orange-500 hover:text-white"
                    }`}
                  >
                    {cat.replace("-", " ").toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* Project section */}
        <section className="flex min-h-auto flex-col items-center justify-center bg-gray-50">
          <motion.div
            className="flex w-full flex-col items-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="mx-auto mt-3 mr-3 mb-3 ml-3 grid border-collapse grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-2">
              <AnimatePresence mode="wait">
                {filteredProjects.map((project) => (
                  <motion.div
                    key={`${project.title}-${activeFilter}`} // Use a unique key
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                  >
                    <ProjectCardv2
                      title={project.title}
                      description={project.description}
                      link={project.link}
                      image={project.image}
                      skills={project.skills}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <a
              className="mt-5 mb-5 flex size-fit items-center justify-between rounded-4xl border-2 border-orange-500 bg-white pt-3 pr-5 pb-3 pl-5 text-base text-orange-500 hover:bg-orange-500 hover:text-white"
              href="/#"
              rel="noopener noreferrer"
            >
              Back to Home
            </a>
          </motion.div>
        </section>
      </main>
    </>
  );
}
