import { allBlogs } from "contentlayer/generated";
import { BlogCard } from "../blogCard/BlogCard";
import { Carousel } from "../../01_atoms/Carousel";
import { Section } from "../../02_molecules/section/section";
import { FeatureCard } from "../featureCard/FeatureCard";
import s from "./blogsSection.module.scss";

export interface BlogsSectionProps {
  showHeading?: boolean;
  className?: React.HTMLAttributes<HTMLElement>["className"];
  isFeatured?: boolean;
}

export const BlogsSection: React.FC<BlogsSectionProps> = ({
  showHeading = true,
  className,
  isFeatured = false,
}) => {
  const firstDoc = allBlogs[0];
  const docList = isFeatured ? allBlogs.slice(1, allBlogs.length) : allBlogs;
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
        <Carousel
          slidesPerPage={{ base: 1, s: 2, l: 3 }}
          heading={showHeading ? "Documentation" : ""}
          theme="dark"
          width="extended"
          alignHeader="center"
          rewind={false}
          className={`${className ?? ""}`}
        >
          {docList.map((blog) => (
            <BlogCard
              title={blog.title}
              description={blog.descriptionShort}
              url={blog.slug}
              key={blog.slug}
              imageSrc={blog.image}
              imageAlt=""
            />
          ))}
        </Carousel>
      )}
    </div>
  );
};
