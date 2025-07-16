import Navbar from "./Navbar.jsx";
import { motion } from "framer-motion";
import arrow2Url from "/arrow-2.svg";
import arrowUrl from "/arrow.svg";
import lara1Url from "/lara-1.jpg";

export default function ProjectPage({ title }) {
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
                This is{" "}
                <span className="bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent">
                  {title}{" "}
                </span>
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
      </main>
    </>
  );
}
