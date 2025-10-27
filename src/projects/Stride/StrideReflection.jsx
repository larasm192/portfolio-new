import {
  SectionDivider,
  Paragraph,
  IconBox,
  ImageCard,
  Quote,
  PrototypingBlock,
  IterationGallery,
  FeatureList,
} from "../../components/sections";
import Statistic from "../../components/ui/Statistic";
import StrideUrl from "../../assets/stride.svg";
import StrideFOG from "../../assets/stride-fog.jpg";
import StrideUsers from "../../assets/stride-users.svg";
import StrideUXMap from "../../assets/stride-uxmap.svg";
import handlev1 from "../../assets/stride-handle-v1.png";
import handlev2 from "../../assets/stride-handle-v2.png";
import handlev3 from "../../assets/stride-handle-v3.png";
import housingv1 from "../../assets/stride-housing-v1.png";
import housingv2 from "../../assets/stride-housing-v2.png";
import basev1 from "../../assets/stride-base-v1.png";
import basev2 from "../../assets/stride-base-v2.png";
import basev3 from "../../assets/stride-base-v3.png";
import StrideFritzing from "../../assets/stride-fritzing.jpeg";

export default function StrideReflection() {
  const items = [
    {
      img: "https://img.icons8.com/ios/100/clock--v1.png",
      alt: "Mini Monopoly Game",
      title: "Earlier Prototyping",
      text: "While concept development progressed efficiently, several mechanical challenges could have been identified sooner with earlier testing (e.g. the torque limitations of the initial motor). ",
    },
    {
      img: "https://img.icons8.com/ios-filled/100/gantt-chart.png",
      alt: "Mini Monopoly Game",
      title: "Agile-Gantt Hybrid",
      text: "The hybrid approach of using both Agile principles and traditional Gantt planning provided the team with structure, while still allowing flexibility in responding to testing outcomes and design changes. ",
    },
    {
      img: "https://img.icons8.com/windows/96/collaboration.png",
      alt: "Mini Monopoly Game",
      title: "Collaboration",
      text: "Regular check-ins and use of shared tools helped avoid duplicated work and ensured consistent progress. Despite working under tight time constraints, the team remained cohesive and open to change.",
    },
  ];
  return (
    <section id="reflection" className="px-8 py-12 md:px-24">
      <div className="mx-auto max-w-6xl">
        <SectionDivider label="Reflection" />
        <IconBox items={items} columns={3} />
      </div>
    </section>
  );
}
