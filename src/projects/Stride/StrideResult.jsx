import {
  SectionDivider,
  Paragraph,
  ImageCard,
} from "../../components/sections";
import Statistic from "../../components/ui/Statistic";
import StrideUrl from "../../assets/stride.svg";
import StrideFOG from "../../assets/stride-fog.jpg";
import StrideIdeationSketches from "../../assets/stride-ideation.svg";
import StrideInitialThoughts from "../../assets/stride-initialthoughts.svg";
import FinalHandle from "../../assets/stride-finalhandle.svg";
import CMF from "../../assets/stride-cmf.svg";
import Packaging from "../../assets/stride-packaging.svg";
import UserGuide from "../../assets/stride-userguide.svg";
import Sensor from "../../assets/stride-sensor.svg";
import Exploded from "../../assets/stride-exploded.svg";

export default function StrideResult() {
  return (
    <section id="result" className="bg-neutral-50 px-8 py-12 md:px-24">
      <div className="mx-auto max-w-6xl">
        <SectionDivider label="Final Design" />
        <ImageCard
          src={FinalHandle}
          alt="Freezing of Gait visual from Balanced Gait Physical Therapy"
        />
        <ImageCard
          src={Sensor}
          alt="Freezing of Gait visual from Balanced Gait Physical Therapy"
        />
        <ImageCard
          src={CMF}
          alt="Freezing of Gait visual from Balanced Gait Physical Therapy"
        />
        <ImageCard
          src={Packaging}
          alt="Freezing of Gait visual from Balanced Gait Physical Therapy"
        />
        <ImageCard
          src={UserGuide}
          alt="Freezing of Gait visual from Balanced Gait Physical Therapy"
        />
        <ImageCard
          src={Exploded}
          alt="Freezing of Gait visual from Balanced Gait Physical Therapy"
        />
      </div>
    </section>
  );
}
