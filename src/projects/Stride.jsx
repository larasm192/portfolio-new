import React, { useState, useEffect } from "react";
import { Navbar, Sidebar } from "../components/sections";
import {
  TextSection,
  PrototypingSection,
  ImagesSection,
  IconListSection,
  ProjectHero,
  IssueListSection,
} from "../components/sections/ProjectSectionTemplates.jsx";
import StrideImage from "../assets/stride-render.svg";
import StrideFOG from "../assets/stride-fog.jpg";
import StrideUsers from "../assets/stride-users.svg";
import StrideUXMap from "../assets/stride-uxmap.svg";
import StrideIdeationSketches from "../assets/stride-ideation.svg";
import StrideInitialThoughts from "../assets/stride-initialthoughts.svg";
import handlev1 from "../assets/stride-handle-v1.png";
import handlev2 from "../assets/stride-handle-v2.png";
import handlev3 from "../assets/stride-handle-v3.png";
import housingv1 from "../assets/stride-housing-v1.png";
import housingv2 from "../assets/stride-housing-v2.png";
import basev1 from "../assets/stride-base-v1.png";
import basev2 from "../assets/stride-base-v2.png";
import basev3 from "../assets/stride-base-v3.png";
import StrideFritzing from "../assets/stride-fritzing.jpeg";
import FinalHandle from "../assets/stride-finalhandle.svg";
import CMF from "../assets/stride-cmf.svg";
import Packaging from "../assets/stride-packaging.svg";
import UserGuide from "../assets/stride-userguide.svg";
import Sensor from "../assets/stride-sensor.svg";
import Exploded from "../assets/stride-exploded.svg";
import Benjamin from "../assets/stride-benjamin.svg";
import Edith from "../assets/stride-edith.svg";
import Patricia from "../assets/stride-patricia.svg";

const sectionConfigs = [
  { id: "overview", label: "Overview", type: "overview" },
  {
    id: "challenge",
    label: "The Challenge",
    type: "text",
    bg: "muted",
    paragraphs: [
      "Freezing of gait (FoG) is a symptom of Parkinson’s disease, characterised by sudden episodes where individuals feel unable to move their feet forward despite intending to walk. Parkinson’s patients experiencing FoG often face sudden mobility blocks, compromising balance and independence. Existing walking aids provide stability, but few offer real-time cues or feedback to help users resume motion safely.",
    ],
    stats: [
      {
        prefix: "More than",
        value: "10M",
        caption: "Parkinson’s patients worldwide",
      },
      {
        prefix: "Up to",
        value: "80%",
        caption: "Of patients experience Freezing of Gait (FoG)",
      },
    ],
    images: [
      {
        src: StrideFOG,
        alt: "Freezing of Gait visual from Balanced Gait Physical Therapy",
        caption: (
          <>
            Freezing of Gait visual – ©{" "}
            <a
              href="https://www.balancedgaitpt.com/freezing-of-gait-causes-symptoms-and-treatment/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 underline hover:text-neutral-700"
            >
              Balanced Gait Physical Therapy
            </a>
          </>
        ),
      },
    ],
  },
  {
    id: "insights",
    label: "Insights from Research",
    type: "text",
    paragraphs: [
      "By talking to experts and visiting care homes including Bupa Lynton Hall, Westcombe Park, and the Age UK Centre, we built empathy with Parkinson’s patients and caregivers, gaining first-hand insight into their mobility challenges.",
      "Synthesising our research, we developed 3 key personas and corresponding UX journey maps capturing diverse Parkinson’s experiences. These personas guided our design decisions, ensuring Stride effectively addresses real user needs.",
    ],
    stats: [
      { value: "4", caption: "Care homes visited" },
      { value: "10+", caption: "Patient interviews" },
      { value: "4", caption: "Expert interviews" },
    ],
    quote: {
      author: "Parkinson's Patient",
      role: "The Caring Physio",
      text: "“I fall around 10 times everyday. ... no, nothing has helped, no physio no exercise nothing. I still fall many times. ... If I could think of anything, maybe something to help with balance... that would be my dream honestly.”",
    },
    images: [
      {
        src: StrideUsers,
        alt: "Photos from carehome visits with Parkinson's patients",
        caption: <>Photos from carehome visits with Parkinson's patients</>,
      },
      {
        src: StrideUXMap,
        alt: "UX Journey Map",
        caption: <>UX Journey Map made from personas</>,
      },
    ],
    personas: [
      {
        name: "Benjamin",
        age: 61,
        stage: "Early stage",
        yearsSinceDx: 3,
        avatar: Benjamin,
        bio: "Recently diagnosed pianist and granddad-to-be; worries about future independence after tremors interrupted his playing.",
        needs: "ways to keep up hobbies and daily routines.",
        because: "he wants quality time with family and to stay active.",
        however: "tremors and fatigue make fine-motor tasks hard.",
        accent: "from-blue-500 to-indigo-600",
      },
      {
        name: "Edith",
        age: 74,
        stage: "Severe stage",
        yearsSinceDx: 12,
        avatar: Edith,
        bio: "Care-home resident who loves cooking/knitting; experiences FoG episodes and memory lapses affecting independence.",
        needs: "safe independence for day-to-day tasks.",
        because: "she feels overly reliant on carers and family.",
        however: "freezing and instability make activities unsafe.",
        accent: "from-rose-500 to-pink-500",
      },
      {
        name: "Patricia",
        age: 62,
        stage: "Caregiver (spouse)",
        yearsSinceDx: 7,
        avatar: Patricia,
        bio: "Supports husband with moderate PD; wants him to stay socially engaged without highlighting the condition.",
        needs: "discreet support to keep him involved socially.",
        because: "she values his confidence and participation.",
        however: "current aids feel stigmatizing and intrusive.",
        accent: "from-emerald-500 to-teal-600",
      },
    ],
  },
  {
    id: "ideation",
    label: "Ideation",
    type: "text",
    bg: "muted",
    paragraphs: [
      "Following a Crazy 8’s co-design session that produced multiple initial concepts, we shared a questionnaire with 10+ target users. Feedback from patients and clinicians led us to develop Stride, a boundary-detecting walking stick.",
    ],
    images: [
      {
        src: StrideIdeationSketches,
        alt: "Sketches from Crazy 8's ideation session",
        caption: <>Sketches from Crazy 8's ideation session</>,
      },
      {
        src: StrideInitialThoughts,
        alt: "Initial ideation sketches exploring features",
        caption: (
          <>
            Initial ideation sketches – exploring various features for the
            boundary-detecting walking stick
          </>
        ),
      },
    ],
  },
  {
    id: "testing",
    label: "Prototyping & Testing",
    type: "prototyping",
    intro:
      "Multiple CAD iterations were made on Fusion 360 as an initial stage of prototyping. Beyond exploring visual aesthetics, it was a critical step in testing the internal mechanisms of the product and determining the optimal placement for electrical components. Digital prototyping allowed key design choices to be made without extra expenses or manufacturing waste.",
    blocks: [
      {
        type: "iteration",
        title: "Handle",
        items: [
          {
            label: "V1",
            img: handlev1,
            why: "Looked modern but uncomfortable; thickness & grip not supportive.",
          },
          {
            label: "V2",
            img: handlev2,
            why: "Better ergonomics; proportion too small vs. shaft; added constant-vibe button.",
          },
          {
            label: "V3",
            img: handlev3,
            why: "",
            isFinal: true,
            finalWhy:
              "40 mm rounded-triangle with finger grooves; 15° tilt keeps wrist neutral and improves propulsion.",
          },
        ],
      },
      {
        type: "iteration",
        title: "Mechatronics Housing",
        items: [
          {
            label: "V1",
            img: housingv1,
            why: "Too tall/slender; perceived volume unbalanced.",
          },
          { label: "V2", img: housingv2, why: "", isFinal: true },
        ],
        finalRationale:
          "Shorter, thicker cylinder looks proportionate and fits perpendicular motor + electronics cleanly.",
      },
      {
        type: "iteration",
        title: "Base",
        items: [
          {
            label: "V1",
            img: basev1,
            why: "Too small; tips non-replaceable; missed ISO 6.3.3.",
          },
          {
            label: "V2",
            img: basev2,
            why: "Too large; violated ISO 6.3.5 (>40 mm clearance).",
          },
          { label: "V3", img: basev3, why: "", isFinal: true },
        ],
        finalRationale:
          "1.2× V1 improves stability & proportion; rubber ferrule adds flex for unobtrusive gait.",
      },
      {
        type: "electronics",
        title: "Electronics",
        fritzingImg: StrideFritzing,
        fritzingAlt:
          "Stride electronics (Arduino Nano, N20 gear motor, RGB + IR sensors, LED, DRV8833, 7.4V battery).",
        features: [
          {
            name: "Extension mechanism",
            desc: "N20 gear motor + DRV8833; buttons for extend/retract; torque sized via calc.",
          },
          {
            name: "Boundary detection",
            desc: "Dual-sensor logic: RGB active only when IR senses ground → fewer false positives.",
          },
          {
            name: "Haptics",
            desc: "Vibration motors triggered on boundary change; manual cue button for situational FoG.",
          },
          {
            name: "Lighting",
            desc: "Single-button LED with 100 ms debounce; assists in low light and as visual cue.",
          },
          {
            name: "Power",
            desc: "7.4 V Li-ion pack; ~22 h est. with duty cycles across subsystems.",
          },
        ],
      },
    ],
  },
  {
    id: "result",
    label: "Final Design",
    type: "images",
    bg: "muted",
    images: [
      { src: FinalHandle, alt: "Final handle render" },
      { src: Sensor, alt: "Stride sensor detail" },
      { src: CMF, alt: "Stride CMF board" },
      { src: Packaging, alt: "Stride packaging" },
      { src: UserGuide, alt: "Stride user guide" },
      { src: Exploded, alt: "Stride exploded view" },
    ],
  },
  {
    id: "reflection",
    label: "Reflection",
    type: "icons",
    items: [
      {
        img: "https://img.icons8.com/ios/100/clock--v1.png",
        alt: "Mini Monopoly Game",
        title: "Earlier Prototyping",
        text: "While concept development progressed efficiently, several mechanical challenges could have been identified sooner with earlier testing (e.g. the torque limitations of the initial motor).",
      },
      {
        img: "https://img.icons8.com/ios-filled/100/gantt-chart.png",
        alt: "Mini Monopoly Game",
        title: "Agile-Gantt Hybrid",
        text: "The hybrid approach of using both Agile principles and traditional Gantt planning provided the team with structure, while still allowing flexibility in responding to testing outcomes and design changes.",
      },
      {
        img: "https://img.icons8.com/windows/96/collaboration.png",
        alt: "Mini Monopoly Game",
        title: "Collaboration",
        text: "Regular check-ins and use of shared tools helped avoid duplicated work and ensured consistent progress. Despite working under tight time constraints, the team remained cohesive and open to change.",
      },
    ],
  },
];

const sidebarSections = sectionConfigs.map(({ id, label }) => ({
  id,
  label,
}));

export default function Stride() {
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

      for (let i = sidebarSections.length - 1; i >= 0; i--) {
        const sectionTop = getSectionOffset(sidebarSections[i].id);
        if (scrollY + 100 >= sectionTop) {
          setActiveSection(sidebarSections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderSection = (section) => {
    switch (section.type) {
      case "text":
        return (
          <TextSection
            key={section.id}
            id={section.id}
            label={section.label}
            paragraphs={section.paragraphs}
            stats={section.stats}
            quote={section.quote}
            images={section.images}
            personas={section.personas}
            bg={section.bg}
          />
        );
      case "prototyping":
        return (
          <PrototypingSection
            key={section.id}
            id={section.id}
            label={section.label}
            intro={section.intro}
            blocks={section.blocks}
            bg={section.bg}
          />
        );
      case "images":
        return (
          <ImagesSection
            key={section.id}
            id={section.id}
            label={section.label}
            images={section.images}
            bg={section.bg}
          />
        );
      case "icons":
        return (
          <IconListSection
            key={section.id}
            id={section.id}
            label={section.label}
            items={section.items}
            bg={section.bg}
          />
        );
      case "issues":
        return (
          <IssueListSection
            key={section.id}
            id={section.id}
            label={section.label}
            items={section.items}
            bg={section.bg}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex min-h-screen pt-16 text-neutral-900">
        <Sidebar
          sections={sidebarSections}
          activeSection={activeSection}
          scrollProgress={scrollProgress}
        />
        <main className="flex-1">
          <ProjectHero
            title="Stride"
            summary="Stride is a smart walking stick that aids Parkinson’s patients experiencing Freezing of Gait (FoG). Developed from patient insights and clinical research, it delivers visual and haptic cues to help users resume movement. Over 10 weeks, the team designed, prototyped, and tested a discreet, ergonomic proof of concept."
            badges={[
              { label: "Role", value: "Electronics Lead & Project Coordinator" },
              {
                label: "Tools",
                value:
                  "Arduino (C++), User-Centred Design, Iterative Prototyping, Agile-Gantt",
              },
              { label: "Timeframe", value: "May – Jun 2025" },
            ]}
            buttons={[
              {
                image: "https://img.icons8.com/windows/32/external-link.png",
                text: "Full Portfolio",
                link: "/stride-portfolio.pdf",
              },
              {
                image: "https://img.icons8.com/windows/32/external-link.png",
                text: "Full Report",
                link: "/stride-report.pdf",
              },
            ]}
            image={{ src: StrideImage, alt: "Stride render" }}
          />

          {/* Render custom sections */}
          {sectionConfigs
            .filter((section) => section.type !== "overview")
            .map(renderSection)}
        </main>
      </div>
    </>
  );
}
