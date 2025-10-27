import {
  SectionDivider,
  Paragraph,
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

export default function StrideTesting() {
  return (
    <section id="testing" className="px-8 py-12 md:px-24">
      <div className="mx-auto max-w-6xl">
        <SectionDivider label="Prototyping & Testing" />
        <Paragraph>
          Multiple CAD iterations were made on Fusion 360 as an initial stage of
          prototyping. Beyond exploring visual aesthetics, it was a critical
          step in testing the internal mechanisms of the product and determining
          the optimal placement for electrical components. Digital prototyping
          allowed key design choices to be made without extra expenses or
          manufacturing waste.{" "}
        </Paragraph>
      </div>
      <PrototypingBlock
        sections={[
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
        ]}
      />
    </section>
  );
}
