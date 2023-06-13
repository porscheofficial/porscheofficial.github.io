import { Section } from "../../components/02_molecules/section/section";
import { HeroSection } from "../../components/03_organisms/heroSection/HeroSection";
import heroImage from "../../../public/assets/heroImage2.png";
import { Textblock } from "../../components/02_molecules/textblock/Textblock";
import FOSSDoc from "./FOSS_DOC.mdx";

const Doc: React.FC = () => {
  return (
    <>
      <HeroSection
        title="Documentation"
        subtitle="FOSS@Porsche"
        imageSrc={heroImage}
        imageAlt="AI generated Porsche Taycan"
      />

      <Section>
        <Textblock id="doc" className="mdx-content">
          <FOSSDoc />
        </Textblock>
      </Section>
    </>
  );
};

export default Doc;
