import Navbar from "./components/Navbar.jsx";
import { motion } from "framer-motion";
import arrow2Url from "/arrow-2.svg";
import arrowUrl from "/arrow.svg";
import arrow3Url from "/arrow-3.svg";
import lara1Url from "/lara-1.jpg";
import ProjectCard from "./components/ProjectCard.jsx";
import ProjectCardv2 from "./components/ProjectCard-v2.jsx";
import ProjectCardv3 from "./components/ProjectCard-v3.jsx";
import monopolyUrl from "/mini-monopoly.jpg";
import strideUrl from "/stride.svg";
import reseatUrl from "/reseat.svg";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="pt-16">
        {/* Hero or intro */}
        <section className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-white text-gray-800">
          <motion.div
            className="flex w-full max-w-6xl items-center justify-between px-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Slogan on the left */}
            <div className="flex-[0.7]">
              <h1 className="mb-4 text-8xl font-bold">
                Where{" "}
                <span className="bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent">
                  design
                </span>{" "}
                meets logic
              </h1>
              <p className="group relative w-fit text-lg text-gray-600">
                <img
                  src={arrow2Url || "/public/arrow-2.svg"}
                  alt="me"
                  className="absolute -right-10 -bottom-25 w-40 opacity-0 transition-all duration-500 group-hover:-translate-y-1 group-hover:rotate-[5deg] group-hover:opacity-100"
                />
                Design Engineering Student{" "}
                <a
                  className="bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent opacity-0 transition-all duration-300 group-hover:opacity-100"
                  href="https://lnk.bio/eklsm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  & Singer-Songwriter!
                </a>
              </p>
            </div>
            {/* Image on the right */}
            <div className="group relative flex flex-[0.3] justify-end">
              {/* Arrow (hidden until hover) */}
              <img
                src={arrowUrl || "/public/arrow.svg"}
                alt="me"
                className="absolute -top-35 -right-15 w-40 opacity-0 transition-all duration-500 group-hover:-translate-y-1 group-hover:rotate-[5deg] group-hover:opacity-100"
              />

              <img
                src={lara1Url || "/public/lara-1.jpg"}
                alt="Lara Merican"
                className="h-64 w-64 rounded-4xl object-cover shadow-lg transition-shadow duration-300 hover:scale-101 hover:shadow-2xl hover:shadow-orange-500"
              />
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
              <ProjectCard
                title="Vehicle & Pipeline Design"
                description="Optimising aerodynamics of a car and the cooling efficiency of the battery module’s cooling plate."
                link="#"
              />
            </div>

            <div className="group relative flex size-fit flex-[0.3] justify-end">
              {/* Arrow (hidden until hover) */}
              <img
                src={arrow3Url || "/public/arrow-3.svg"}
                alt="me"
                className="absolute -right-50 -bottom-0 w-80 opacity-0 transition-all duration-500 group-hover:-translate-y-1 group-hover:rotate-[5deg] group-hover:opacity-100"
              />

              <a
                className="mt-5 mb-5 flex size-fit items-center justify-between rounded-4xl border-2 border-orange-500 bg-white pt-3 pr-5 pb-3 pl-5 text-base text-orange-500 hover:bg-orange-500 hover:text-white"
                href="/projects"
                rel="noopener noreferrer"
              >
                See More Projects
              </a>
            </div>
          </motion.div>
        </section>

        {/* Projects section */}
        <section
          id="projects"
          className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-blue-50"
        >
          <h2 className="text-2xl">Projects</h2>
        </section>

        {/* Contact section */}
        <section
          id="contact"
          className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-green-50"
        >
          <h2 className="text-2xl">Contact</h2>
        </section>
      </main>
    </>
  );
}
