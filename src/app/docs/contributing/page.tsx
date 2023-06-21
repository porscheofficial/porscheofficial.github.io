import { Metadata } from "next";
import { Section } from "../../../components/02_molecules/section/section";
import { HeroSection } from "../../../components/03_organisms/heroSection/HeroSection";
import heroImage from "../../../../public/assets/heroImage2.png";
import { Textblock } from "../../../components/02_molecules/textblock/Textblock";
import ContributingDoc from "./CONTRIBUTING_UPSTREAM.mdx";

export const metadata: Metadata = {
  title: "Contributing Upstream | Porsche Open Source Platform",
};

const Docs: React.FC = () => {
  return (
    <main>
      <HeroSection
        title="Contributing Upstream"
        subtitle="FOSS@Porsche"
        imageSrc={heroImage}
        imageAlt="AI generated Porsche Taycan"
      />

      <Section>
        <Textblock id="docs" className="mdx-content">
          <ContributingDoc />
        </Textblock>
      </Section>
    </main>
  );
};

export default Docs;
