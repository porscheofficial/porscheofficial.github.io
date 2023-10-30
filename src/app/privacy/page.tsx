import { Metadata } from "next";
import { allStatics } from "contentlayer/generated";
import { Section } from "../../components/02_molecules/section/section";
import { HeroSection } from "../../components/03_organisms/heroSection/HeroSection";
import heroImage from "../../../public/assets/heroImage2.png";
import { Textblock } from "../../components/02_molecules/textblock/Textblock";
import { MdxComponents } from "../../components/01_atoms/MdxComponents";

export const metadata: Metadata = {
  title: "Privacy | Porsche Open Source Platform",
  alternates: {
    canonical: "/privacy",
  },
};

const Privacy: React.FC = () => {
  const content = allStatics.find(
    (file) => file._raw.sourceFileName === "PRIVACY_POLICY.mdx",
  );
  return (
    <main>
      <HeroSection
        title="Privacy Policy"
        subtitle="FOSS@Porsche"
        imageSrc={heroImage}
        imageAlt="AI generated Porsche Taycan"
      />
      {!!content?.body.code && (
        <Section>
          <Textblock id="docs" className="mdx-content">
            <MdxComponents code={content.body.code} theme="dark" />
          </Textblock>
        </Section>
      )}
    </main>
  );
};

export default Privacy;
