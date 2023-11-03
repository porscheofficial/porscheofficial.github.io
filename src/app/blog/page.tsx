import { HeroSection } from "../../components/03_organisms/heroSection/HeroSection";
import heroImage from "../../../public/assets/heroImage2.png";
import { Section } from "../../components/02_molecules/section/section";
import { BlogsSection } from "../../components/03_organisms/blogsSection/BlogsSection";

const BlogPage: React.FC = () => {
  return (
    <main>
      <HeroSection
        title="Contributor Stories"
        subtitle="FOSS@Porsche"
        imageSrc={heroImage}
        imageAlt="AI generated Porsche Taycan"
      />
      <Section grid={false} spacing="l">
        <BlogsSection isFeatured showHeading={false} />
      </Section>
    </main>
  );
};

export default BlogPage;
