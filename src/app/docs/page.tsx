import { Metadata } from "next";
import ExportedImage from "next-image-export-optimizer";
import { Section } from "../../components/02_molecules/section/section";
import s from "./docs.module.scss";
import { HeroSection } from "../../components/03_organisms/heroSection/HeroSection";
import heroImage from "../../../public/assets/heroImage2.png";
import { LinkTile } from "../../components/01_atoms/LinkTile";
import contributingImage from "../../../public/assets/paintshopTaycan.jpg";
import creatingImage from "../../../public/assets/crestTaycan.jpg";

export const metadata: Metadata = {
  title: "Documentation | Porsche Open Source Platform",
};

const Docs: React.FC = () => {
  return (
    <main>
      <HeroSection
        title="Documentation"
        subtitle="FOSS@Porsche"
        imageSrc={heroImage}
        imageAlt="AI generated Porsche Taycan"
      />

      <Section spacing="xl">
        <div className={s["doc-tiles"]}>
          <LinkTile
            label="Documentation on contributing to FOSS"
            description="Contributing FOSS"
            compact
            href="/docs/contributing"
          >
            <ExportedImage
              src={contributingImage}
              alt="Porsche Stuttgart - Production Zuffenhausen: Paint shop Taycan"
              fill
            />
          </LinkTile>
          <LinkTile
            label="Documentation on creating FOSS on behalf of Porsche"
            description="Creating FOSS"
            compact
            href="/docs/creating"
          >
            <ExportedImage
              src={creatingImage}
              alt="Porsche Stuttgart - Production Zuffenhausen: Crest Taycan"
              fill
            />
          </LinkTile>
        </div>
      </Section>
    </main>
  );
};

export default Docs;
