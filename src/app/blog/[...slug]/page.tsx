import { notFound } from "next/navigation";
import { allBlogs, Blog } from "contentlayer/generated";
import { Metadata } from "next";
import { format, parseISO } from "date-fns";
import { PText } from "@porsche-design-system/components-react/ssr";
import { PageProps } from "../../../types/general";
import { MdxComponents } from "../../../components/01_atoms/MdxComponents";
import { HeroSection } from "../../../components/03_organisms/heroSection/HeroSection";
import s from "./page.module.scss";
import { Author } from "../../../components/02_molecules/author/author";
import { Section } from "../../../components/02_molecules/section/section";
import { Textblock } from "../../../components/02_molecules/textblock/Textblock";
import { BASE_URL } from "../../../config";

const getParams = (params: { slug?: string[] }): Blog | null => {
  const slug = params.slug?.join("/") ?? "";
  const doc = allBlogs.find((file) => file.slugAsParams === slug);

  if (!doc) {
    return null;
  }

  return doc;
};

// eslint-disable-next-line @typescript-eslint/require-await,func-style
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const doc = allBlogs.find((file) => file.slugAsParams === params.slug[0]);
  if (!doc) return {};
  const { title } = doc;
  const description = doc.descriptionShort;
  return {
    title,
    description: doc.descriptionShort,
    keywords: doc.hashTags?.flat(),
    authors: [
      {
        name: doc.author?.name,
        url: doc.author?.slug ?? "",
      },
    ],
    openGraph: {
      url: `${BASE_URL}${doc.slug}`,
      title,
      description,
      images: doc.image,
    },
    twitter: {
      card: "summary_large_image",
      creator: "@Porsche",
      title,
      description,
    },
  };
}

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

      <Section spacing="none">
        <Textblock className={s.descriptionShort}>
          <PText theme="dark" size="large" align="center">
            {blog.descriptionShort}
          </PText>
        </Textblock>
      </Section>

      <div className="mdx-content">
        <MdxComponents code={blog.body.code} />
      </div>

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
