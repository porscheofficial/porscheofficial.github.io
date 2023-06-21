import { Metadata } from "next";
import { Section } from "../../../components/02_molecules/section/section";
import { HeroSection } from "../../../components/03_organisms/heroSection/HeroSection";
import heroImage from "../../../../public/assets/heroImage2.png";
import { Textblock } from "../../../components/02_molecules/textblock/Textblock";
import CreatingDoc from "./CREATING_FOSS.mdx";

export const metadata: Metadata = {
  title: "Creating FOSS | Porsche Open Source Platform",
};

const Docs: React.FC = () => {
  return (
    <main>
      <HeroSection
        title="Creating FOSS"
        subtitle="FOSS@Porsche"
        imageSrc={heroImage}
        imageAlt="AI generated Porsche Taycan"
      />

      <Section>
        <Textblock id="docs" className="mdx-content">
          <CreatingDoc />
        </Textblock>
      </Section>
    </main>
  );
};

export default Docs;
