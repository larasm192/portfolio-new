import Navbar from "./components/Navbar.jsx";
import { motion as Motion, AnimatePresence } from "framer-motion";
import MusicCard from "./components/MusicCard.jsx";
import monopolyUrl from "/mini-monopoly.jpg";
import strideUrl from "/stride.svg";
import { useState } from "react";

const allProjects = [
  {
    title: "first love things",
    description:
      "My personal portfolio website (this one!), showcasing my projects and skills.",
    link: "/portfolio-v3",
    image: monopolyUrl,
    tags: ["software"],
  },
  {
    title: "Mini Monopoly",
    description:
      "A fully interactive Monopoly game, personalised with custom properties named after my friends.",
    link: "/monopoly",
    image: monopolyUrl,
    tags: ["software"],
  },
  {
    title: "Stride.",
    description:
      "A boundary-detection walking stick, designed to promote confidence and independence in Parkinson's patients.",
    link: "/stride",
    image: strideUrl,
    tags: ["product-design", "electronics"],
  },
];

const categories = ["all", "albums", "singles", "collabs", "covers"];

export default function Music() {
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
          <Motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Title */}
            <div className="flex h-full w-screen items-center justify-between pt-10 pr-20 pb-10 pl-20">
              <h1 className="min-h-16 bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-6xl font-bold text-transparent">
                Music
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
          </Motion.div>
        </section>

        {/* Project section */}
        <section className="flex min-h-auto flex-col items-center justify-center bg-gray-50">
          <Motion.div
            className="flex w-full flex-col items-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="mx-auto mt-3 mr-3 mb-3 ml-3 grid border-collapse grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-3">
              <AnimatePresence mode="wait">
                {filteredProjects.map((project) => (
                  <Motion.div
                    key={`${project.title}-${activeFilter}`} // Use a unique key
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                  >
                    <MusicCard
                      title={project.title}
                      artist={project.description}
                      image={project.image}
                      link={project.link}
                      date={project.date}
                    />
                  </Motion.div>
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
          </Motion.div>
        </section>
      </main>
    </>
  );
}
