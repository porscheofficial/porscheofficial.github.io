import { allDocs } from "contentlayer/generated";
import { BlogCard } from "../blogCard/BlogCard";
import { Carousel } from "../../01_atoms/Carousel";
import { FeatureCard } from "../featureCard/FeatureCard";
import { Section } from "../../02_molecules/section/section";
import s from "./docsSection.module.scss";

export interface DocsSectionProps {
  showHeading?: boolean;
  className?: React.HTMLAttributes<HTMLElement>["className"];
  isFeatured?: boolean;
}

export const DocsSection: React.FC<DocsSectionProps> = ({
  showHeading = true,
  className,
  isFeatured = false,
}) => {
  const firstDoc = allDocs[0];
  const docList = isFeatured ? allDocs.slice(1, allDocs.length) : allDocs;

  return (
    <div className={s.section}>
      {isFeatured && firstDoc.slug && (
        <Section>
          <div className={s.feature}>
            <FeatureCard
              title={firstDoc.title}
              description={firstDoc.descriptionShort}
              url={firstDoc.slug}
              imageSrc={firstDoc.image}
              imageAlt=""
            />
          </div>
        </Section>
      )}
      {docList.length > 0 && (
        <Section grid={false}>
          <Carousel
            slidesPerPage={{ base: 1, s: 2, l: 3 }}
            heading={showHeading ? "Documentation" : ""}
            theme="dark"
            width="extended"
            alignHeader="center"
            rewind={false}
            className={`${className ?? ""}`}
          >
            {docList.map((doc) => (
              <BlogCard
                title={doc.title}
                description={doc.descriptionShort}
                url={doc.slug}
                key={doc.slug}
                imageSrc={doc.image}
                imageAlt=""
              />
            ))}
          </Carousel>
        </Section>
      )}
    </div>
  );
};
