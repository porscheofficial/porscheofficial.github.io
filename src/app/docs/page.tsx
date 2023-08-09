import { DocsSection } from "../../components/03_organisms/docsSection/DocsSection";
import heroImage from "../../../public/assets/heroImage2.png";
import { HeroSection } from "../../components/03_organisms/heroSection/HeroSection";
import { Section } from "../../components/02_molecules/section/section";

const DocsPage: React.FC = () => {
  return (
    <main>
      <HeroSection
        title="Docs"
        subtitle="FOSS@Porsche"
        imageSrc={heroImage}
        imageAlt="AI generated Porsche Taycan"
      />
      <Section grid={false}>
        <DocsSection isFeatured />
      </Section>
    </main>
  );
};

export default DocsPage;
