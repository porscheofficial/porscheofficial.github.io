import { Metadata } from "next";
import { Section } from "../../../components/02_molecules/section/section";
import { HeroSection } from "../../../components/03_organisms/heroSection/HeroSection";
import heroImage from "../../../../public/assets/heroImage2.png";
import { Textblock } from "../../../components/02_molecules/textblock/Textblock";
import ContributingDoc from "./CONTRIBUTING_UPSTREAM.mdx";
import { EditOnGithub } from "../../../components/02_molecules/editOnGithub/EditOnGithub";

export const metadata: Metadata = {
  title: "Contributing Upstream | Porsche Open Source Platform",
  alternates: {
    canonical: "/docs/contributing",
  },
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
      <EditOnGithub file="/src/app/docs/contributing/CONTRIBUTING_UPSTREAM.mdx" />
    </main>
  );
};

export default Docs;
