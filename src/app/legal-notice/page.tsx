import { Metadata } from "next";
import { allStatics } from "contentlayer/generated";
import { Section } from "../../components/02_molecules/section/section";
import { HeroSection } from "../../components/03_organisms/heroSection/HeroSection";
import heroImage from "../../../public/assets/heroImage2.png";
import { Textblock } from "../../components/02_molecules/textblock/Textblock";
import { MdxComponents } from "../../components/01_atoms/MdxComponents";

export const metadata: Metadata = {
  title: "Legal Notice | Porsche Open Source Platform",
  alternates: {
    canonical: "/legal-notice",
  },
};

const Legal: React.FC = () => {
  const content = allStatics.find(
    (file) => file._raw.sourceFileName === "LEGAL_NOTICE.mdx",
  );
  return (
    <main>
      <HeroSection
        title="Legal Notice"
        subtitle="FOSS@Porsche"
        imageSrc={heroImage}
        imageAlt="AI generated Porsche Taycan"
      />

      {!!content?.body.code && (
        <Section>
          <Textblock id="docs" className="mdx-content">
            <MdxComponents code={content.body.code} />
          </Textblock>
        </Section>
      )}
    </main>
  );
};

export default Legal;
