import Navbar from "./components/sections/Navbar.jsx";
import { motion as Motion } from "framer-motion";
import arrow2Url from "./assets/arrow-2.svg";
import arrowUrl from "./assets/arrow.svg";
import arrow3Url from "./assets/arrow-3.svg";
import arrow4Url from "./assets/arrow-4.svg";
import lara1Url from "./assets/lara-1.jpg";
import ProjectCard from "./components/ProjectCard.jsx";
import ProjectCardv2 from "./components/ProjectCard-v2.jsx";
import ProjectCardv3 from "./components/ProjectCard-v3.jsx";
import monopolyUrl from "./assets/monopoly-render.png";
import strideUrl from "./assets/stride.svg";
import reseatUrl from "./assets/reseat.svg";
import MusicCard from "./components/MusicCard.jsx";
import firstlovethingsUrl from "./assets/first-love-things.jpg";
import linkedinUrl from "./assets/linkedin.png";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="pt-16">
        {/* Hero or intro */}
        <section className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-white text-gray-800">
          <Motion.div
            className="flex w-full max-w-6xl items-center justify-between px-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Slogan on the left */}
            <div className="flex-[0.7]">
              <h1 className="mb-4 text-8xl leading-25 font-bold">
                Hello there, <br></br>I'm{" "}
                <span className="bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent">
                  Lara!
                </span>{" "}
              </h1>
              <p className="group relative mt-16 w-fit text-lg text-gray-600">
                <img
                  src={arrow2Url}
                  alt="me"
                  className="absolute -right-10 -bottom-25 w-40 opacity-0 transition-all duration-500 group-hover:-translate-y-1 group-hover:rotate-[5deg] group-hover:opacity-100"
                />
                Design Engineering Student{" "}
                <a
                  className="bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent opacity-0 transition-all duration-300 group-hover:opacity-100"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://lnk.bio/eklsm"
                >
                  & Singer-Songwriter!
                </a>
              </p>
            </div>
            {/* Image on the right */}
            <div className="group relative flex flex-[0.3] justify-end">
              {/* Arrow (hidden until hover) */}
              <img
                src={arrowUrl}
                alt="me"
                className="absolute -top-35 -right-15 w-40 opacity-0 transition-all duration-500 group-hover:-translate-y-1 group-hover:rotate-[5deg] group-hover:opacity-100"
              />

              <img
                src={lara1Url}
                alt="Lara Merican"
                className="h-64 w-64 rounded-4xl object-cover shadow-lg transition-shadow duration-300 hover:scale-101 hover:shadow-2xl hover:shadow-orange-500"
              />
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
            <div className="mx-auto mt-3 mr-3 mb-3 ml-3 grid border-collapse grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-2">
              <ProjectCardv2
                title="Mini Monopoly"
                description="A fully interactive Monopoly game, personalised with custom properties named after my friends."
                link="/monopoly"
                image={monopolyUrl}
                skills={["HTML", "CSS", "JavaScript"]}
              />
              <ProjectCardv2
                title="Stride."
                description="A boundary-detection walking stick, designed to promote confidence and independence in Parkinson's patients."
                link="/stride"
                image={strideUrl}
                skills={["Arduino (C++)", "User-Centred Design", "Prototyping"]}
              />
              <ProjectCardv2
                title="RESEAT"
                description="Rethinking economy class seats through a lens of sustainability, comfort, and smarter material use."
                link="/reseat"
                image={reseatUrl}
                skills={["Sustainability", "Fusion", "Product Teardown"]}
              />
              <ProjectCardv2
                title="Portfolio v3"
                description="My personal portfolio website (this one!), showcasing my projects and skills."
                link="/portfolio-v3"
                image={monopolyUrl}
                skills={["React", "Vite", "Tailwind CSS"]}
              />
            </div>

            <div className="group relative flex size-fit flex-[0.3] justify-end">
              {/* Arrow (hidden until hover) */}
              <img
                src={arrow3Url}
                alt="me"
                className="absolute -right-50 -bottom-0 w-80 opacity-0 transition-all duration-500 group-hover:-translate-y-1 group-hover:rotate-[5deg] group-hover:opacity-100"
              />

              <a
                className="mt-8 mb-8 flex size-fit items-center justify-between rounded-4xl border-2 border-orange-500 bg-white pt-3 pr-5 pb-3 pl-5 text-base text-orange-500 hover:bg-orange-500 hover:text-white"
                href="/projects"
                rel="noopener noreferrer"
              >
                See More Projects
              </a>
            </div>
          </Motion.div>
        </section>

        {/* Music section */}
        <section className="flex min-h-150 items-center justify-center border-12 border-white bg-gray-50">
          <Motion.div
            className="flex w-full max-w-6xl items-center justify-between px-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Image on the left */}
            <div className="group relative flex flex-[0.3] justify-end">
              {/* Arrow (hidden until hover) */}
              <img
                src={arrow4Url}
                alt="me"
                className="absolute -right-60 -bottom-5 w-50 opacity-0 transition-all duration-500 group-hover:-translate-y-1 group-hover:rotate-[5deg] group-hover:opacity-100"
              />

              <MusicCard
                title="first love things"
                artist="EKLSM"
                link="https://album.link/eklsm-firstlovethings"
                image={firstlovethingsUrl}
                date="Released on 24th January 2025"
              />
            </div>

            {/* Slogan on the right */}
            <div className="flex flex-[0.7] flex-col items-end text-right text-black">
              <h1 className="mb-4 text-6xl font-bold">
                Engineering by{" "}
                <span className="bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent">
                  day
                </span>{" "}
                <br></br>
                music by{" "}
                <span className="bg-gradient-to-r from-blue-300 to-purple-500 bg-clip-text text-transparent">
                  night
                </span>{" "}
              </h1>
              <a
                className="mt-8 flex size-fit items-center justify-between rounded-4xl border-2 border-purple-500 bg-transparent pt-3 pr-5 pb-3 pl-5 text-base text-purple-500 hover:bg-purple-500 hover:text-white"
                href="https://lnk.bio/eklsm"
                rel="noopener noreferrer"
                target="_blank"
              >
                See More Music
              </a>
            </div>
          </Motion.div>
        </section>

        {/* Contact section */}
        <section className="flex min-h-50 items-center justify-center bg-white">
          <div className="flex w-full max-w-6xl items-center justify-center gap-2 px-8">
            <a
              className="aspect-square h-10"
              href="https://www.linkedin.com/in/lara-merican/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedinUrl}
                alt="LinkedIn"
                className="aspect-square h-full w-full rounded-xl object-cover"
              />
            </a>
            <a
              className="aspect-square h-10"
              href="mailto:mericanlara@gmail.com"
            >
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/material-rounded/50/mail.png"
                alt="mail"
              />
            </a>
            <a
              className="aspect-square h-10"
              href="http://github.com/larasm192/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/ios-glyphs/50/github.png"
                alt="github"
              />
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
