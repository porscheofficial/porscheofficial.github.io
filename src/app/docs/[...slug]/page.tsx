/* eslint-disable import/no-unresolved */
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { allDocs, Doc } from "contentlayer/generated";
import { PageProps } from "../../../types/general";
import { MdxComponents } from "../../../components/01_atoms/MdxComponents";
import { HeroSection } from "../../../components/03_organisms/heroSection/HeroSection";
import heroImage from "../../../../public/assets/heroImage2.png";
import { Section } from "../../../components/02_molecules/section/section";
import { Textblock } from "../../../components/02_molecules/textblock/Textblock";

const getParams = (params: { slug?: string[] }): Doc | null => {
  const slug = params.slug?.join("/") ?? "";
  const doc = allDocs.find((file) => file.slugAsParams === slug);

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
  const doc = allDocs.find((file) => file._raw.flattenedPath === params.slug);
  if (!doc) return {};
  return { title: doc.title };
};

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
        imageSrc={heroImage}
        imageAlt="AI generated Porsche Taycan"
      />

      <Section>
        <Textblock>
          <MdxComponents code={doc.body.code} />
        </Textblock>
      </Section>
    </main>
  );
};

export default DocPage;
