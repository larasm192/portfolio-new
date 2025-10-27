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

export default function StrideIdeation() {
  return (
    <section id="ideation" className="bg-neutral-50 px-8 py-12 md:px-24">
      <div className="mx-auto max-w-6xl">
        <SectionDivider label="Ideation" />
        <Paragraph>
          Following a Crazy 8’s co-design session that produced multiple initial
          concepts, we shared a questionnaire with{" "}
          <strong>10+ target users</strong>. Feedback from patients and
          clinicians led us to develop Stride, a boundary-detecting walking
          stick.{" "}
        </Paragraph>
        <ImageCard
          src={StrideIdeationSketches}
          alt="Freezing of Gait visual from Balanced Gait Physical Therapy"
          caption={<>Sketches from Crazy 8's ideation session</>}
        />
        <ImageCard
          src={StrideInitialThoughts}
          alt="Freezing of Gait visual from Balanced Gait Physical Therapy"
          caption={
            <>
              Initial ideation sketches – exploring various features for the
              boundary-detecting walking stick
            </>
          }
        />
      </div>
    </section>
  );
}
