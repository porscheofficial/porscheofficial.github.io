import { notFound } from "next/navigation";
import { allBlogs, Blog } from "contentlayer/generated";
import { Metadata } from "next";
import { PageProps } from "../../../types/general";
import { MdxComponents } from "../../../components/01_atoms/MdxComponents";
import { HeroSection } from "../../../components/03_organisms/heroSection/HeroSection";
import { Section } from "../../../components/02_molecules/section/section";
import { Textblock } from "../../../components/02_molecules/textblock/Textblock";

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
      <HeroSection
        title={blog.title}
        subtitle="FOSS@Porsche"
        imageSrc={blog.image}
        imageAlt=""
      />

      <Section>
        <Textblock>
          <MdxComponents code={blog.body.code} />
        </Textblock>
      </Section>
    </main>
  );
};
export default BlogPage;
