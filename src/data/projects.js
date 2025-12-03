import monopolyUrl from "../assets/monopoly-render.png";
import strideUrl from "../assets/stride.svg";
import reseatUrl from "../assets/reseat.svg";
import vehicle2Url from "../assets/vehicle2.svg";
import vehicleUrl from "../assets/vehicle.svg";
import materialiseUrl from "../assets/materialise.svg";
import revengUrl from "../assets/reveng.svg";
import ifeUrl from "../assets/ife.svg";
import pcsUrl from "../assets/pcs.svg";
import revolveUrl from "../assets/revolve.svg";
import electricarUrl from "../assets/electricar.svg";
import dancingsegUrl from "../assets/dancingseg.svg";
import flexicookUrl from "../assets/flexicook.svg";
import portfolioUrl from "../assets/portfolio-render.png";
import ecodashUrl from "../assets/ecodash.png";

export const projects = [
  {
    title: "Ecodash",
    description:
      "An iOS carbon-intensity dashboard built with Flutter/Dart, powered by a live carbon intensity API.",
    link: "/ecodash",
    image: ecodashUrl,
    skills: ["Flutter", "Dart", "REST APIs"],
    tags: ["software", "sustainability"],
  },
  {
    title: "Mini Monopoly",
    description:
      "A fully interactive Monopoly game, personalised with custom properties named after my friends.",
    link: "/mini-monopoly",
    image: monopolyUrl,
    skills: ["HTML & CSS", "Figma", "JavaScript"],
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
    title: "Conceptual Vehicle Design and Analysis",
    description:
      "Designed and analysed vehicle components to optimise structural performance and cooling efficiency.",
    link: "/conceptual-vehicle-design-and-analysis",
    image: vehicleUrl,
    skills: ["Fusion 360", "Thermofluids", "CFD"],
    tags: ["engineering"],
  },
  {
    title: "Aerodynamic and Thermal Optimisation",
    description:
      "Optimised the aerodynamics of a vehicle using thermofluid simulations to improve performance.",
    link: "/aerodynamic-and-thermal-systems-optimisation",
    image: vehicle2Url,
    skills: ["Fusion 360", "Thermofluids", "CFD"],
    tags: ["engineering"],
  },
  {
    title: "Dancing Segway",
    description:
      "Programmed a mini-Segway robot to dance in sync with music using beat detection and PID balance control.",
    link: "/dancing-segway",
    image: dancingsegUrl,
    skills: ["Python", "Audio Analysis", "Embedded Systems"],
    tags: ["electronics"],
  },
  {
    title: "Portfolio v3",
    description:
      "My personal portfolio website (this one!), showcasing my projects and skills.",
    link: "/portfolio-v3",
    image: portfolioUrl,
    skills: ["React", "Vite", "Tailwind CSS"],
    tags: ["software"],
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
  {
    title: "REVOLVE",
    description:
      "Built a physical computing system using sensors and motors to perform a rotating action triggered by light.",
    link: "/revolve",
    image: revolveUrl,
    skills: ["Arduino (C++)", "Sensors", "Physical Computing"],
    tags: ["electronics", "sustainability"],
  },
  {
    title: "Improving Food Experiences",
    description:
      "Designed solutions to improve food experiences for university athletes through HCD processes.",
    link: "/improving-food-experiences",
    image: ifeUrl,
    skills: ["Design Research", "User-Centred Design", "Prototyping"],
    tags: ["product-design"],
  },
  {
    title: "FlexiCook",
    description:
      "Created a flexible cooking product concept for students living in shared kitchen environments.",
    link: "/flexicook",
    image: flexicookUrl,
    skills: ["Prototyping", "User-Centred Design", "Sketch Modelling"],
    tags: ["product-design"],
  },
  {
    title: "Plane Crash Survivability",
    description:
      "Predicted crash survivability using machine learning on aviation datasets.",
    link: "/plane-crash-survivability",
    image: pcsUrl,
    skills: ["Python", "pandas", "scikit-learn"],
    tags: ["software"],
  },
  {
    title: "Electronics Car",
    description:
      "Designed and programmed an autonomous car using sensors and control logic.",
    link: "/electronics-car",
    image: electricarUrl,
    skills: ["ESP32", "Python", "Bluetooth"],
    tags: ["electronics"],
  },
  {
    title: "REVENG",
    description:
      "Reverse engineered a consumer product to understand manufacturing processes and material choices.",
    link: "/reveng",
    image: revengUrl,
    skills: ["CAD", "Product Teardown", "Manufacturing Analysis"],
    tags: ["engineering"],
  },
  {
    title: "Materialise",
    description:
      "Explored materials used in consumer products and their impact on performance and sustainability.",
    link: "/materialise",
    image: materialiseUrl,
    skills: ["Materials", "Manufacturing", "Design for Environment"],
    tags: ["engineering"],
  },
];

export const projectCategories = [
  "all",
  "product-design",
  "electronics",
  "software",
  "engineering",
  "sustainability",
];
