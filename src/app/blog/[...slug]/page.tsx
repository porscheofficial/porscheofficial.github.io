import { notFound } from "next/navigation";
// eslint-disable-next-line import/no-unresolved
import { allBlogs, Blog } from "contentlayer/generated";
import { Metadata } from "next";
import { PageProps } from "../../../types/general";
import { MdxComponents } from "../../../components/01_atoms/MdxComponents";

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

  return (
    <main>
      {blog.title}
      <MdxComponents code={blog.body.code} />
    </main>
  );
};
export default BlogPage;
