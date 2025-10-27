import {
  SectionDivider,
  Paragraph,
  ImageCard,
  Quote,
  PersonasGrid,
} from "../../components/sections";
import Statistic from "../../components/ui/Statistic";
import StrideUrl from "../../assets/stride.svg";
import StrideFOG from "../../assets/stride-fog.jpg";
import StrideUsers from "../../assets/stride-users.svg";
import StrideUXMap from "../../assets/stride-uxmap.svg";

export default function StrideInsight() {
  return (
    <section id="insights" className="px-8 py-12 md:px-24">
      <div className="mx-auto max-w-6xl">
        <SectionDivider label="Insights from Research" />
        <Paragraph>
          By talking to experts and visiting care homes including Bupa Lynton
          Hall, Westcombe Park, and the Age UK Centre, we built empathy with
          Parkinson’s patients and caregivers, gaining first-hand insight into
          their mobility challenges.{" "}
        </Paragraph>
        <div className="flex flex-wrap justify-center gap-x-16">
          {/* or using children for richer formatting */}
          <Statistic
            value="4"
            caption="Care homes visited"
            valueClass="from-blue-300 to-blue-800"
          />
          <Statistic
            value="10+"
            caption="Patient interviews"
            valueClass="from-blue-300 to-blue-800"
          />
          <Statistic
            value="4"
            caption="Expert interviews"
            valueClass="from-blue-300 to-blue-800"
          />
        </div>
        <Quote author="Parkinson's Patient" role="The Caring Physio">
          “I fall around 10 times everyday. ... no, nothing has helped, no
          physio no exercise nothing. I still fall many times. ... If I could
          think of anything, maybe something to help with balance... that would
          be my dream honestly.”
        </Quote>
        <ImageCard
          src={StrideUsers}
          alt="Freezing of Gait visual from Balanced Gait Physical Therapy"
          caption={<>Photos from carehome visits with Parkinson's patients</>}
        />
        <Paragraph>
          Synthesising our research, we developed{" "}
          <strong>3 key personas</strong> and corresponding{" "}
          <strong>UX journey maps</strong> capturing diverse Parkinson’s
          experiences. These personas guided our design decisions, ensuring
          Stride effectively addresses real user needs.
        </Paragraph>
        <PersonasGrid
          personas={[
            {
              name: "Benjamin",
              age: 61,
              stage: "Early stage",
              yearsSinceDx: 3,
              avatar: "/images/benjamin.jpg",
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
              avatar: "/images/edith.jpg",
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
              avatar: "/images/patricia.jpg",
              bio: "Supports husband with moderate PD; wants him to stay socially engaged without highlighting the condition.",
              needs: "discreet support to keep him involved socially.",
              because: "she values his confidence and participation.",
              however: "current aids feel stigmatizing and intrusive.",
              accent: "from-emerald-500 to-teal-600",
            },
          ]}
        />
        <ImageCard
          src={StrideUXMap}
          alt="UX Journey Map"
          caption={<>UX Journey Map made from personas</>}
        />
      </div>
    </section>
  );
}
