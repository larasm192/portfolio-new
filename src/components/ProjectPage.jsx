import { Navbar } from "../components/sections";
import { Sidebar } from "../components/sections";
import { useState, useEffect } from "react";

export default function ProjectPage({
  title,
  link,
  description,
  role,
  tools,
  timeframe,
  image,
  sections,
  sectionComponents, // new prop
}) {
  const [activeSection, setActiveSection] = useState("overview");
  const [scrollProgress, setScrollProgress] = useState(0);

  const getSectionOffset = (id) => {
    const el = document.getElementById(id);
    return el ? el.offsetTop : 0;
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.scrollHeight - windowHeight;
      const progress = (scrollY / fullHeight) * 100;
      setScrollProgress(progress);

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionTop = getSectionOffset(sections[i].id);
        if (scrollY + 100 >= sectionTop) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex pt-16">
        <Sidebar
          sections={sections}
          activeSection={activeSection}
          scrollProgress={scrollProgress}
        />

        <main className="flex-1 px-4 pb-20 md:px-20">
          <section className="pt-10" id="overview">
            <h1 className="text-4xl font-semibold md:text-5xl">{title}</h1>
            <a
              className="mt-2 text-xs text-gray-500 underline"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
            <img
              className="mt-6 h-48 w-full rounded-xl object-cover md:h-60"
              src={image}
            />
            <div className="mt-10 flex gap-6">
              <div className="w-[calc(200%/3)] bg-white p-4 shadow">
                <h2 className="mb-2 text-2xl font-medium">Overview</h2>
                <p className="text-base text-gray-700">{description}</p>
              </div>
              <div className="grid w-fit flex-1/2 grid-cols-1 gap-4">
                <div className="bg-white p-4 shadow">
                  <h4 className="text-sm font-semibold">My Role</h4>
                  <p className="text-xs text-gray-600">{role}</p>
                </div>
                <div className="bg-white p-4 shadow">
                  <h4 className="text-sm font-semibold">Tools</h4>
                  <p className="text-xs text-gray-600">{tools}</p>
                </div>
                <div className="bg-white p-4 shadow">
                  <h4 className="text-sm font-semibold">Timeframe</h4>
                  <p className="text-xs text-gray-600">{timeframe}</p>
                </div>
              </div>
            </div>
          </section>
          {/* Render custom section components */}
          {sectionComponents?.map((SectionComponent, idx) => (
            <SectionComponent key={idx} />
          ))}
        </main>
      </div>
    </>
  );
}
