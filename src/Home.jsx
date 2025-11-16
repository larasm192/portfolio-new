import Navbar from "./components/sections/Navbar.jsx";
import { motion as Motion } from "framer-motion";
import arrow2Url from "./assets/arrow-2.svg";
import arrowUrl from "./assets/arrow.svg";
import arrow3Url from "./assets/arrow-3.svg";
import arrow4Url from "./assets/arrow-4.svg";
import lara1Url from "./assets/lara-1.jpg";
import lara2Url from "./assets/lara-2.jpeg";
import ProjectCard from "./components/ProjectCard.jsx";
import ProjectCardv2 from "./components/ProjectCard-v2.jsx";
import ProjectCardv3 from "./components/ProjectCard-v3.jsx";
import ProjectCardv4 from "./components/ProjectCard-v4.jsx";
import monopolyUrl from "./assets/monopoly-render.png";
import strideUrl from "./assets/stride.svg";
import reseatUrl from "./assets/reseat.svg";
import MusicCard from "./components/MusicCard.jsx";
import firstlovethingsUrl from "./assets/first-love-things.jpg";
import linkedinUrl from "./assets/linkedin.png";
import ProjectRotator from "./components/sections/ProjectRotator.jsx";
import StrideTitle from "./assets/stride-title.svg";
import ReseatTitle from "./assets/reseat-title.svg";
import MonopolyTitle from "./assets/monopoly-title.svg";
import Monopoly from "./projects/Monopoly/Monopoly.jsx";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="pt-16">
        {/* Hero or intro */}
        <section className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-white text-gray-800">
          <Motion.div
            className="flex w-full max-w-6xl flex-col-reverse items-center justify-between gap-10 px-4 pt-8 pb-16 md:flex-row md:gap-0 md:px-8 md:pt-0 md:pb-0"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Slogan on the left */}
            <div className="flex-[0.7]">
              <h1 className="mb-4 text-4xl leading-tight font-bold sm:text-5xl text-center md:text-left md:text-6xl lg:text-8xl">
                Hello there, <br />
                I'm{" "}
                <span className="bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent">
                  Lara!
                </span>{" "}
              </h1>
              <p className="group relative mt-8 w-fit text-base text-gray-600 sm:text-lg md:mt-16">
                {/* Hide arrow on very small screens so it doesn’t overlap */}
                <img
                  src={arrow2Url}
                  alt="me"
                  className="absolute -right-10 -bottom-25 hidden w-40 opacity-0 transition-all duration-500 group-hover:-translate-y-1 group-hover:rotate-[5deg] group-hover:opacity-100 md:block"
                />
                Design Engineering Student{" "}
                <a
                  className="bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent md:opacity-0 transition-all duration-300 group-hover:opacity-100"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://lnk.bio/eklsm"
                >
                  & Singer-Songwriter!
                </a>
              </p>
            </div>
            {/* Image on the right */}
            <div className="group relative flex flex-[0.3] justify-center md:justify-end">
              {/* Arrow (hidden until hover, and hidden on mobile) */}
              <img
                src={arrowUrl}
                alt="me"
                className="absolute -top-35 -right-15 hidden w-40 opacity-0 transition-all duration-500 group-hover:-translate-y-1 group-hover:rotate-[5deg] group-hover:opacity-100 md:block"
              />

              <img
                src={lara2Url}
                alt="Lara Merican"
                className="aspect-square w-52 rounded-4xl object-cover object-bottom shadow-lg transition-shadow transition-transform duration-300 hover:scale-101 hover:shadow-2xl hover:shadow-orange-500 sm:w-64 md:w-72 lg:w-80"
              />
            </div>
          </Motion.div>
        </section>

        {/* Project section */}
        <section className="flex min-h-auto flex-col items-center justify-center bg-gray-50 px-4 pt-10 pb-12 md:px-0 md:pt-0">
          <Motion.div
            className="flex w-full flex-col items-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <ProjectRotator
              CardComponent={ProjectCardv4}
              intervalMs={5000}
              items={[
                {
                  title: "Mini Monopoly",
                  description:
                    "A fully interactive Monopoly game, personalised with custom properties named after my friends.",
                  link: "/mini-monopoly",
                  image: MonopolyTitle,
                  skills: ["HTML", "CSS", "JavaScript"],
                },
                {
                  title: "Stride.",
                  description:
                    "A boundary-detection walking stick, designed to promote confidence and independence in Parkinson's patients.",
                  link: "/stride",
                  image: StrideTitle,
                  skills: [
                    "Arduino (C++)",
                    "User-Centred Design",
                    "Prototyping",
                  ],
                },
                {
                  title: "RESEAT",
                  description:
                    "Rethinking economy class seats through a lens of sustainability, comfort, and smarter material use.",
                  link: "/reseat",
                  image: ReseatTitle,
                  skills: ["Sustainability", "Fusion", "Product Teardown"],
                },
              ]}
            />

            <div className="group relative mt-4 flex size-fit flex-[0.3] justify-center md:mt-0 md:justify-end">
              {/* Arrow (hidden until hover, and hidden on small screens) */}
              <img
                src={arrow3Url}
                alt="me"
                className="absolute -right-10 -bottom-10 hidden w-48 opacity-0 transition-all duration-500 group-hover:-translate-y-1 group-hover:rotate-[5deg] group-hover:opacity-100 md:-right-50 md:bottom-0 md:block md:w-80"
              />

              <a
                className="mt-6 mb-8 flex size-fit items-center justify-between rounded-4xl border-2 border-orange-500 bg-white px-5 py-3 text-sm text-orange-500 hover:bg-orange-500 hover:text-white sm:text-base"
                href="/projects"
                rel="noopener noreferrer"
              >
                See More Projects
              </a>
            </div>
          </Motion.div>
        </section>

        {/* Music section */}
        <section className="flex items-center justify-center border-12 border-white bg-gray-50 px-4 py-12 md:min-h-150 md:px-0 md:py-0">
          <Motion.div
            className="flex w-full max-w-6xl flex-col-reverse items-center justify-between gap-10 px-0 md:flex-row md:gap-0 md:px-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Image on the left */}
            <div className="group relative flex w-full flex-[0.3] justify-center md:justify-end">
              {/* Arrow (hidden until hover, and hidden on small screens) */}
              <img
                src={arrow4Url}
                alt="me"
                className="absolute -right-10 -bottom-5 hidden w-40 opacity-0 transition-all duration-500 group-hover:-translate-y-1 group-hover:rotate-[5deg] group-hover:opacity-100 lg:-right-60 lg:block lg:w-50"
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
            <div className="flex w-full flex-[0.7] flex-col items-center text-center text-black md:items-end md:text-right">
              <h1 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-6xl">
                Engineering by{" "}
                <span className="bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent">
                  day
                </span>{" "}
                <br />
                music by{" "}
                <span className="bg-gradient-to-r from-blue-300 to-purple-500 bg-clip-text text-transparent">
                  night
                </span>{" "}
              </h1>
              <a
                className="mt-6 flex size-fit items-center justify-between rounded-4xl border-2 border-purple-500 bg-transparent px-5 py-3 text-sm text-purple-500 hover:bg-purple-500 hover:text-white sm:text-base"
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
<section className="flex flex-col items-center justify-center bg-white px-4 py-8 md:min-h-50 md:px-0 md:py-0">
  <div className="flex w-full max-w-6xl items-center justify-center gap-4 px-0 md:gap-2 md:px-8">
    <a
      className="aspect-square h-10 sm:h-12"
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
      className="aspect-square h-10 sm:h-12"
      href="mailto:mericanlara@gmail.com"
    >
      <img
        width="50"
        height="50"
        src="https://img.icons8.com/material-rounded/50/mail.png"
        alt="mail"
        className="h-full w-full"
      />
    </a>

    <a
      className="aspect-square h-10 sm:h-12"
      href="http://github.com/larasm192/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        width="50"
        height="50"
        src="https://img.icons8.com/ios-glyphs/50/github.png"
        alt="github"
        className="h-full w-full"
      />
    </a>
  </div>

  {/* Signature line */}
  <p className="mt-4 pb-6 text-center text-xs text-gray-500 md:text-sm">
    Designed and coded by Lara Merican (2025)
  </p>
</section>

      </main>
    </>
  );
}
