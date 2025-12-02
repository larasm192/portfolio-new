import Navbar from "./components/sections/Navbar.jsx";
import { motion as Motion, AnimatePresence } from "framer-motion";
import ProjectCardv2 from "./components/ProjectCard-v2.jsx";
import monopolyUrl from "./assets/monopoly-render.png";
import strideUrl from "./assets/stride.svg";
import reseatUrl from "./assets/reseat.svg";
import lara1Url from "./assets/lara-1.jpg";
import { useState } from "react";
import vehicle2Url from "./assets/vehicle2.svg";
import dfpUrl from "./assets/dfp.svg";
import vehicleUrl from "./assets/vehicle.svg";
import watertightUrl from "./assets/watertight.svg";
import materialiseUrl from "./assets/materialise.svg";
import revengUrl from "./assets/reveng.svg";
import ifeUrl from "./assets/ife.svg";
import pcsUrl from "./assets/pcs.svg";
import revolveUrl from "./assets/revolve.svg";
import electricarUrl from "./assets/electricar.svg";
import dancingsegUrl from "./assets/dancingseg.svg";
import flexicookUrl from "./assets/flexicook.svg";
import portfolioUrl from "./assets/portfolio-render.png";

const allProjects = [
  {
    title: "Mini Monopoly",
    description:
      "A fully interactive Monopoly game, personalised with custom properties named after my friends.",
    link: "/mini-monopoly",
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
    title: "Conceptual Vehicle Design and Analysis",
    description:
      "Designed and analysed vehicle components to optimise structural performance and cooling efficiency.",
    link: "/conceptual-vehicle-design-and-analysis",
    image: vehicleUrl,
    skills: ["Fusion 360", "Thermofluids", "CFD"],
    tags: ["engineering"],
  },
  {
    title: "Aerodynamic and Thermal Optimisation",
    description:
      "Optimised the aerodynamics of a vehicle using thermofluid simulations to improve performance.",
    link: "/aerodynamic-and-thermal-systems-optimisation",
    image: vehicle2Url,
    skills: ["Fusion 360", "Thermofluids", "CFD"],
    tags: ["engineering"],
  },
  {
    title: "Dancing Segway",
    description:
      "Programmed a mini-Segway robot to dance in sync with music using beat detection and PID balance control.",
    link: "/dancing-segway",
    image: dancingsegUrl,
    skills: ["Python", "Audio Analysis", "Embedded Systems"],
    tags: ["electronics"],
  },
  {
    title: "Portfolio v3",
    description:
      "My personal portfolio website (this one!), showcasing my projects and skills.",
    link: "/portfolio-v3",
    image: portfolioUrl,
    skills: ["React", "Vite", "Tailwind CSS"],
    tags: ["software"],
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
    link: "/revolve",
    image: revolveUrl,
    skills: ["Arduino (C++)", "Sensors", "Physical Computing"],
    tags: ["electronics", "sustainability"],
  },
  {
    title: "Improving Food Experiences",
    description:
      "Designed solutions to improve food experiences for university athletes through HCD processes.",
    link: "/improving-food-experiences",
    image: ifeUrl,
    skills: ["Design Research", "User-Centred Design", "Prototyping"],
    tags: ["product-design"],
  },
  {
    title: "FlexiCook",
    description:
      "Created a flexible cooking product concept for students living in shared kitchen environments.",
    link: "/flexicook",
    image: flexicookUrl,
    skills: ["Prototyping", "User-Centred Design", "Sketch Modelling"],
    tags: ["product-design"],
  },
  {
    title: "Plane Crash Survivability",
    description:
      "Predicted crash survivability using machine learning on aviation datasets.",
    link: "/plane-crash-survivability",
    image: pcsUrl,
    skills: ["Python", "pandas", "scikit-learn"],
    tags: ["software"],
  },
  {
    title: "Electronics Car",
    description:
      "Designed and programmed an autonomous car using sensors and control logic.",
    link: "/electronics-car",
    image: electricarUrl,
    skills: ["ESP32", "Python", "Bluetooth"],
    tags: ["electronics"],
  },
  {
    title: "REVENG",
    description:
      "Reverse engineered a consumer product to understand manufacturing processes and material choices.",
    link: "/reveng",
    image: revengUrl,
    skills: ["CAD", "Product Teardown", "Manufacturing Analysis"],
    tags: ["engineering"],
  },
  {
    title: "Materialise",
    description:
      "Explored materials used in consumer products and their impact on performance and sustainability.",
    link: "/materialise",
    image: materialiseUrl,
    skills: ["Materials", "Manufacturing", "Design for Environment"],
    tags: ["engineering"],
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

const formatCategoryLabel = (cat) => cat.replace("-", " ").toUpperCase();

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredProjects =
    activeFilter === "all"
      ? allProjects
      : allProjects.filter((project) => project.tags.includes(activeFilter));

  const handleFilterClick = (cat) => {
    setActiveFilter(cat);
    // close dropdown on mobile after choosing
    setIsFilterOpen(false);
  };

  return (
    <>
      <Navbar />
      <main className="w-full pt-16">
        {/* Header + Filter */}
        <section className="flex">
          <Motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="w-full"
          >
            <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-4 px-6 pt-10 pb-6 md:px-24 md:pb-10 lg:flex-row lg:items-center lg:justify-between">
              {/* Title */}
              <h1 className="min-h-16 bg-linear-to-r from-orange-300 to-orange-500 bg-clip-text text-center text-4xl font-bold text-transparent sm:text-5xl md:text-6xl lg:text-left">
                Projects
              </h1>

              {/* Desktop filters */}
              <div className="hidden size-fit gap-2 lg:flex">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => handleFilterClick(cat)}
                    className={`flex size-fit items-center justify-between rounded-3xl pt-2 pr-5 pb-2 pl-5 text-xs ${
                      activeFilter === cat
                        ? "bg-orange-500 text-white outline-2 outline-orange-500"
                        : "bg-white text-orange-500 outline-2 outline-orange-500 hover:bg-orange-500 hover:text-white"
                    }`}
                  >
                    {formatCategoryLabel(cat)}
                  </button>
                ))}
              </div>

              {/* Mobile filter: toggle button + dropdown */}
              <div className="w-full lg:hidden">
                <button
                  onClick={() => setIsFilterOpen((prev) => !prev)}
                  className="flex w-full items-center justify-between rounded-3xl border border-orange-500 bg-white px-4 py-2 text-xs font-medium text-orange-500"
                >
                  <span>Filter: {formatCategoryLabel(activeFilter)}</span>
                  <span className="text-lg">{isFilterOpen ? "−" : "+"}</span>
                </button>

                {isFilterOpen && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => handleFilterClick(cat)}
                        className={`rounded-3xl px-4 py-2 text-xs ${
                          activeFilter === cat
                            ? "bg-orange-500 text-white outline-2 outline-orange-500"
                            : "bg-white text-orange-500 outline-2 outline-orange-500 hover:bg-orange-500 hover:text-white"
                        }`}
                      >
                        {formatCategoryLabel(cat)}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </Motion.div>
        </section>

        {/* Project section */}
        <section className="flex min-h-auto flex-col items-center justify-center">
          <Motion.div
            className="flex w-full flex-col items-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="mx-auto grid max-w-360 border-collapse grid-cols-1 gap-8 px-8 sm:grid-cols-2 sm:px-12 lg:grid-cols-2">
              <AnimatePresence mode="wait">
                {filteredProjects.map((project) => (
                  <Motion.div
                    key={`${project.title}-${activeFilter}`}
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
                  </Motion.div>
                ))}
              </AnimatePresence>
            </div>

            <a
              className="mt-8 mb-8 flex size-fit items-center justify-between rounded-4xl border-2 border-orange-500 bg-white pt-3 pr-5 pb-3 pl-5 text-base text-orange-500 hover:bg-orange-500 hover:text-white"
              href="/"
            >
              Back to Home
            </a>
          </Motion.div>
        </section>
      </main>
    </>
  );
}
