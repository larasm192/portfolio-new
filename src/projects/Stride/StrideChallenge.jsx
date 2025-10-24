import { SectionDivider, Paragraph } from "../../components/sections";
import Statistic from "../../components/ui/Statistic";

export default function StrideChallengeSection() {
  return (
    <section id="challenge" className="bg-neutral-50 px-8 py-12 md:px-24">
      <div className="mx-auto max-w-6xl">
        <SectionDivider label="The Challenge" />
        <Paragraph>
          Parkinson’s patients experiencing Freezing of Gait (FoG) often face
          sudden mobility blocks, compromising balance and independence.
          Existing walking aids provide stability, but few offer real-time cues
          or feedback to help users resume motion safely.{" "}
        </Paragraph>
        <div className="flex flex-wrap justify-center gap-16">
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
      </div>
    </section>
  );
}
