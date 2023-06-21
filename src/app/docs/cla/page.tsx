import { Section } from "../../../components/02_molecules/section/section";
import { HeroSection } from "../../../components/03_organisms/heroSection/HeroSection";
import heroImage from "../../../../public/assets/heroImage2.png";
import { Textblock } from "../../../components/02_molecules/textblock/Textblock";
import CLADoc from "./CONTRIBUTOR_LICENSE_AGREEMENT.mdx";

const Docs: React.FC = () => {
  return (
    <main>
      <HeroSection
        title="Contributor License Agreement"
        subtitle="FOSS@Porsche"
        imageSrc={heroImage}
        imageAlt="AI generated Porsche Taycan"
      />

      <Section>
        <Textblock id="docs" className="mdx-content">
          <CLADoc />
        </Textblock>
      </Section>
    </main>
  );
};

export default Docs;
