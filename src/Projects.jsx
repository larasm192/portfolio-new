import Navbar from "./components/sections/Navbar.jsx";
import { motion as Motion, AnimatePresence } from "framer-motion";
import ProjectCardv2 from "./components/ProjectCard-v2.jsx";
import { useState } from "react";
import { projectCategories, projects } from "./data/projects.js";
import { Footer } from "./components/sections";

const categories = projectCategories;

const formatCategoryLabel = (cat) => cat.replace("-", " ").toUpperCase();

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.tags.includes(activeFilter));

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
      <Footer />
    </>
  );
}
