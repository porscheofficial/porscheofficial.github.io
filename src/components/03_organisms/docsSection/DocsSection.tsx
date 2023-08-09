import { allDocs } from "contentlayer/generated";
import { BlogCard } from "../blogCard/BlogCard";
import { Carousel } from "../../01_atoms/Carousel";
import { BlogsSectionProps } from "../blogsSection/BlogsSection";

export interface c {
  showHeading?: boolean;
  className?: React.HTMLAttributes<HTMLElement>["className"];
}

export const DocsSection: React.FC<BlogsSectionProps> = ({
  showHeading = true,
  className,
}) => {
  return (
    <Carousel
      slidesPerPage={{ base: 1, s: 2, l: 3 }}
      heading={showHeading ? "Documentation" : ""}
      theme="dark"
      width="extended"
      alignHeader="center"
      rewind={false}
      className={`${className ?? ""}`}
    >
      {allDocs.map((doc) => (
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
  );
};
