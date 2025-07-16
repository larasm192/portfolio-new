import Navbar from "./components/Navbar.jsx";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCardv2 from "./components/ProjectCard-v2.jsx";
import monopolyUrl from "/mini-monopoly.jpg";
import strideUrl from "/stride.svg";
import reseatUrl from "/reseat.svg";
import { useState } from "react";

const allProjects = [
  {
    title: "Mini Monopoly",
    description:
      "A fully interactive Monopoly game, personalised with custom properties named after my friends.",
    link: "/monopoly",
    image: monopolyUrl,
    skills: ["HTML", "CSS", "JavaScript"],
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
      "Optimising aerodynamics of a car and the cooling efficiency of the battery module’s cooling plate.",
    link: "/reseat",
    image: reseatUrl,
    skills: ["ANSYS", "Wind Tunnel", "Optimisation"],
    tags: ["product-design", "sustainability"],
  },
  {
    title: "AAPL Valuation",
    description:
      "Optimising aerodynamics of a car and the cooling efficiency of the battery module’s cooling plate.",
    link: "/reseat",
    image: monopolyUrl,
    skills: ["ANSYS", "Wind Tunnel", "Optimisation"],
    tags: ["data-analysis"],
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
];

const categories = [
  "all",
  "product-design",
  "electronics",
  "software",
  "data-analysis",
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
        <section className="flex" id="all-projects">
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
                        ? "bg-orange-500 text-white"
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
