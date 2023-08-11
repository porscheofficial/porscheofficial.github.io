import { allBlogs } from "contentlayer/generated";
import { compareDesc } from "date-fns";
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
  const posts = allBlogs.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );
  const firstDoc = posts[0];
  const docList = isFeatured ? posts.slice(1, posts.length) : posts;
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
            heading={showHeading ? "Blogs" : ""}
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
                time={blog.date}
                url={blog.slug}
                key={blog.slug}
                imageSrc={blog.image}
                imageAlt=""
              />
            ))}
          </Carousel>
        </Section>
      )}
    </div>
  );
};
