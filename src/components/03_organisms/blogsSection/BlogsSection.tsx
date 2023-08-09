import { allBlogs } from "contentlayer/generated";
import { BlogCard } from "../blogCard/BlogCard";
import { Carousel } from "../../01_atoms/Carousel";

export interface BlogsSectionProps {
  showHeading?: boolean;
  className?: React.HTMLAttributes<HTMLElement>["className"];
}

export const BlogsSection: React.FC<BlogsSectionProps> = ({
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
      {allBlogs.map((blog) => (
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
  );
};
