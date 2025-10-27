import {
  SectionDivider,
  Paragraph,
  ImageCard,
} from "../../components/sections";
import Statistic from "../../components/ui/Statistic";
import StrideUrl from "../../assets/stride.svg";
import StrideFOG from "../../assets/stride-fog.jpg";

export default function StrideChallenge() {
  return (
    <section id="challenge" className="bg-neutral-50 px-8 py-12 md:px-24">
      <div className="mx-auto max-w-6xl">
        <SectionDivider label="The Challenge" />
        <Paragraph>
          Freezing of gait (FoG) is a symptom of Parkinson’s disease,
          characterised by sudden episodes where individuals feel unable to move
          their feet forward despite intending to walk. Parkinson’s patients
          experiencing FoG often face sudden mobility blocks, compromising
          balance and independence. Existing walking aids provide stability, but
          few offer real-time cues or feedback to help users resume motion
          safely.{" "}
        </Paragraph>
        <div className="flex flex-wrap justify-center gap-x-16">
          <Statistic
            prefix="More than"
            value="10M"
            caption="Parkinson’s patients worldwide"
            valueClass="from-blue-300 to-blue-800"
          />
          <Statistic
            prefix="Up to"
            value="80%"
            caption="Of patients experience Freezing of Gait (FoG)"
            valueClass="from-blue-300 to-blue-800"
          />
        </div>
        <ImageCard
          src={StrideFOG}
          alt="Freezing of Gait visual from Balanced Gait Physical Therapy"
          caption={
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
          }
        />
      </div>
    </section>
  );
}
