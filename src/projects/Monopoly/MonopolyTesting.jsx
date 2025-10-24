import React from "react";
import {
  SectionDivider,
  Paragraph,
  IssueResolutionBox,
} from "../../components/sections";
import MonopolyPopup from "../../assets/monopoly-popup.svg";
import MonopolyMoney from "../../assets/monopoly-money.png";
import MonopolyAccessibility from "../../assets/monopoly-accessibility.jpg";

export default function MonopolyTestingSection() {
  return (
    <section id="testing" className="bg-neutral-50 px-8 py-12 md:px-24">
      <SectionDivider label="Prototyping & Testing" />
      <Paragraph>
        To verify both <strong>functionality</strong> and{" "}
        <strong>user experience</strong>, I used the{" "}
        <strong>Mocha Testing Framework</strong> to validate code performance
        and conducted <strong>three rounds of user testing</strong> to refine
        the gameplay and interface.
      </Paragraph>

      <IssueResolutionBox
        items={[
          {
            img: MonopolyPopup,
            alt: "Example img",
            issueTitle: "Issue #1",
            issueText:
              "Initially I had used the console confirm function to handle user decisions, which was jarring and disrupted the game flow.",
            resolutionTitle: "Resolution #1",
            resolutionText:
              "Designed a modular popup component with yes/no buttons and integrated it into gameplay.",
          },
          {
            img: MonopolyMoney,
            alt: "Money balancing",
            issueTitle: "Issue #2",
            issueText:
              "Users reached a stage where all properties were bought but they still had a large amount of money.",
            resolutionTitle: "Resolution #2",
            resolutionText:
              "I calculated an optimal starting balance based on property costs to ensure competitive gameplay. Then, I did a second round of user testing to confirm the balance felt right.",
          },
          {
            img: MonopolyAccessibility,
            alt: "Accessibility improvements",
            issueTitle: "Issue #3",
            issueText:
              "One user pointed out that the web app did not feel accessible for keyboard-only users.",
            resolutionTitle: "Resolution #3",
            resolutionText:
              "I added keyboard controls for all interactive elements, ensured focus states were visually clear, and tested navigation flow using only the keyboard.",
          },
        ]}
      />
    </section>
  );
}
