import { Metadata } from "next";
import { Section } from "../../components/02_molecules/section/section";
import { HeroSection } from "../../components/03_organisms/heroSection/HeroSection";
import heroImage from "../../../public/assets/heroImage2.png";
import { Textblock } from "../../components/02_molecules/textblock/Textblock";
import Privacy from "./PRIVACY_POLICY.mdx";

export const metadata: Metadata = {
  title: "Privacy | Porsche Open Source Platform",
  alternates: {
    canonical: "/privacy",
  },
};

const Docs: React.FC = () => {
  return (
    <main>
      <HeroSection
        title="Privacy Policy"
        subtitle="FOSS@Porsche"
        imageSrc={heroImage}
        imageAlt="AI generated Porsche Taycan"
      />

      <Section>
        <Textblock id="docs" className="mdx-content">
          <Privacy />
        </Textblock>
      </Section>
    </main>
  );
};

export default Docs;
