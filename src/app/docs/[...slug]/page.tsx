/* eslint-disable import/no-unresolved */
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { allDocs, Doc } from "contentlayer/generated";
import { PageProps } from "../../../types/general";
import { MdxComponents } from "../../../components/01_atoms/MdxComponents";
import { HeroSection } from "../../../components/03_organisms/heroSection/HeroSection";
import { Section } from "../../../components/02_molecules/section/section";
import { Textblock } from "../../../components/02_molecules/textblock/Textblock";
import { BASE_URL } from "../../../config";

const getParams = (params: { slug?: string[] }): Doc | null => {
  const slug = params.slug?.join("/") ?? "";
  const doc = allDocs.find((file) => file.slugAsParams === slug);

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
  const doc = allDocs.find((file) => file.slugAsParams === params.slug[0]);
  if (!doc) return {};
  const { title } = doc;
  const description = doc.descriptionShort;
  return {
    title,
    description: doc.descriptionShort,
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
  return allDocs.map((doc) => ({
    slug: doc.slugAsParams.split("/"),
  }));
};
const DocPage: React.FC<PageProps> = ({ params }: PageProps) => {
  const doc = getParams(params);

  if (!doc) {
    notFound();
  }

  return (
    <main>
      <HeroSection
        title={doc.title}
        subtitle="FOSS@Porsche"
        imageSrc={doc.image}
        imageAlt=""
      />

      <Section>
        <Textblock className="mdx-content">
          <MdxComponents code={doc.body.code} theme="dark" />
        </Textblock>
      </Section>
    </main>
  );
};

export default DocPage;
