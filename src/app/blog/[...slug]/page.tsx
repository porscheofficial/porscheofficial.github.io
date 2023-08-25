import { notFound } from "next/navigation";
import { allBlogs, Blog } from "contentlayer/generated";
import { Metadata } from "next";
import { format, parseISO } from "date-fns";
import { PageProps } from "../../../types/general";
import { MdxComponents } from "../../../components/01_atoms/MdxComponents";
import { HeroSection } from "../../../components/03_organisms/heroSection/HeroSection";
import { Author } from "../../../components/02_molecules/author/author";

const getParams = (params: { slug?: string[] }): Blog | null => {
  const slug = params.slug?.join("/") ?? "";
  const doc = allBlogs.find((file) => file.slugAsParams === slug);

  if (!doc) {
    return null;
  }

  return doc;
};

export const generateMetadata = ({
  params,
}: {
  params: { slug: string };
}): Metadata => {
  const doc = allBlogs.find((file) => file._raw.flattenedPath === params.slug);
  if (!doc) return {};
  return { title: doc.title };
};

export const generateStaticParams = (): PageProps["params"][] => {
  return allBlogs.map((doc) => ({
    slug: doc.slugAsParams.split("/"),
  }));
};

const BlogPage: React.FC<PageProps> = ({ params }: PageProps) => {
  const blog = getParams(params);

  if (!blog) {
    notFound();
  }

  const formatDate = format(parseISO(blog.date), "do LLLL");
  const hashes = blog.hashTags ? `· #${blog.hashTags.join(" #")}` : "";
  const description = `${formatDate} · ${blog.readTime} reading time ${hashes}`;

  return (
    <main>
      <HeroSection
        title={blog.title}
        description={description}
        subtitle="FOSS@Porsche"
        imageSrc={blog.image}
        imageAlt=""
      />

      <MdxComponents code={blog.body.code} />

      {!!blog.author && (
        <Author
          key={blog.author._id}
          name={blog.author.name}
          description={blog.author.description}
          imageSrc={blog.author.image}
          slug={blog.author.slug}
        />
      )}
    </main>
  );
};
export default BlogPage;
