import Navbar from "./components/Navbar.jsx";
import { motion } from "framer-motion";
import ProjectCardv2 from "./components/ProjectCard-v2.jsx";
import monopolyUrl from "/mini-monopoly.jpg";
import strideUrl from "/stride.svg";
import reseatUrl from "/reseat.svg";

export default function Projects() {
  return (
    <>
      <Navbar />

      <main className="pt-16">
        {/* Hero or intro */}
        <section className="flex min-h-5 bg-white text-gray-800">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Slogan on the left */}
            <div className="m-10 flex">
              <h1 className="ml-10 bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-6xl font-bold text-transparent">
                Projects
              </h1>
              <div className="flex size-fit items-center justify-between rounded-3xl bg-orange-500 pt-2 pr-5 pb-2 pl-5 text-xs text-white">
                ALL
              </div>
            </div>
          </motion.div>
        </section>

        {/* Project section */}
        <section
          id="about"
          className="flex min-h-auto flex-col items-center justify-center bg-gray-50"
        >
          <motion.div
            className="flex w-full flex-col items-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="mx-auto mt-3 mr-3 mb-3 ml-3 grid border-collapse grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-2">
              <ProjectCardv2
                title="Mini Monopoly"
                description="A fully interactive Monopoly game, personalised with custom properties named after my friends."
                link="/Monopoly"
                image={monopolyUrl}
                skill1="HTML"
                skill2="CSS"
                skill3="JavaScript"
              />
              <ProjectCardv2
                title="Stride."
                description="A boundary-detection walking stick, designed to promote confidence and independence in Parkinson's patients."
                link="/Stride"
                image={strideUrl}
                skill1="Arduino (C++)"
                skill2="User-Centred Design"
                skill3="Prototyping"
              />
              <ProjectCardv2
                title="RESEAT"
                description="Rethinking economy class seats through a lens of sustainability, comfort, and smarter material use."
                link="/Reseat"
                image={reseatUrl}
                skill1="Sustainability"
                skill2="Fusion"
                skill3="Product Teardown"
              />
              <ProjectCardv2
                title="Vehicle & Pipeline Design"
                description="Optimising aerodynamics of a car and the cooling efficiency of the battery module’s cooling plate."
                link="#"
              />

              <ProjectCardv2
                title="Vehicle & Pipeline Design"
                description="Optimising aerodynamics of a car and the cooling efficiency of the battery module’s cooling plate."
                link="#"
              />

              <ProjectCardv2
                title="Vehicle & Pipeline Design"
                description="Optimising aerodynamics of a car and the cooling efficiency of the battery module’s cooling plate."
                link="#"
              />
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
